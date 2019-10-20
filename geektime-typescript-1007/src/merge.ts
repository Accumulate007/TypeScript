/**
 * 声明合并
 */

interface A {
    x:number
}

interface A {
    y:number
}

let a1:A = {
    x:1,
    y:2
}


// 函数命名空间
function Lib() {}

namespace Lib {
    export let version = '1.0'
}



