'use strict';

module.exports = function (query) {
  return query
    .replace(/[\*\+\-=~><\"\?^\${}\(\)\:\!\/[\]\\\s]/g, '\\$&') // replace single character special characters
    .replace(/[><]/g, '') // < and > can’t be escaped at all.
    .replace(/\|\|/g, '\\||') // replace ||
    .replace(/\&\&/g, '\\&&') // replace &&
      .replace(/(^|\s)AND(\s|$|\\)/g, specSymbToLower) // replace AND
      .replace(/(^|\s)OR(\s|$|\\)/g, specSymbToLower) // replace OR
      .replace(/(^|\s)NOT(\s|$|\\)/g, specSymbToLower); // replace NOT

  function specSymbToLower(matched) {
      return matched.toLowerCase();
  }
};
