本文源自网络文章《typeScript基础精粹》，摘录了其中一些自认为忽视或者模糊的知识点。

#### 元组类型

元组是一种特殊的数组，限定了数组元素的个数和类型。
```javascript
let tuple:[number,string] = [5, 'a']
```
需要注意元祖的越界问题，虽然可以越界添加元素，但是仍然是不能越界访问，会报错。

#### symbol类型
symbol类型可以直接声明为symbol类型，也可以直接赋值。
```javascript
let s1:symbol = Symbol()
```

#### 枚举类型

枚举类型分为数字枚举和字符串枚举，此外还有异构枚举(不推荐)。

- **数字枚举**

数字枚举既可以通过名字取值，也可以通过索引取值。
```javascript
enum Roles {
  Teacher,
  Guest,
  Reporter
}

// Roles.Guest = 5  枚举成员是只读的，不能在定义后重新修改赋值

// 取值
Roles[1]    // Teacher
Roles['Reporter']   // 3
```

- **字符串枚举**

字符串枚举只能通过名字取值，无法通过索引取值。字符串枚举成员后面的枚举成员必须赋一个初始值。
```javascript
enum Message {
  True = '成功',
  Fail = '失败'
}

// 取值
Message['True']
```

- **常量枚举**

用 const 声明的枚举就是常量枚举，会在编译阶段被移除。当我们不需要一个对象，但是需要一个对象的值的时候，就可以使用常量枚举，这样可以减少编译后的代码。
```javascript
const enum Month {
  Jan,
  Feb,
  Oct
}
```

- **异构枚举**

数字和字符串枚举混用。
```javascript
enum Answer {
  N,
  Y = 'yes'
}
```

枚举的一些注意事项

-1.枚举成员是只读的，不能修改重新赋值

-2.枚举成员的分为 const member 和 computer member。
  - 常量成员（const member），包括没有初始值的情况、对已有枚举成员的引用、常量表达式，会在编译的时候计算出结果，以常量的形式出现在运行时环境
  - 计算成员（computer member），需要被计算的枚举成员，不会在编译阶段进行计算，会被保留到程序的执行阶段

-3.在computed member后面出现的枚举成员，一定要赋一个初始值，否则报错

-4.含字符串成员的枚举中不允许使用计算值（computer member），并且在字符串枚举成员后面的枚举成员必须赋一个初始值，否则会报错（见上面的异构类型）

-5.数字枚举中，如果有两个成员有同样索引，那么后面索引会覆盖前面的
```javascript
// 枚举成员
enum Char {
  // const member 常量枚举，会在编译阶段计算结果，以常量的形式出现在运行时环境
  a,
  b = Char.a,
  c = 1 + 3,

  // computed member 需要被计算的枚举成员，不会在编译阶段进行计算，会被保留到执行阶段
  d = Math.random(),
  e = '123'.length,
  // 在 computed member 后面的枚举成员，一定要赋一个初始值，否则报错
  f = 1
}
console.log(Char)

// 枚举 number
enum number { a = 1, b = 5, c = 4, d }
console.log(number) //打印出{1: "a", 4: "c", 5: "d", a: 1, b: 5, c: 4, d: 5}
// b赋初始值为5，c赋初始值为4，按照索引递增，d的索引就是5，索引相同时，后面的值覆盖前面的，所以5对应的 value 就是d
```

#### 可索引类型
不确定一个接口中有多少属性时，可以使用可索引类型。分为数字索引签名和字符串索引签名，如果接口定义了某一种索引签名的值的类型，之后再定义的属性的值必须是签名值的类型的子类型。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
```javascript
interface Names {
    [x: string]: number | string;
    // y: boolean; // 会报错 boolean 不会赋值给字符串索引类型，因为字符串索引签名的类型是 number | string，所以之后再定义的属性必须是签名值类型的子类型
    [z: number]: number; // 字符串索引签名后也能定义数字索引签名，数字索引的返回值必须是字符串索引返回值类型的子类型
  }
```

#### 函数类型接口
```javascript
interface Add {
  (x:number, y:number): number
}

let add:Add = (a, b) => a + b
```

#### 混合接口
```javascript
interface Lib {
  version: string;
  ():void;
  doSomething():void;
}
// 需要用到类型断言
let lib: Lib = (() => {}) as Lib;
lib.version = '1.0'
lib.doSomething = () => {}
```

#### 接口继承
```javascript
interface Human {
  name: string;
  eat(): void;
}

interface Man extends Human {
  run(): void
}
```

#### 函数可选参数
可选参数必须位于必选参数之后，即可选参数后面不能再有必选参数。
```javascript
function add5(x:number, y?:number) {
  return y? y + x: x
}

add5(1)
```

#### 函数重载
要求定义一系列的函数声明，在类型最宽泛的版本中实现重载， TS 编译器的函数重载会去查询一个重载的列表，并且从最开始的一个进行匹配，如果匹配成功，就直接执行。所以我们要把大概率匹配的定义写在前面。
```javascript
function add(...rest: number[]):number
function add(...rest: string[]):string
function add(...rest: any[]):any {
  let first = rest[0]
  if(typeof first === 'string') {
    return rest.join('')
  }
  if(typeof first === 'number') {
    return rest.reduce((pre,cur) => pre + cur)
  }
}
add(1,2,3) // 6
add('1','2','3') // '123'
```

#### 类的修饰符
- public: 所有人可见（默认）
- private: 私有属性。私有属性只能在声明的类中访问，在子类或者生成的实例中都不能访问,但是 private 属性可以在实例的方法中被访问到，因为也相当于在类中访问，但是子类的的实例方法肯定是访问不到的。
- protected 受保护属性。受保护属性只能在声明的类及其子类中访问,但是 protected 属性可以在实例的方法中被访问到。
- readonly 只读属性。只读属性必须具有初始值，或者在构造函数中初始化,初始化后就不能更改了。
- static 静态属性。只能通过类的名称调用，不能在实例和构造函数或者子类中的构造函数和实例中访问，但是静态属性是可以继承的，用子类的类名可以访问。

#### 抽象类
只能被继承，不能被实例化的类。
```javascript
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void // 抽象方法，在子类中实现
}
```

#### 接口类
- 类实现接口时，必须实现接口的全部属性，不过类可以定义自己的属性
- 接口不能约束类的构造函数，只能约束公有成员
```javascript
interface Human {
  // new (name:string):void // 接口不能约束类的构造函数
  name: string;
  eat(): void;
}

class Asian implements Human {
  constructor (name: string) {
    this.name = name
  }
  name: string
  // private name: string  // 实现接口时用了私有属性会报错
  eat() {}
  sleep(){}
}
```

#### 接口继承类
相当于把类的成员抽象出来，只有类的成员结构，但是没有具体实现。
```javascript
class Auto {
  state = 1
}

interface AutoInterface extends Auto {

}
```

#### 泛型
```javascript
// 泛型函数
function log<T>(value: T): T {
  console.log(value)
  return value
}

// 泛型接口
interface Log<T> {
  (value: T): T;
}

let myLog:Log

// 泛型类
class Log3<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
```

#### 类型兼容
当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y。
```javascript
X兼容Y：X（目标类型） = Y（源类型）
```

- 接口兼容
```javascript
// 成员少的兼容成员多的
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }

x = y
// y = x    Error,不兼容
```

- 函数兼容
1.目标函数的参数个数一定要多于源函数的参数个数

2.固定参数是可以兼容可选参数和剩余参数的

3.可选参数是不兼容固定参数和剩余参数的,但是可以通过设置"strictFunctionTypes": false来消除报错，实现兼容

4.剩余参数可以兼容固定参数和可选参数

- 枚举类型兼容
1.枚举类型和数字类型是完全兼容的

2.枚举类型之间是完全不兼容的

- 类的兼容
1.和接口比较相似，只比较结构，需要注意，在比较两个类是否兼容时，静态成员和构造函数是不参与比较的，如果两个类具有相同的实例成员，那么他们的实例就相互兼容。

2.类中存在私有属性情况有两种，如果其中一个类有私有属性，另一个没有。没有的可以兼容有的，如果两个类都有，那两个类都不兼容。

- 泛型兼容
1.泛型接口为空时，泛型指定不同的类型，也是兼容的。

2.如果泛型接口中有一个接口成员时，类型不同就不兼容了。

3.两个泛型函数如果定义相同，没有指定类型参数的话也是相互兼容的












