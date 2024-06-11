import {z} from 'zod';
import {safeParseApi} from '../generic/callApi';

export const clubDetailSchema = z.object({
  ClubID: z.number(),
  ClubName: z.string().nullable(),
  ClubAddress: z.string().nullable(),
  ContactEmailAddr: z.string().nullable(),
  //ClubLogo: z.string().nullable(),
  MainWebsite: z.string().nullable(),
  LongLat: z.string().nullable(),
  Source: z.string().nullable(),
  ClubPostcode: z.string().nullable(),
  UrlFriendlyName: z.string().nullable(),
  //ClubWikiLink: z.string().nullable(),
  PyramidId: z.string().nullable(),
  Nicknames: z.string().nullable(),
  Active: z.boolean().nullable(),
  ClubGuid: z.string().nullable(),
  MinorClub: z.boolean().nullable(),
  DisableAutoUpdate: z.boolean().nullable(),
  StatusTypeId: z.number().nullable(),
});

export const clubsSchema = z.array(clubDetailSchema);
export type ClubDetail = z.infer<typeof clubDetailSchema>;
export type Clubs = z.infer<typeof clubsSchema>;
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
export async function getClubs() {
  const response = await safeParseApi<Clubs>(
    `${API_URL}/api/v2/ClubApi/ClubList`,
    clubsSchema,
    {method: 'GET'},
  );
  //console.log(response);

  return {
    clubs: response.ok ? (response.data as Clubs) : null,
    response: response,
  };
}
