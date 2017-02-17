# ECMAScript 2015 Features


## Tail Calls(尾递归)

尾递归能够使堆栈不溢出，并且防止内存泄漏。

### 写法

下面一个例子，为求斐波那契第`n`项

```js
function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
let nF = fibonacci(10);
console.log(nF); //89
```
