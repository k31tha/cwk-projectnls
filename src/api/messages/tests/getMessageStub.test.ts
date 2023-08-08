import {it} from 'vitest';
import {getMessageStub} from '../getMessage';
describe('Testing message fetch with mock', () => {
  it('Fetch message from stub', async () => {
    await getMessageStub();
  });
});
