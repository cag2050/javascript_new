
var Vehicle = function () {
    this.price = 1000;
    return 1000;
};
// 构造函数Vehicle的return语句返回一个数值，不是对象。这时，new命令就会忽略这个return语句，返回“构造”后的this对象。
console.log((new Vehicle()) === 1000) // false