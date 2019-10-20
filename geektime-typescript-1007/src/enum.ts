
// 数字枚举
enum Role {
    Guest,
    Repotrer,
    Developer,
    Maintainer
}

console.log(Role.Guest) // 0
console.log(Role[2])    // 'Developer'


// 字符串枚举
enum Message {
    Success = '恭喜你，成功',
    Fail = '抱歉，失败'
}


// 异构枚举
enum Answer {
    Y,
    N = 'no'
}


// 枚举成员
enum Char {
    a,
    b = Char.a,
    c = 1 + 5,
    d = Math.random(),
    e = 'aaa'.length
}


// 常量枚举(在编译阶段会被移除)
const enum Month {
    Jan,
    Feb,
    May,
    Oct
}

