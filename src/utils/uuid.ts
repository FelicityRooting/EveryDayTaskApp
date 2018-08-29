export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;//这里其实还有一个作用就是把r变成了整数
    const v = c === 'x' ? r : (r & 0x3) | 0x8;// 其实就是说x直接替换，y另外的用经过特殊处理的，这里的特殊处理就是 r&0x3|0x8 ,
    // 因为位运算有顺序，这样的值就限定在一个范围了，其范围就是二进制 1000-1011这样4个数字了，然后输出为8,9,A,B这样4个字符了。
    return v.toString(16);
  });
}

// this method is used to generate an unique id
