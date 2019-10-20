// ES6模块

export let a = 1;

let b = 2;
let c = 3;
export {
    b,
    c
}


// 导出接口
export interface P {
    x:number,
    y:string
}

// 导出函数
export function fn() {}


// 导出别名
function G() {};

export {g as G};



// 默认导出
export default function () {
    console.log('default func')
}


/**
 * 导入
 */

// import {a, b, c} from './a.js'  // 批量导入
// import { P } from './a.js'
// import { f as F } from './a/js'  // 导入时起别名
// import * as All from './a.js'    // 导入模块中的所有成员，绑定在All变量上
// import defaultFunc from './a.js'     // 不加 {},导入默认


