import {describe, it, expect} from 'vitest';

describe('basic tests', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });
   it('true to be true', () => {
    expect(false).toBe(false);
  });
  it('toUpperCase', () => {
    const result = 'foobar'.toUpperCase();
    expect(result).toMatchSnapshot();
  });
  it('toLowerCase - inline', () => {
    const result = 'foobar'.toLowerCase();
    expect(result).toMatchInlineSnapshot('"foobar"');
  });
});
