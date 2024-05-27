import {filterByClubName} from './../filterByClubName';
import {expect, it} from 'vitest';
import {Clubs} from '../../../../api/club/getClubs';

const clubData: Clubs = [
  {
    //ClubLogoExists: true,
    //ClubLogo: 'WokingLogo.png',
    //ClubWikiLink: 'https://en.wikipedia.org/wiki/Woking_F.C.',
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
    //ClubLogoExists: true,
    //ClubLogo: 'KnaphillFCLogo.png',
    //ClubWikiLink: 'https://en.wikipedia.org/wiki/Knaphill_F.C.',
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

describe('Testing club filters ', () => {
  it('Fetch club details for a known club woking', async () => {
    const resultForKnownClub = clubData.filter(filterByClubName('woking'));
    expect(resultForKnownClub.length).toBe(1);
    expect(resultForKnownClub[0].ClubName).toBe('Woking');
  });
  it('Fetch club details for a unknown club unknown', async () => {
    const resultForKnownClub = clubData.filter(filterByClubName('unknown'));
    expect(resultForKnownClub.length).toBe(0);
  });
  it('Fetch club details for text in multiple clubs', async () => {
    const resultForKnownClub = clubData.filter(filterByClubName('k'));
    expect(resultForKnownClub.length).toBeGreaterThanOrEqual(2);
  });
});
