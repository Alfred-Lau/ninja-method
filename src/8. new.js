/* 
让实例可以访问到私有属性
让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性
如果构造函数返回的结果不是引用数据类型


*/

const fake_new = (target) => {};

module.exports = fake_new;
