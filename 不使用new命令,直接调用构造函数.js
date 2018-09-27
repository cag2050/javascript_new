var Vehicle = function () {
    this.price = 1000;
};

// 不使用new命令，直接调用构造函数会发生什么事？
// 这种情况下，构造函数就变成了普通函数，并不会生成实例对象。this这时代表全局对象
var v = Vehicle()
console.log(v) // undefined
console.log(price) // 1000
