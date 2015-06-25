node-elasticsearch-sanitize
===========================

[![Circle CI](https://circleci.com/gh/lanetix/node-elasticsearch-sanitize.svg?style=svg)](https://circleci.com/gh/lanetix/node-elasticsearch-sanitize)

Accepts an arbitrary string as input and escapes the ElasticSearch reserved characters:
```
+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \ / AND OR NOT
```
Returns a sanitized string which can be safely used in an ElasticSearch query_string query.

Installation
------------

```bash
npm install --save elasticsearch-sanitize
```

Usage
-----

To use pass in a string:  
```
var myString = "AND there! are? (lots of) char*cters 2 ^escape!"
console.log(escapeElastic(myString))
```
And it will return:  
```
\A\N\D there\! are\? \(lots of\) char\*cters 2 \^escape\!
```
