# 一些关于 js 的小技巧

1. || 和 && 的妙用

```js
// 原始写法
function b(a) {
  if (a) {
    return a;
  } else {
    return "";
  }
}

// 短路处理。常见于if条件中，但是也可以直接用于语句中。当第一个参数为true时取第一个参数的值。&&与||相反，第一个参数为true时取第二个参数的值。
function b(a) {
  return a || "";
}
```

2. 输入一个值，返回其数据类型

```js
type = param => {
  return Object.prototype.toString.call(param);
};
console.log(type(1));
```

3. 在数组中找到指定的元素，返回下标

```js
arrFinNum = function(arr, num) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      index = i;
      break;
    }
    return index;
  }
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrFinNum(arr, 4));
```

4. 时间戳转化为 YMD 格式

```js
let date = Date.parse(new Date());

dateFormat = (timestamp, formats) => {
  formats = formats || "Y-m-d";
  let zero = function(value) {
    return value < 10 ? "0" + value : value;
  };
  let myDate = timestamp ? new Date(timestamp) : new Date();
  let year = myDate.getFullYear();
  let month = zero(myDate.getMonth() + 1);
  let day = zero(myDate.getDate());
  let hour = zero(myDate.getHours());
  let minite = zero(myDate.getMinutes());
  let second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/gi, function(matches) {
    return {
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    }[matches];
  });
};

console.log(dateFormat(date, "Y-m-d"));
```
