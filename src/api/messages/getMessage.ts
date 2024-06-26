import {z} from 'zod';

const messageSchema = z.object({
  id: z.number(),
  body: z.string(),
  title: z.string(),
  userId: z.number(),
});
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;

export async function getMessageStub() {
  await fetch(API_URL + '/message')
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json)));
}

export async function getMessageStub2() {
  const response = await fetch(API_URL + '/message');
  const json = await response.json();
  return {
    json: json,
    response: response,
  };
}

export async function getMessageStub500Err() {
  const response = await fetch(API_URL + '/message?fail=500');
  const json = await response.json();
  return {
    json: json,
    response: response,
  };
}

export async function getMessageStubwithZodSafeParse(messageUrl: string) {
  const response = await fetch(messageUrl);
  const json = await response.json();
  // two methods of validation one that doesnt throw
  const messageResult = messageSchema.safeParse(json);

  return {
    message: messageResult,
    response: response,
  };
}

export async function getMessageStubwithZodParse(messageUrl: string) {
  const response = await fetch(messageUrl);
  const json = await response.json();

  // method two throws error
  try {
    const messageResult = messageSchema.parse(json);
    return {
      message: messageResult,
      response: response,
    };
  } catch (err) {
    return {
      error: err,
      response: response,
    };
  }
}
