import {ZodSchema, ZodError} from 'zod'; //or should I use ZodError
//import {ClubFullDetail} from '../club/getClubDetails';

//const get = async (url: string, input: Record<string, string>) => {
//  return fetch(`${url}?${new URLSearchParams(input).toString()}`);
//};

//const get2 = async (url: string, input: Record<string, string>) => {
//  return fetch(`${url}/wokingb`);
//};

//const post = async (url: string, input: Record<string, string>) => {
//  return fetch(url, {
//    method: 'POST',
//    body: JSON.stringify(input),
//  });
//};

/*type CreateAPIMethod = <TInput extends Record<string, string>, TOutput>(opts: {
  url: string;
  method: 'GET' | 'POST' | 'GET2';
}) => (input: TInput) => Promise<TOutput>;

const createAPIMethod: CreateAPIMethod = opts => input => {
  const method =
    opts.method === 'POST' ? post : opts.method === 'GET2' ? get2 : get;
  try {
    return (
      //try {
      method(opts.url, input)
        // Imagine error handling here...
        .then(res => res.json())
        .catch(err => {
          console.log('error in inner catch');
          console.dir(err);
          throw err;
        })
      //}
      //catch (err) {
      //  console.dir(err);
      //  throw err;
      //}
    );
  } catch (err) {
    console.log('error in outer catch');
    console.dir(err);
    throw err;
  }
};
*/

/**
 * You can reuse this function as many times as you
 * like to create all your API methods!
 */
export const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
/*export const getClub = createAPIMethod<
  {urlFriendlyName: string}, // The input
  {data: ClubFullDetail; name: string} // The output
>({
  method: 'GET2',
  url: `${API_URL}/api/v2/clubapi/clubfulldetail`,
});
*/
export type nameType = {name: string};
/*
export const basicName = <T>(firstName: string, lastName: string): T => {
  //return {message = `hello ${firstName} ${lastName}`};
  return {name = `hello ${firstName} ${lastName}`} as T;
};
*/

/*
export const basicName = <T>(
  firstName: string,
  lastName: string,
): Promise<T> => {
  //return {message = `hello ${firstName} ${lastName}`};
  //return new Promise({name = `hello ${firstName} ${lastName}`} as T);
  return new Promise(resolve => {
    resolve({name: `hello ${firstName} ${lastName}`} as T);
  });
};
*/

type BasicName = <T>(firstName: string, lastName: string) => Promise<T>;

export const basicName: BasicName = async <T>(
  firstName: string,
  lastName: string,
): Promise<T> => ({name: `hello ${firstName} ${lastName}`} as T);

// first example of using generic api call with url and an id to get data
export const basicApiFirst = async <T>(url: string, id: string) => {
  //const url = `${API_URL}/api/v2/clubapi/clubfulldetail`;
  fetch(`${API_URL}${url}/${id}`)
    .then(res => res.json())
    .then(data => data as T)
    .catch(err => {
      console.dir(err);
      throw err;
    });
};

// second example of using generic api call with url and an id to get data
type BasicApiOptions = RequestInit & {
  body?: Record<string, string>;
  headers?: HeadersInit;
  mode?: 'cors' | 'no-cors' | 'same-origin';
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
};
type ApiResponse<T> = {
  data?: T;
  status: number;
  ok?: boolean;
  error?: string;
  schemaError?: ZodError<T>;
};
export const basicApi = async <T>(
  url: string,
  {body, headers, mode, method, ...options}: BasicApiOptions = {},
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${url}`, {
      method: method || 'GET',
      body: JSON.stringify(body),
      headers: headers || {'Content-Type': 'application/json'},
      mode: mode || 'cors',
      ...options,
    });
    if (!response.ok) {
      const errorText = await response.text();
      return {status: response.status, error: errorText, ok: response.ok};
    }
    const data: T = (await response.json()) as T;
    //const parsedData = clubFullDetailSchema.safeParse(data);
    return {data, status: response.status, ok: response.ok};
  } catch (error) {
    return {status: 500, error: (error as Error).message, ok: false};
  }
};

export const safeParseApi = async <T>(
  url: string,
  schema: ZodSchema<T>,
  {body, headers, mode, method, ...options}: BasicApiOptions = {},
  input?: Record<string, string>,
  //{body, headers, mode, method, ...options}: BasicApiOptions = {},
): Promise<ApiResponse<T>> => {
  try {
    //console.log('------input------');
    //console.dir(input);
    const _method = method || 'GET';
    const _url =
      _method === 'GET' && input !== undefined
        ? `${url}?${new URLSearchParams(input).toString()}`
        : url;
    const _body = _method === 'GET' ? undefined : JSON.stringify(body);
    const response = await fetch(`${_url}`, {
      method: _method,
      body: _body,
      headers: headers || {'Content-Type': 'application/json'},
      mode: mode || 'cors',
      ...options,
    });
    if (!response.ok) {
      const errorText = await response.text();
      return {status: response.status, error: errorText, ok: response.ok};
    }
    const data: T = (await response.json()) as T;
    const parsedData = schema.safeParse(data);
    if (!parsedData.success) {
      //console.dir(_url);
      //console.dir(parsedData.error);
      return {
        status: 500,
        error: 'Invalid data',
        schemaError: parsedData.error,
        ok: false,
      };
    }
    return {data: parsedData.data, status: response.status, ok: response.ok};
  } catch (error) {
    return {status: 500, error: (error as Error).message, ok: false};
  }
};

/*
// extends object forces it to be an object
// addind on the status: number to the object as default
type ApiResponse<Data extends object = {status: number}> = {
  data: Data;
  isError: boolean;
};

const clubResponse: ApiResponse<{clubName: string}> = {
  data: {clubName: 'woking fc'},
  isError: false,
};

const clubsResponse: ApiResponse<{clubNames: string[]}> = {
  data: {clubNames: ['woking fc']},
  isError: false,
};

// making api response use default status without specifying type
const updateResponse: ApiResponse = {
  data: {status: 200},
  isError: false,
};

type ApiMethod = <TInput extends Record<string, string>, TOutput>(opts: {
  url: string;
  method?: 'GET' | 'POST';
}) => (input: TInput) => Promise<TOutput>;
export const callApi: ApiMethod = opts => input => {
  //async ({ method,url }: { method:string = 'GET'; url: string; }) {
  // some logic/api/v2
  //const response = await fetch(`${url}`, {});
  //return response;
  //return Promise.resolve({} as any);
  const {url, method = 'GET'} = opts;
  //const method = opts.method === 'POST' ? post : get;

  return (
    method(opts.url, input)
      // Imagine error handling here...
      .then(res => res.json())
  );
};

const getClubs = callApi<{id: string}, {clubName: string}>({
  url: `/api/v2/ClubApi/ClubList`,
});
*/
