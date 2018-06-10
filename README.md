# british.js

A polyfill that lets you forget the crude American spelling of Javascript globals in lieu of
the proper British spellings 🇬🇧

**DISCLAIMER**: Before using please read the [disclaimer](#disclaimer) below 💂‍♀️

## Installation

Install with yarn or npm

```bash
npm install british.js --save
```

```bash
yarn add british.js
```

Import the parts of the library you wish to use.

```javascript
import 'british.js';
import 'british.js/extended';
```

## API

The following corrections are supported in the main library

### `Maths`

Example usage:

```javascript
Maths.round(3.1459); // => 3
Maths.floor(3.1459); // => 3
Maths.ceil(3.1459); // => 4
Maths.abs(-42); // => 42
Maths.min(100, 200, 300); // => 100
Maths.max(100, 200, 300); // => 300
```

### Colour

- `window.screen.colourDepth`
- `CanvasGradient.addColorStop()`

### Programme

- `WebGLProgramme`
- `WebGLRenderingContext.isProgramme()`
- `WebGLRenderingContext.useProgramme()`
- `WebGLRenderingContext.linkProgramme()`
- `WebGLRenderingContext.createProgramme()`
- `WebGLRenderingContext.deleteProgramme()`
- `WebGLRenderingContext.validateProgramme()`

### AudioScheduledSourceNode

The spelling of this has not changed but when pronouncing it you are encouraged to say "scheduled"
with an "SH" sound rather than a "SK" sound.

## Extended API

Additional British-isms are available by using the extended API

```javascript
import 'british.js/extended';
```

This gives you access to the following polyfills.

- `RegExp` -> `Butters`
- `Event.isTrusted` -> `Event.notDodgy`
- `Error` -> `Cockup`
- `SyntaxError` -> `SyntaxCockup`
- `TypeError` -> `TypeCockup`
- `RangeError` -> `RangeCockup`

## Disclaimer

This library is meant to be ironic and is not intended for actual use. Please please
don't use it. It is not production ready.

## Contributing

Do you want to join the patriotic cause of correcting the spelling errors in Javascript? Pull
requests are more than welcome.
All things that are strictly spelling corrections should be added to `src/proper.js`.
Anything that is a more drastic renaming should be added to `src/extended.js`.

Please document all new APIs in the README.md and remember to write tests!

## [Code of Conduct](http://todogroup.org/opencodeofconduct/)

british.js has adopted a Code of Conduct that we expect project participants
to adhere to. Please read the full text so that you can understand what
actions will and will not be tolerated.

## Credits

Cheekily created by Christian Schlensker who is not British nor associated with the
British government in any way. Cheers!
