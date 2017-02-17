# ECMAScript 2015 Features

## Set && Map

高效的数据结构。

### 写法

- Set

```js
var s = new Set();
s.add('a').add('b').add('c');
s.has('a'); //true
s.has(a); // ReferenceError: a is not defined
```

- Map

```js
var m = new Map();
m.set("abc", 123); // Map { 'abc' => 123 }
m.get('abc') // 123
m.set(a, 1); //ReferenceError: a is not defined
m.set(s, 22); // Map { 'abc' => 123, Set { 'a', 'b', 'c' } => 22 }
```
