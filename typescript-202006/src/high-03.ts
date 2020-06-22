/**
 * 函数泛型
 * 
 * 泛指的类型
 * 
 */

function join<A>(first: A, second: A) {
  return `${first}${second}`;
}

join<string>('name', 'jack');


function add<T>(params: T[]) {
  let t:any = 0;
  params.forEach(item => {
    t += item;
  })

  return t;
}

add<number>([1,2,3])


function getPerson<M, N>(name: M, age: N) {
  return `name is ${name}, age is ${age}`;
}

getPerson<string, number>('lucy', 30);


/**
 * 类中的泛型
 * 
 */

class DataManageer<T> {
  constructor(private data:T[]) {

  }

  getItem(index: number): T {
    return this.data[index];
  }
}


interface Item {
  name: string
}

class GetString<T extends Item> {
  constructor(private data:T[]){

  }

  getItem(index:number): string{
    return this.data[index]['name'];
  }
}

const g1 = new GetString([{
  name: 'jack'
}])














