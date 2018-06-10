import globalAlias from './util/globalAlias';

const OriginalEvent = Event;

globalAlias(RegExp, 'Butters');
globalAlias(Error, 'Cockup');
globalAlias(SyntaxError, 'SyntaxCockup');
globalAlias(TypeError, 'TypeCockup');
globalAlias(RangeError, 'RangeCockup');
globalAlias(BritishEvent, 'Event');

function BritishEvent(typeArg, eventInit) {
  const event = new OriginalEvent(typeArg, eventInit);
  event.notDodgy = event.isTrusted;
  return event;
}
