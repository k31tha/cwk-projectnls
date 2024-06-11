import {expect, it} from 'vitest';
import {getClubs} from '../getClubs';

describe('Testing club details fetch with mock', () => {
  it('Fetch club details for a known club woking', async () => {
    const result = await getClubs();
    expect(result.response.ok).toBe(true);
    const data = result.response.data;
    if (result.response.ok && data) {
      // This is a type guard needed for TypeScript
      const clubs = data;
      expect(clubs.length).toBeGreaterThan(1);
    }
  });
});
