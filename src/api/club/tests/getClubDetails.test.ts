import {expect, it} from 'vitest';
import {getClubDetails} from '../getClubDetails';
describe('Testing club details fetch with mock', () => {
  it('Fetch club details for a known club woking', async () => {
    const result = await getClubDetails('woking');
    expect(result.response.ok).toBe(true);
    const data = result;
    if (data?.clubDetail) {
      // This is a type guard needed for TypeScript
      const clubDetail = data.clubDetail;
      expect(clubDetail.ClubID).toBe(2128);
      expect(clubDetail.ClubName).toBe('Woking');
    }
  });

  it('Fetch club details for a known club knaphill-fc', async () => {
    const result = await getClubDetails('knaphill-fc');
    expect(result.response.status).toBe(200);
    const data = result;
    if (data?.clubDetail) {
      // This is a type guard needed for TypeScript
      const clubDetail = data.clubDetail;
      expect(clubDetail.ClubID).toBe(2733);
      expect(clubDetail.ClubName).toBe('Knaphill FC');
    }
  });

  it('Fetch club details for an unknown club', async () => {
    const result = await getClubDetails('unknown-fc');
    expect(result.response.status).toBe(404);
  });

  it('Fetch club details for a partial club url', async () => {
    const result = await getClubDetails('wok');
    expect(result.response.status).toBe(404);
  });
});
