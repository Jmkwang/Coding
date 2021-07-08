var arr = [1,2,3,4,5];
var arrNew = [];

//存放用过的随机数
var jishu= [];

for(var i = 0; i < arr.length; i++){
    do {
        var random = Math.floor(Math.random() * 5);
    } while (random == i || jishu.indexOf(random) !== -1);  //随机出的索引不等于原数组的索引

    arrNew[random] = arr[i];
    jishu.push(random);
}

console.log(arrNew);

