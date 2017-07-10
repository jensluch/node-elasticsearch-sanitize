'use strict';

let sanitize = require('../'),
  assert = require('assert');

describe('Sanitize Query', () => {
  it('escapes all special characters', () => {
    let result = sanitize('+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \\ / AND OR NOT');
    assert.equal(result, '\\+\\ \\-\\ \\=\\ \\&&\\ \\||\\ \\\\ \\\\ \\!\\ \\(\\ \\)\\ \\{\\ \\}\\ \\[\\ \\]\\ \\^\\ \\"\\ \\~\\ \\*\\ \\?\\ \\:\\ \\\\\\ \\/\\ and\\ or\\ not');
  });

  it('escapes all characters in context', () => {
    let result = sanitize('AND there! are? (lots of) char*cters 2 ^escape!');
    assert.equal(result, 'and\\ there\\!\\ are\\?\\ \\(lots\\ of\\)\\ char\\*cters\\ 2\\ \\^escape\\!');
  });

  it('escapes repeated special characters', () => {
    let result = sanitize('&& || && || > < ! > < ! AND OR NOT NOT OR AND');
    assert.equal(result, '\\&&\\ \\||\\ \\&&\\ \\||\\ \\\\ \\\\ \\!\\ \\\\ \\\\ \\!\\ and\\ or\\ not\\ not\\ or\\ and');
  });

  it('handles special chars inside words', () => {
      let contributor = sanitize('CONTRIBUTOR');
      assert.equal(contributor, 'CONTRIBUTOR');

      let organize = sanitize('ORGANIZE');
      assert.equal(organize, 'ORGANIZE');

      let notify = sanitize(' NOTIFY');
      assert.equal(notify, '\\ NOTIFY');
  });
});
