//  TS中的函数

/**
 * 定义函数方式
 * 
 *  */

// 1
function add1(x:number, y:number) {
    return x + y;
}

// 2
let add2: (x:number, y:number) => number;

// 3
type add3 = (x:number, y:number) => number;

// 4
interface add4 {
    (x:number, y:number): number
}


// TS中函数的形参和实参必须一一对应


// 可选参数(可选参数必须位于必选参数之后)
function add5(x:number, y?:number) {
    if(y) {
        return x + y;
    } else {
        return x;
    }
}


// 参数默认值
function add6(x:number, y = 0, z:number, m = 5) {
    return x + y + z + m;
}

// 传入 undefined 获取参数默认值
add6(5, undefined, 8, 3);


// 函数剩余参数
function add7(x:number, ...rest:number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

console.log(add7(6,7,8,9));


/**
 * 函数重载
 * 
 * 函数的名称相同，但是参数个数和类型不同
 * 好处：不需要为功能相似的函数起不同的名字
 */

function fn1(...rest:number[]):number;
function fn1(...rest:string[]):string;
function fn1(...rest:any[]):any {
    let first = rest[0];

    if(typeof first === 'string') {
        return rest.join(',');
    } else if(typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}


