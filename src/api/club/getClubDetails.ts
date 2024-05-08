import {z} from 'zod';

const clubDetailSchema = z.object({
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
  PyramidId: z.string().nullable(),
  Nicknames: z.string().nullable(),
  Active: z.boolean().nullable(),
  ClubGuid: z.string().nullable(),
  MinorClub: z.boolean().nullable(),
  DisableAutoUpdate: z.boolean(),
  StatusTypeId: z.number().nullable(),
});

export type ClubDetail = z.infer<typeof clubDetailSchema>;
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
    const clubDetailResult = clubDetailSchema.safeParse(json);
    return {
      clubDetail: clubDetailResult,
      response: response,
    };
  }
}
