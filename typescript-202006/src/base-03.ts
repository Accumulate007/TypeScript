/**
 * 类
 * 
 */

class Person {
  name: string = 'jack';

  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Miss Li';
  }

  getName() {
    return super.getName() + 'teacher'
  }
}


// 访问类型: private, protected, public

// public: 允许在类的内部和外部调用
// private: 允许在类内部使用
// protected: 允许在类的内部，以及继承的子类中使用

class House {
  public color: string;
  private name: string;
  protected age: number;

  sayName() {
    console.log(`name can only be used in class ${this.name}`)
  }

  getColor() {
    console.log(`color can be used any where`)
  }
}

class Myhouse extends House {
  public sayAge() {
    this.age; // can get super is age
  }
}


// constructor
class Food {
  public name: string;

  // 类被实例化的时候自动执行constructor
  constructor(name) {
    this.name = name
  }
  
}

class Tsfood {
  // TS中的简化写法
  constructor(public name:string) {

  }
}


class Fatherclass{
  constructor(public age: number) {

  }
}

class Children extends Fatherclass{
  constructor(name: string) {
    super(12);  // 子类必须调用父类构造函数，并传参
  }
}




