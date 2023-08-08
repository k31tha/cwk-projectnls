import {expect, it} from 'vitest';
import {
  getMessageStubwithZodSafeParse,
  getMessageStubwithZodParse,
} from '../getMessage';
describe('Testing message fetch with mock', () => {
  it('Fetch message from stub validate using safe Parse', async () => {
    const result = await getMessageStubwithZodSafeParse(
      'http://cwknls.localhost/message',
    );
    expect(result.response.status).toBe(200);
    if (result.message.success) {
      const data = result.message.data;
      expect(data.id).toBe(1);
      expect(data.title).toBe('Title');
    }
  });

  it('Fetch message from stub validate using  Parse', async () => {
    const result = await getMessageStubwithZodParse(
      'http://cwknls.localhost/message',
    );
    expect(result.response.status).toBe(200);
    if (result.message) {
      const data = result.message;
      expect(data.id).toBe(1);
      expect(data.title).toBe('Title');
    }
  });
});
