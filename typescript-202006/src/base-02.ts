/**
 * 数组和元组
 * 
 */

const nArr: number[] = [1, 2]

const sArr: (number | string)[] = ['abc', 80]
const kArr: (undefined | Symbol)[] = [Symbol('k'), Symbol('j'), undefined]

const oArr: {name:string, age: number}[] = [{name: 'jack', age: 7}]

// 类型别名(type alias)
type Person = {
  height: number,
  width: number,
}

const vArr: Person[] = [{height: 1, width: 2}]


class Animal {
  name: string;
  age: number;
}

const mArr: Animal[] = [
  new Animal,
  {name: 'dog', age: 9}
]


// 元组(tuple): 数组每一项的类型，以及数组的长度固定

const kkArr: [string, undefined] = ['abc', undefined]

const cityArr: [string, string][] = [['shanghai', 'hangzhou'], ['huzhou', 'shaoxing']]


/**
 * 接口(interface)
 * 
 * 能用接口则用接口，如果接口实现不了则用类型别名
 */

interface Color {
  red: string,
  blue: string,
  orange: string
}

const drawColor = (color: Color): string => {
  return color.red + color.blue + color.orange;
}


// 接口可选属性
interface ChooseFace {
  name?: string,
  age: number,
  height: number,
  readonly money: number,
}

const getFace = (face: ChooseFace): void => {

}

const f1 = {
  name: 'jord',
  age: 12,
  height: 55,
  money: 9
}

getFace(f1)


interface China {
  city: string,
  [propName:string]: any,
  say(): string
}

// 类实现接口
class Zhejian implements China {
  city = 'hangzhou';
  say() {
    return 'hello china'
  }
}


// 接口的互相继承
interface Father{
  width: number,
  height: number,
}


interface Child extends Father{
  sex: string,
  say(): string
}


interface SayHi {
  (word: string): string
}

const sayFunc: SayHi = (w: string) => {
  return w;
}



