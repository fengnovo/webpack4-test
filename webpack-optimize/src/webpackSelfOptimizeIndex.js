import calc from './webpackSelfOptimize.js';
/** 用webpack的production模式会自动删除没用的代码
 *  叫做tree-shaking
 *  但，必须用import不用require
 */
console.log(calc.sum(2, 5));

/**
 * scope hosting  作用域提升优化
 * 打印出来直接是
 * console.log(6, '-----------');
 */
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c;
console.log(d, '-----------');

 

