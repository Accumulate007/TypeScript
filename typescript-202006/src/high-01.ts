/**
 * 联合类型
 */

interface Bird{
  fly: boolean;
  sing: () => {}
}

interface Dog {
  fly: boolean,
  bark: () => {}
}

/**
 * 
 * 4种类型保护的方法
 */

 // 类型断言
function trainAnimal(animal: Bird | Dog) {
  if(animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}


// in语法
function anotherAnimal(animal: Bird | Dog) {
  if('sing' in animal) {
    animal.sing()
  } else {
    animal.bark();
  }
}

// typeof语法
function add(x: string | number, y: string | number) {
  if(typeof x === 'string' || typeof y === 'string') {
    return `${x}${y}`;
  }

  return x + y;
}


// instanceof
class NumberObj {
  count: number;
}

function addSome(first: object | NumberObj, second: object | NumberObj) {
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}


