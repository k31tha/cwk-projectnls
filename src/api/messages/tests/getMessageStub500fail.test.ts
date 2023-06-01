import {expect, it} from 'vitest';
import {getMessageStub500Err} from '../getMessage';
describe('Testing message fetch with mock', () => {
  it('Fetch message from stub', async () => {
    const result = await getMessageStub500Err();
    expect(result.response.status).toBe(500);
    //const data = result.json;
    //expect(data.id).toBe(1);
  });
});
