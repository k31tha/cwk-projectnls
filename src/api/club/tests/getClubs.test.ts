import {expect, it} from 'vitest';
import {getClubs} from '../getClubs';

describe('Testing club details fetch with mock', () => {
  it('Fetch club details for a known club woking', async () => {
    const result = await getClubs();
    expect(result.response.status).toBe(200);
    const data = result;
    expect(data.clubs?.success).toBe(true);
    if (data?.clubs?.success) {
      // This is a type guard needed for TypeScript
      const clubs = data.clubs.data;
      expect(clubs.length).toBeGreaterThan(1);
    }
  });
});
