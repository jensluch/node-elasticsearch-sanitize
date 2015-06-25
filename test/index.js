'use strict';

var sanitize = require('../'),
  assert = require('assert');

describe('Sanitize Query', function () {
  it('escapes all special characters', function () {
    var result = sanitize('+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \\ / AND OR NOT');
    assert.equal(result, '\\+ \\- \\= \\&& \\|| \\> \\< \\! \\( \\) \\{ \\} \\[ \\] \\^ \\" \\~ \\* \\? \\: \\\\ \\/ \\A\\N\\D \\O\\R \\N\\O\\T');
  });
});
