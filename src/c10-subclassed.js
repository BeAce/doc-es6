class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }
}

var myarr = new MyArray();
myarr[0] = 1;
console.log(myarr, myarr.length);
