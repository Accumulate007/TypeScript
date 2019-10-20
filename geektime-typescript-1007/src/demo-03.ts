/**
 *  映射类型(TS内部预置)
 */

interface demo03Obj {
    a:string,
    b:number,
    c: boolean
}

type ReadonlyObj = Readonly<demo03Obj>;

type PartialObj = Partial<demo03Obj>;


/**
 * 条件类型
 * 
 * T extends U ? x : y
 */















