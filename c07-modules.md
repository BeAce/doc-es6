# ECMAScript 2015 Features

## Modules

`JavaScript`遵循着两种比较流行的模块加载器——`AMD`，`CommonJS`模式。在未引用该模块之前，该模块不执行，知道被`import`。

### 写法

```js
//utils.js
export function sum(x, y) {
  return x + y;
}
export const pi = Math.PI;
//app.js
import {sum, pi} from "./utils/js";
console.log(sum(pi + pi)); //6.283185307179586

OR

//app.js
import * as Utils from "./utils.js";
console.log(Utils.sum(Utils.pi + Utils.pi)); ////6.283185307179586
```
