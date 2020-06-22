
/**
 * 类的装饰器
 * 
 * 装饰器本身是一个函数
 * 装饰器函数通过 @ 符号来使用
 * 装饰器函数在类创建的时候立即执行
 * 
 */

 // 类的装饰器的参数是类的构造函数
function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log(`this is getName`)
  }
  console.log('decorator');
}

function demoDecorator(constructor: any) {
  constructor.prototype.sayAge = () => {
    console.log(`this is sayAge`)
  }
  console.log('demo decorator');
}


@testDecorator
class Test {}


const t1 = new Test();
(t1 as any).getName();

// 装饰器的执行从下到上
@testDecorator
@demoDecorator
class Demo {}


function toggle(flag:boolean) {
  if(flag) {
    return function (constructor: any) {
      console.log('true')
    }
  } else {
    return function (constructor: any) {

    }
  }
}

@toggle(true)
class HangZhou {}


/**
 * 方法装饰器
 * 
 */

function getNameDecorator(target:any, key:string){
  // 普通方法 target 对应的是 构造函数的prototype
  // 静态方法(static) target对应的是 类的构造函数
  console.log(`${target}, ${key}`);
}


class Country {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  @getNameDecorator
  getName() {
    return this.name;
  }
}








