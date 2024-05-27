import {clubDetailSchema} from './getClubs';
import {z} from 'zod';

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
const clubFullDetailSchema = z.intersection(
  clubDetailSchema,
  z.object({
    ClubLogo: z.string().nullable(),
    ClubWikiLink: z.string().nullable(),
  }),
);

export type ClubFullDetail = z.infer<typeof clubFullDetailSchema>;
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
export async function getClubDetails(urlFriendlyName: string) {
  const response = await fetch(
    `${API_URL}/api/v2/clubapi/clubfulldetail/${urlFriendlyName}`,
    {},
  );

  if (response.status !== 200) {
    return {
      clubDetail: null,
      response: response,
    };
  } else {
    const json = await response.json();
    //console.dir(json);
    const clubDetailResult = clubFullDetailSchema.safeParse(json);
    //console.dir(clubDetailResult);
    return {
      clubDetail: clubDetailResult,
      response: response,
    };
  }
}
