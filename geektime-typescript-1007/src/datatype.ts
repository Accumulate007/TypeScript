// TS中的数据类型


// 原始类型
let bool:boolean = true;
let num:number = 123;
let str:string = 'abc';


// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [5,6,7];
let arr3: Array<number|boolean> = [9, false, 0];


// 元组
let tuple: [number, string] = [5, 'a'];

// 元组越界问题


// 函数
let add = (x: number, y: number) => x + y;


// 对象
let obj: {x:number, y:number} = {x:5, y:9};


// symbol
let s1:symbol = Symbol();
let s2 = Symbol();


// undefined, null
let un:undefined = undefined;
let nu:null = null;

// console.log(`this is ${un}`)


// void
let noReturn = () => {};


// any
let x:any


// never(永远不会有返回值的类型)
let error = () => {
    throw new Error('this is an error')
}



