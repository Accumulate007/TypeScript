// TS中的泛型

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。


function log<T>(value:T):T {
    return value;
}

log<string[]>(['a', 'b']);

log(['kk', 'vv']);


// 泛型函数类型
type Log = <T>(value:T) => T;

let myLog:Log = log;


interface Dog {
    <T>(value:T): T;
}



/**
 * 泛型类
 * 
 * 泛型不能约束类的静态成员
 */

class Hzperson<T> {
    run(value:T) {
        return value;
    }
}



















