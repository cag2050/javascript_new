// ����ͨ�������ڲ�û��this�ؼ��ֵĺ�����ʹ��new�����᷵��һ���ն���ԭ�򣺿ն���ֵ�������ڲ���this��û��this��丳���ԣ����Ի��ǿն��󣩡�

function getMessage() {
    console.log(this)
    //return 'this is a message';
}

var msg = new getMessage();

//console.log(msg); // {}
console.log(typeof msg); // "object"