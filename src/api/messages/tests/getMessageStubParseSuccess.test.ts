import {expect, it} from 'vitest';
import {
  getMessageStubwithZodSafeParse,
  getMessageStubwithZodParse,
} from '../getMessage';
const API_URL = import.meta.env.VITE_BASE_NLS_API_URL;
describe('Testing message fetch with mock', () => {
  it('Fetch message from stub validate using safe Parse', async () => {
    const result = await getMessageStubwithZodSafeParse(API_URL + '/message');
    expect(result.response.status).toBe(200);
    if (result.message.success) {
      const data = result.message.data;
      expect(data.id).toBe(1);
      expect(data.title).toBe('Title');
    }
  });

  it('Fetch message from stub validate using  Parse', async () => {
    const result = await getMessageStubwithZodParse(API_URL + '/message');
    expect(result.response.status).toBe(200);
    if (result.message) {
      const data = result.message;
      expect(data.id).toBe(1);
      expect(data.title).toBe('Title');
    }
  });
});
