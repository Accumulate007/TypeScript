// 基础类型: null,undefined,symbol,void,boolean
const count:number = 0;

const myName:string = 'str';


// 对象类型
const teacher: {
  name: string,
  age: number
} = {
  name: 'jack',
  age: 9
}

const mans:string[] = ['p1', 'p2']

const getTotal:() => number = () => {
  return 8
}


/**
 * 类型注解(type annotation)
 * 
 * 书写者告诉TS变量是什么类型
 */

let userName: string;


// 类型推断(type inference): TS尝试分析变量的类型
let tsName = 'i am ts';


/**
 * 函数
 * 
 */

function add(a: number, b: number): number {
  return a + b;
}

const t1 = add(5, 9)

function sayHello(): void {
  console.log('void func')
}

// never: 函数永远不会执行完毕
function errorEmitter(): never {
  throw new Error();
  console.log(123)
}

// 参数结构的类型注解
function jump({height, width}: {height:number, width:number}): number {
  return height * width;
}

const funcK: (a: string, b: string) => string = (a, b) => {
  return a + b;
}




