/* 


深拷贝: JSON.parse()和JSON.stringify() 问题: 对象里的函数无法被拷贝,原型链里的属性无法被拷贝
最简单的深拷贝:

b = JSON.parse( JSON.stringify(a) )
有一下问题:

1.循环引用会报错

const x = {};
const y = {x};
x.y = y;

console.log(JSON.parse(JSON.stringify(x)));
// TypeError: Converting circular structure to JSON
2.某些属性无法拷贝
2.1 如果被拷贝的对象中有function，Symbol 和 undefined, 则拷贝之后的对象就会丢失
2.2 如果被拷贝的对象中有正则表达式, Set，则拷贝之后的对象正则表达式会变成空对象
2.3. 然而date对象成了字符串

const obj = {
    a: '1',
    arr: [1, 2 ,3],
    obj1: {
        o: 1,
    },
    b: undefined,
    c:  Symbol(),
    date: new Date(),
    reg: /a/ig,
    set: new Set([1, 2, 3]),
    foo: () => {
        console.log('foo');
    }
}
console.log(JSON.parse(JSON.stringify(obj)));
// { a: '1',
//   arr: [ 1, 2, 3 ],
//   obj1: { o: 1 },
//   date: '2019-04-18T08:11:32.866Z',
//   reg: {},
//   set: {} 
// }


为什么有些属性无法被拷贝呢, 主要是JSON.stringify()的问题, 那么问题就变成了为什么有些属性无法被stringify呢?
因为 JSON 是一个通用的文本格式，和语言无关。设想如果将函数定义也 stringify 的话，如何判断是哪种语言，并且通过合适的方式将其呈现出来将会变得特别复杂。特别是和语言相关的一些特性，比如 JavaScript 中的 Symbol。


*/

exports.cheatDeepClone = (obj) => JSON.parse(JSON.stringify(obj));

exports.deepClone = (obj) => {};
