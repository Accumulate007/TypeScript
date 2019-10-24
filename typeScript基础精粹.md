本文源自网络文章《typeScript基础精粹》，摘录了其中一些自认为忽视或者模糊的知识点。

#### 元组类型

元组是一种特殊的数组，限定了数组元素的个数和类型。
```javascript
let tuple:[number,string] = [5, 'a']
```
需要注意元祖的越界问题，虽然可以越界添加元素，但是仍然是不能越界访问，会报错。

#### symbol类型
symbol类型可以直接声明为symbol类型，也可以直接赋值。
```javascript
let s1:symbol = Symbol()
```

#### 枚举类型

枚举类型分为数字枚举和字符串枚举，此外还有异构枚举(不推荐)。

- **数字枚举**

数字枚举既可以通过名字取值，也可以通过索引取值。
```javascript
enum Roles {
  Teacher,
  Guest,
  Reporter
}

// Roles.Guest = 5  枚举成员是只读的，不能在定义后重新修改赋值

// 取值
Roles[1]    // Teacher
Roles['Reporter']   // 3
```

- **字符串枚举**

字符串枚举只能通过名字取值，无法通过索引取值。
```javascript
enum Message {
  True = '成功',
  Fail = '失败'
}

// 取值
Message['True']
```

















