import '../extended.js';

describe('Extended Aliases', () => {
  const cases = [
    ['RegExp', 'Butters'],
    ['Error', 'Cockup'],
    ['SyntaxError', 'SyntaxCockup'],
    ['TypeError', 'TypeCockup'],
    ['RangeError', 'RangeCockup'],
  ];

  test.each(cases)('it should alias %s to %s', (original, alias) => {
    expect(global[alias]).not.toBeUndefined();
  });

  test('it should alias Event.isTrusted to Event.notDodgy', () => {
    const event = new Event('Yo');

    expect(event.notDodgy).toEqual(false);
  });
});
