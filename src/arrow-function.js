console.log("------use arrow function------")
function Ff(names) {
    this.names = names;
    this.age = 10;
    this.getOne = function() {
        this.names.forEach(name => console.log(name, this.age))
    }
}
const names = ['Jerry','Jenny', 'Danny', 'Lucy'];
const ff = new Ff(names);
ff.getOne();

console.log("------no arrow function------")
function F(names) {
    this.names = names;
    this.age = 10;
    this.getOne = function() {
        this.names.forEach(function(name) {
        	console.log("this == global ?", this == global);
        	console.log(name, this.age)
        })
    }
}
//const names = ['Jerry','Jenny', 'Danny', 'Lucy'];
const f = new F(names);
f.getOne();