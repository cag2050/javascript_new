// 对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象（原因：空对象赋值给函数内部的this，没有this语句赋属性，所以还是空对象）。

function getMessage() {
    console.log(this)
    //return 'this is a message';
}

var msg = new getMessage();

//console.log(msg); // {}
console.log(typeof msg); // "object"