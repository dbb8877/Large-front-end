// reduce&map
// reduce是一个累加方法，是对数组累积执行的回调函数，返回最终计算结果。

/*
array.reduce(function (total, currentValue, currentIndex, arr) {},
initialValue);

1. total 必需 初始值 一般也表示为prev.或者计算结束后返回值
2. currentValue 必需 当前元素
3. currentIndex 可选 当前元素的索引
4. arr 可选 当前元素所属的数组对象
5. initialValue 可选，传入函数的初始值

常用参数：total currentValue initialValue
*/


Array.prototype.myMap = function (fn, thisArg = []) {
    if (typeof fn !== 'function') {
        throw new Error(`${fn} is not a function`);
    }
    const res = [];
    this.reduce((pre, cur, index, arr) => {
        res.push(fn.call(thisArg, cur, index, arr))
    }, []);
    return res;
}

var arr = [2,3,1,5];
arr.myMap(function (item,index,arr) { 
    console.log(item,index,arr);
 })
// item 是指数组遍历出来的每一个计算项目
 let res = arr.myMap((v,i)=>`第${i+1}项计算结果:`+v*2);
 console.log(res);

