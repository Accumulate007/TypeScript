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






















