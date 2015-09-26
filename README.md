# set-immediate-promise [![Build Status](https://travis-ci.org/mvila/set-immediate-promise.svg?branch=master)](https://travis-ci.org/mvila/set-immediate-promise)

Return a promise immediately resolved by setImmediate().

## Installation

```
npm install --save set-immediate-promise
```

## Usage

To avoid blocking the JavaScript event loop, it is sometimes useful to add a little "breath" inside long-running computations.

```javascript
import setImmediatePromise from 'set-immediate-promise';

async function compute() {
  for (let i = 0; i < 1000; i++) {
    // heavy computation here...
    await setImmediatePromise(); // ... get a little breath!
  }
}
```

## License

MIT
