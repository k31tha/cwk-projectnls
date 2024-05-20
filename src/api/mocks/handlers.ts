import {http, HttpResponse} from 'msw';
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
export const handlers = [
  http.get(API_URL + '/message', ({request}) => {
    const url = new URL(request.url);
    const failCode = url.searchParams.get('fail');
    let response = {};
    if (failCode === null) {
      response = {
        id: 1,
        body: 'This is a body',
        title: 'Title',
        userId: 1,
      };
      //return res(ctx.status(200), ctx.json(response));
      return HttpResponse.json(response);
    } else {
      //return res(ctx.status(failCode), ctx.json(response));
      return new HttpResponse(JSON.stringify(response), {
        status: Number(failCode),
      });
    }
  }),
  http.get(API_URL + '/api/v2/ClubApi/ClubList', ({request}) => {
    const response = [
      {
        ClubLogoExists: true,
        ClubLogo: 'WokingLogo.png',
        ClubWikiLink: 'https://en.wikipedia.org/wiki/Woking_F.C.',
        ClubID: 2128,
        ClubName: 'Woking',
        ClubAddress: 'Kingfield Road, Woking, Surrey, GU22 9AA',
        ContactEmailAddr: null,
        MainWebsite: 'http://www.wokingfc.co.uk/',
        LongLat: null,
        Source: 'skrill',
        ClubPostcode: null,
        UrlFriendlyName: 'woking',
        PyramidId: '1112',
        Nicknames: 'The Cardinals/The Cards',
        Active: true,
        ClubGuid: '3cefd4b0-110c-4f98-9a41-6b288713f9d9',
        MinorClub: false,
        DisableAutoUpdate: false,
        StatusTypeId: 1,
      },
      {
        ClubLogoExists: true,
        ClubLogo: 'KnaphillFCLogo.png',
        ClubWikiLink: 'https://en.wikipedia.org/wiki/Knaphill_F.C.',
        ClubID: 2733,
        ClubName: 'Knaphill FC',
        ClubAddress:
          'Brookwood Country Park Football Ground, Redding Way, Knaphill, Woking, Surrey, GU21 2AY',
        ContactEmailAddr: null,
        MainWebsite: 'http://www.pitchero.com/clubs/knaphillfootballclub/',
        LongLat: null,
        Source: null,
        ClubPostcode: null,
        UrlFriendlyName: 'knaphill-fc',
        PyramidId: '1193',
        Nicknames: 'The Knappers',
        Active: true,
        ClubGuid: 'df0cbdf1-41a8-4fcb-a307-83e47afea8ff',
        MinorClub: true,
        DisableAutoUpdate: false,
        StatusTypeId: 1,
      },
    ];
    return HttpResponse.json(response);
  }),
  http.get(
    API_URL + '/api/v2/clubapi/clubfulldetail/:urlFriendlyName',
    ({params}) => {
      const {urlFriendlyName} = params;
      //console.dir(params);
      //console.dir(urlFriendlyName);

      if (urlFriendlyName === 'woking') {
        const responseData = {
          ClubSocialLinks: [
            {
              ClubSocialID: 2657,
              SocialMedia_SocialMediaID: 2,
              SocialURL: 'twitter.com/wokingfc',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2128,
              ClubGuid: null,
              SocialName: 'twitter',
            },
            {
              ClubSocialID: 2659,
              SocialMedia_SocialMediaID: 3,
              SocialURL: 'facebook.com/wokingfc',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2128,
              ClubGuid: null,
              SocialName: 'facebook',
            },
            {
              ClubSocialID: 2660,
              SocialMedia_SocialMediaID: 6,
              SocialURL: 'instagram.com/wokingfc',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2128,
              ClubGuid: null,
              SocialName: 'instagram',
            },
            {
              ClubSocialID: 2676,
              SocialMedia_SocialMediaID: 11,
              SocialURL: 'http://www.cardstrust.co.uk/',
              OwnerType: 'S',
              Active: true,
              Club_ClubID: 2128,
              ClubGuid: null,
              SocialName: 'website',
            },
            {
              ClubSocialID: 3036,
              SocialMedia_SocialMediaID: 10,
              SocialURL: 'https://en.wikipedia.org/wiki/Woking_F.C.',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2128,
              ClubGuid: null,
              SocialName: 'wikipedia',
            },
          ],
          ClubAssets: [
            {
              ClubAssetID: 16,
              AssetName: 'ClubBadge',
              AssetType: '0',
              AssetData: 'WokingLogo.png',
              Club_ClubID: 2128,
              ClubAssetGuid: '379f9764-6b71-4e48-abf2-8cbfb7aac7ee',
              Active: true,
              ClubGuid: '00000000-0000-0000-0000-000000000000',
              AssetContent: null,
            },
          ],
          ClubLogoExists: true,
          ClubLogo: 'WokingLogo.png',
          ClubWikiLink: 'https://en.wikipedia.org/wiki/Woking_F.C.',
          ClubID: 2128,
          ClubName: 'Woking',
          ClubAddress: 'Kingfield Road, Woking, Surrey, GU22 9AA',
          ContactEmailAddr: null,
          MainWebsite: 'http://www.wokingfc.co.uk/',
          LongLat: null,
          Source: 'skrill',
          ClubPostcode: null,
          UrlFriendlyName: 'woking',
          PyramidId: '1112',
          Nicknames: 'The Cardinals/The Cards',
          Active: true,
          ClubGuid: '3cefd4b0-110c-4f98-9a41-6b288713f9d9',
          MinorClub: false,
          DisableAutoUpdate: false,
          StatusTypeId: 1,
        };
        return HttpResponse.json(responseData);
      } else if (urlFriendlyName === 'knaphill-fc') {
        const responseData = {
          ClubSocialLinks: [
            {
              ClubSocialID: 2741,
              SocialMedia_SocialMediaID: 2,
              SocialURL: 'https://twitter.com/knaphillfc',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2733,
              ClubGuid: null,
              SocialName: 'twitter',
            },
            {
              ClubSocialID: 2742,
              SocialMedia_SocialMediaID: 3,
              SocialURL:
                'https://facebook.com/pages/Knaphill-FC/191217394291007',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2733,
              ClubGuid: null,
              SocialName: 'facebook',
            },
            {
              ClubSocialID: 2803,
              SocialMedia_SocialMediaID: 10,
              SocialURL: 'https://en.wikipedia.org/wiki/Knaphill_F.C.',
              OwnerType: 'O',
              Active: true,
              Club_ClubID: 2733,
              ClubGuid: null,
              SocialName: 'wikipedia',
            },
          ],
          ClubAssets: [
            {
              ClubAssetID: 377,
              AssetName: 'ClubBadge',
              AssetType: '0',
              AssetData: 'KnaphillFCLogo.png',
              Club_ClubID: 2733,
              ClubAssetGuid: '579bfdc3-0f86-40bc-a91b-6268a93180e5',
              Active: true,
              ClubGuid: '00000000-0000-0000-0000-000000000000',
              AssetContent: null,
            },
          ],
          ClubLogoExists: true,
          ClubLogo: 'KnaphillFCLogo.png',
          ClubWikiLink: 'https://en.wikipedia.org/wiki/Knaphill_F.C.',
          ClubID: 2733,
          ClubName: 'Knaphill FC',
          ClubAddress:
            'Brookwood Country Park Football Ground, Redding Way, Knaphill, Woking, Surrey, GU21 2AY',
          ContactEmailAddr: null,
          MainWebsite: 'http://www.pitchero.com/clubs/knaphillfootballclub/',
          LongLat: null,
          Source: null,
          ClubPostcode: null,
          UrlFriendlyName: 'knaphill-fc',
          PyramidId: '1193',
          Nicknames: 'The Knappers',
          Active: true,
          ClubGuid: 'df0cbdf1-41a8-4fcb-a307-83e47afea8ff',
          MinorClub: true,
          DisableAutoUpdate: false,
          StatusTypeId: 1,
        };
        return HttpResponse.json(responseData);
      } else {
        return new HttpResponse(null, {
          status: 404,
        });
      }
    },
  ),
];
