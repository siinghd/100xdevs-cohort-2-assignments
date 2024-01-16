const calculateTime = require('../medium/times');

describe('calculateTime', () => {
  test('returns true test for 100, 100000, 1000000000', () => {
    expect(calculateTime(100)).toBe(true);
    expect(calculateTime(100000)).toBe(true);
    expect(calculateTime(1000000000)).toBe(true);
  });
});
