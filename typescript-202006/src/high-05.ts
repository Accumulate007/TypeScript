/**
 * keyof
 * 
 */

interface Animal {
  name: string,
  age: number,
  gender: string,
}


class Dog {
  constructor(private info: Animal) {}

  getInfo<T extends keyof Animal>(key: T):Animal[T] {
    return this.info[key];
  }
}


const d1 = new Dog({name: 'jack', age: 12, gender: 'aaa'})

const test = d1.getInfo('name');
// const t2 = d1.getInfo('hello'); 


