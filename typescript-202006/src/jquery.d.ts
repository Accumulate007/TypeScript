
/**
 * jQuery类型定义文件
 * 
 */

 /*
 // 定义全局变量
declare var $: (param: () => void) => void;
*/


// 定义全局函数
declare function $(param: () =>  void): void;

// 函数重载
declare function $(param: string) : {
  html: (html: string) => {};
}

/*
declare namesapce ${
  namespace fn{
    class init{}
  }
}
*/

/**
 * 模块化
 * 
 */

declare module 'jquery' {
  namespace ${
    
  }
}


