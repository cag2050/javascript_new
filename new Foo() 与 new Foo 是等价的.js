function Foo () {
    this.price = 100
}

// new命令的作用，就是执行构造函数，返回一个实例对象。
// new命令本身就可以执行构造函数，所以后面的构造函数可以带括号，也可以不带括号。下面两行代码是等价的，但是为了表示这里是函数调用，推荐使用括号。

// 推荐的写法
//var v = new Foo();
// 不推荐的写法
var v = new Foo;
console.log(v.price);
