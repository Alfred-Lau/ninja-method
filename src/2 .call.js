/* 
类数组对象转数组的三种方式：

//第一种方法
Array.prototype.slice.call(arrayLike, start);
//第二种方法
[...arrayLike];
//第三种方法:
Array.from(arrayLike);


*/

Function.prototype.call2 = function (content = window) {
  content.fn = this;
  /* 参数列表转数组 */
  let args = [...arguments].slice(1);
  /* 关键代码：主要就是为了切换调用者的上下文 */
  let result = content.fn(...args);
  delete content.fn;
  return result;
};
