var Vehicle = function () {
    this.price = 1000;
};

// ��ʹ��new���ֱ�ӵ��ù��캯���ᷢ��ʲô�£�
// ��������£����캯���ͱ������ͨ����������������ʵ������this��ʱ����ȫ�ֶ���
var v = Vehicle()
console.log(v) // undefined
console.log(price) // 1000
