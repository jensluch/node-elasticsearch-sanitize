node-elasticsearch-sanitize
===========================

Accepts an arbitrary string as input and escapes the ElasticSearch reserved characters (`+ - = && || > < ! ( ) { } [ ] ^ " ~ * ? : \ / AND OR NOT`), returning a sanitized string which can be safely used in an ElasticSearch query_string query.

Installation
------------

```bash
npm install --save node-elasticsearch-sanitize
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
