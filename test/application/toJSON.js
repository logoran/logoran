
'use strict';

const assert = require('assert');
const Logoran = require('../..');

describe('app.toJSON()', () => {
  it('should work', () => {
    const app = new Logoran();
    const obj = app.toJSON();

    assert.deepEqual({
      subdomainOffset: 2,
      proxy: false,
      env: 'test'
    }, obj);
  });
});
