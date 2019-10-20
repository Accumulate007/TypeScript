// TS中的类


class Dog {
    name: string;
    age?:number;
    constructor(name:string) {
        this.name = name;
    }

    run() {
        console.log(this.name);
    }
}


// 类的继承
class Husky extends Dog {
    color:string;
    constructor(name:string, color:string) {
        super(name);
        this.color = color;
    }
}


/**
 * 类的成员修饰符
 * 
 *  */

class Person {
    public name:string;
    private age?:number;    // 只能在该类中访问(字类和实例无法访问)
    readonly legs:number = 4;   // 只读属性必须被初始化

    static food:string = 'apple';   // 类的静态成员，只能通过类名访问 Person.food

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    // 受保护成员：只能在类，或者子类中访问，实例无法访问
    protected pro() {
        console.log(`This func can not be call out of class`)
    }

    // 如果要设置类不能被继承
    // private constructor() {}

    // 设置类不能被实例化，只能被继承
    // protected constructor() {}
}

let p1 = new Person('jack', 50);


/**
 * 抽象类：只能被继承，不能被实例化
 * 
 */

abstract class Animal {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    eat() {
        console.log('I can eat food~~~');
    }

    // 抽象方法：在父类中定义，在字类中具体实现(多态)
    abstract sleep(): void;
}

// let a1 = new Animal('cat'); // Cannot create an instance of an abstract class

class Cat extends Animal {
    name:string;
    constructor(name:string) {
        super(name);
        this.name = name;
    }

    run() {
        console.log('I can runing');
    }

    sleep() {
        console.log('cat need sleep');
    }
}

let cat1 = new Cat('kitty');

cat1.eat();



/**
 * 接口和类的关系
 * 
 */

interface Human {
    name: string;
    eat(): void;
}

// 实现接口的类，必须实现接口中的所有属性和方法
// 接口只能约束类的公有成员
// 接口不能约束类的构造函数
class Asian implements Human {
    constructor(public name:string) {
        this.name = name;
    }

    eat() {
        console.log('I want eat noodle');
    }
}


// 接口的继承
interface Man extends Human{
    run(): void;
}


interface Child {
    cry(): void;
}


interface Boy extends Man,Child {
    smile(): void;
}


let boy: Boy = {
    name: 'jack',
    smile() {},
    cry() {},
    eat() {},
    run() {}
}


// 接口继承类
class Auto {
    state = 1;
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 5;
}







