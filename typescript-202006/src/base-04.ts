

class Person {
  constructor(private _name:string) {

  }

  // 访问器属性
  get getName() {
    return this._name + ' is a boy~';
  }

  // Setter
  set setName(name: string) {
    this._name = name;
  }
}


const p1 = new Person('jack')

p1['getName'] // jack is a boy~

p1.setName = 'Lucy'
p1['getName'] // Lucy is a boy~



/**
 * 单例模式
 * 
 * 一个类只允许存在一个实例
 */

class Single {
  private static instance: Single;

  private constructor(public name:string) {

  }

  static getInstance() {
    if(!this.instance) {
      this.instance = new Single('Messi');
    }
    return this.instance;
  }
}

const s1 = Single.getInstance();


/**
 * 抽象类
 * 
 * 只能被继承，不能被实例化
 */

abstract class Food {
  color: string;
  money: number;

  getName() {
    // TO DO in child class
  }

  // 必须在子类中实现抽象方法
  abstract getAge(): number;
}


class Rice extends Food {
  // 必须实现父类里的抽象方法
  getAge() {
    return 99;
  }
}


interface Person {
  name: string
}

interface Teacher extends Person{
  school: string,
}



