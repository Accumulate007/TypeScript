### 《TypeScript开发实战》


#### 1. 类型基础
强类型语言：不允许改变变量的数据类型，除非进行强制类型转换。

静态类型语言：在编译阶段确定所有变量的类型(对类型极度严格，立即发现错误，运行时性能好)

动态类型语言：在执行阶段确定所有变量的类型(对类型宽松，运行时性能较差，可读性较差)

#### 2. 第一个typeScript程序
全局安装typeScript
```javascript
npm i typescript -g
```

进入项目目录，生成typeScript配置文件(tsconfig.json)
```javascript
tsc -init
```

项目目录下创建src文件夹，用于存放编写的TS文件，编译TS文件
```javascript
tsc ./src/index.ts
```

#### 3.TypeScript基础

**3.1基本类型**

类型注解： (变量/函数):类型

- 基本类型
- 枚举类型：一组具有名字的常量集合
- 接口
- 泛型

#### 4.TypeScript类型检查机制
类型检查机制：TypeScript编译器在做类型检查的时候，所秉承的一些原则，以及表现出的一些行为。

- 类型推断
- 类型兼容性
- 类型保护

##### 4.1 类型推断
1.默认类型推断

2.上下文类型推断

类型断言：
```javascript
interface Foo {
    bar:number
}

let foo = {} as Foo;
foo.bar = 5;
```


##### 4.2 类型兼容性
兼容性：当一个类型Y可以被赋值给另一个类型X的时候，我们就说类型X兼容类型Y。
```javascript
// X兼容Y
X(目标类型) = Y(源类型)
```

##### 4.3 类型保护
- instanceof
- in
- typeof


#### 5. 高级类型

- 交叉类型：将多个类型合并为一个类型，新的合并后的类型具有所有类型的特性。
- 联合类型：取所有类型的交集
- 索引类型
- 映射类型
- 条件类型


#### 6. ES6和CommonJS模块系统


#### 7. 命名空间


#### 8. 声明合并


#### 9. 编写声明文件
在使用非TS编写的类库的时候，比如在TS中使用jQuery，必须为这个类库编写一个声明文件。

安装一个类库的类型声明包
```javascript
npm install @types/jquery -D
```

#### 10.配置tsconfig.json


#### 11.工程引用


#### 12.编译工具

- 1、关闭ts-loader的类型检查，并使用插件开启独立的进程进行TS的类型检查
```javascript
// 关闭ts-loader的类型检查
{
    test: /\.tsx?$/,
    use: [
        loader: 'ts-loader',
        options: {
            transpileOnly: true
        }
    ]
}


// 使用插件进行类型检查
npm install fork-ts-checker-webpack-plugin -D
```










