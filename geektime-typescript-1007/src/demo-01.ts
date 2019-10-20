// TS类型兼容

// 接口类型兼容
interface X {
    a: any;
    b: any
}

interface Y {
    a: any;
    b: any;
    c: any
}

let x1: X = {a: 1, b: 2};
let y1: Y = {a: 1, b: 2, c: 3};

x1 = y1;    // okay 成员少的兼容成员多的
// y1 = x1;    // error



/**
 * 函数兼容
 * 
 * 1.参数个数。参数多的，兼容参数少的
 * 
 * 2.参数类型要匹配
 *  */

type Handler = (a:number, b:number) => void;

function hof(handler: Handler) {
    return handler;
}



// 枚举类型与数字类型完全兼容
// 枚举类型之间完全不兼容


/**
 * 类的兼容性
 * 
 * 类的静态成员和构造函数不参与比较
 */





 /**
  * 泛型的兼容性
  * 
  */

















