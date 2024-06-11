import {clubDetailSchema} from './getClubs';
import {z} from 'zod';
import {safeParseApi} from '../generic/callApi';

/*const clubFullDetailSchema = z.object({
  ClubID: z.number(),
  ClubName: z.string().nullable(),
  ClubAddress: z.string().nullable(),
  ContactEmailAddr: z.string().nullable(),
  ClubLogo: z.string().nullable(),
  MainWebsite: z.string().nullable(),
  LongLat: z.string().nullable(),
  Source: z.string().nullable(),
  ClubPostcode: z.string().nullable(),
  UrlFriendlyName: z.string().nullable(),
  ClubWikiLink: z.string().nullable(),
  PyramidId: z.string().nullable(),
  Nicknames: z.string().nullable(),
  Active: z.boolean().nullable(),
  ClubGuid: z.string().nullable(),
  MinorClub: z.boolean().nullable(),
  DisableAutoUpdate: z.boolean().default(false),
  StatusTypeId: z.number().nullable(),
});*/
export const clubFullDetailSchema = z.intersection(
  clubDetailSchema,
  z.object({
    ClubLogo: z.string().nullable(),
    ClubWikiLink: z.string().nullable(),
  }),
);

export type ClubFullDetail = z.infer<typeof clubFullDetailSchema>;
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
export async function getClubDetails(urlFriendlyName: string) {
  // const response = await fetch(
  //  `${API_URL}/api/v2/clubapi/clubfulldetail/${urlFriendlyName}`,
  //  {},
  //);
  const response = await safeParseApi<ClubFullDetail>(
    `${API_URL}/api/v2/clubapi/clubfulldetail/${urlFriendlyName}`,
    clubFullDetailSchema,
    {method: 'GET'},
  );
  //console.log(response);

  return {
    clubDetail: response.ok ? response.data : null,
    response: response,
  };
}
