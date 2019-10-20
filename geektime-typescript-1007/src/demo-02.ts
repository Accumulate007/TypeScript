// 交叉类型(使用&符号连接)

interface DogInterface {
    run():void;
}

interface CatInterface {
    jump(): void;
}


let pet: DogInterface & CatInterface = {
    run(){},
    jump(){}
}


// 联合类型

let a: string | number = 'a';
let b: 'k' | 'm' | 'y';
let c: 2 | 4 | 6;


class Tdog implements DogInterface {
    run() {};
    eat() {}
}

class Tcat implements CatInterface {
    jump() {};
    eat() {}
}

enum Master {
    Boy,
    Girl
}


function getPet(master:Master) {
    let pet = master === Master.Boy ? (new Tdog()) : (new Tcat());
    return pet;
}


// 类型保护区块：利用两种类型的共有属性，创建不同类型的保护区块

interface Square {
    kind: "square";
    size: number
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number
}

type Shape = Square | Rectangle;

function area(s:Shape):any {
    switch(s.kind) {
        case "square":
            return 1;
        case "rectangle":
            return 2;
    }
}


// 索引类型

let demo2Obj = {
    a: 1,
    b: 2,
    c: 3
}

function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key]);
}

// keyof

interface Obj {
    a: number,
    b: string
}

let key: keyof Obj;


// T[K]

let value: Obj['a'];

// T extends U(泛型约束)



// 改造getValues

function getValues2<T, K extends keyof T>(obj: T, keys: K[]):T[K][] {
    return keys.map(key => obj[key]);
}















