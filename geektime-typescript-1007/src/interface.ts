

interface List {
    id:number;
    name: string;
    //age?: number;   // 可选属性
    //readonly height: number;    // 只读属性
}

// 添加了字符串索引签名的 接口
interface Person {
    id:number;
    name: string;
    [x: string]: any;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(function(item) {
        console.log(item.id, item.name);
    })
}


let result = {
    data: [
        {id:1, name: 'a1'},
        {id:2, name: 'a2'}
    ]
}

render(result);


// 类型断言： 明确告诉编译器传入的参数就是 Result 类型，编译器会绕过类型检查

// 类型断言书写方式一
render({
    data: [{id: 33, name: "jack"}]
} as Result);


// 类型断言书写方式二
render(<Result>{
    data: [{id: 55, name: "messi"}]
})



// 可索引接口

// 数字索引接口，表示用任意的数字去索引接口 StringArray，都会得到一个 string
interface StringArray {
    [index:number]: string
}

let char:StringArray = ['A', 'B'];


// 字符串索引接口：用字符串去索引 Names 接口，会得到一个 string
interface Names {
    [x:string]: string;
   // y: number   // 该接口中不允许再声明 Number 类型的成员，因为已经声明了字符串索引
}

// 索引的混用
interface StringAndNumber {
    [x:string]: string;
    [y:number]: string; // y数字索引签名的返回值，必须是 x 返回值的子类型，否则报错
    //[y:number]: number;    // 不允许，会报错
}



/*** 
 * 函数接口
 * 
*/

// 函数接口
interface Add {
    (x:number, y:number): number
}

// 类型别名方式
type Add2 = (x: number, y: number) => number;


// 函数实现
let addFn:Add2 = (a, b) => a + b;


// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

let lib:Lib = (() => {}) as Lib;

lib.version = '1.0';
lib.doSomething = () => {};




