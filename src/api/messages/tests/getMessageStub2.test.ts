import {expect, it} from 'vitest';
import {getMessageStub2} from '../getMessage';
describe('Testing message fetch with mock', () => {
  it('Fetch message from stub', async () => {
    const result = await getMessageStub2();
    expect(result.response.status).toBe(200);
    const data = result.json;
    expect(data.id).toBe(1);
  });
});
