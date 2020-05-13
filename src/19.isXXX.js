/* 

MDN 对于 JS 数据类型的 看法

Number
String
Boolean
Symbol (new in ES2015)
Object
Function
Array
Date
RegExp
null
undefined

也许还有 BigInt 【stage 4】 ,ie 和 safari 完全不支持

*/

const _toString = Object.prototype.toString;

/* 1. 判断是否为正常对象，而不是 null */
exports.isObjectButNotNull = (obj) =>
  obj !== null && _toString.call(obj) === '[object Object]';
