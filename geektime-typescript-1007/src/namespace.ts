// 命名空间

namespace Shape {
    export function square(x:number) {
        return x * x;
    }
}

Shape.square(5);


// 别名(此处的import与模块化的导入没有任何关系)
import circle = Shape.square;

circle(6);







