
var Vehicle = function () {
    this.price = 1000;
    return 1000;
};
// ���캯��Vehicle��return��䷵��һ����ֵ�����Ƕ�����ʱ��new����ͻ�������return��䣬���ء����족���this����
console.log((new Vehicle()) === 1000) // false