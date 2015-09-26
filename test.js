'use strict';

import { assert } from 'chai';
import setImmediatePromise from './src';

describe('setImmediatePromise', function() {
  it('should return a immediately resolved promise', async function() {
    let results = [];

    await Promise.all([
      (async function() {
        await setImmediatePromise();
        results.push(1);
      })(),
      (async function() {
        results.push(2);
      })()
    ]);

    assert.deepEqual(results, [2, 1]);
  });
});
