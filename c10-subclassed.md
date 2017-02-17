# ECMAScript 2015 Features

## Subclassed

在ES6中，`Array`,`Date`,`DOM`元素都可以被继承子类化。

```js
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var myarr = new MyArray();
myarr[0] = 1;
console.log(myarr, myarr.length); //MyArray [ 1 ] 1
}
```
