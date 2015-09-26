'use strict';

export function setImmediatePromise() {
  return new Promise(function(resolve) {
    setImmediate(resolve);
  });
}

export default setImmediatePromise;
