class User {
  constructor(sex) {
    this.sex = sex || '男';
  }

  getSex() {
    console.log('性别：', this.sex);
  }

  static method() {
    console.log('this is a static method!');
  }
}
var user = new User("女");
user.getSex(); //性别： 女
User.method(); //this is a static method!
user.method(); //user.method is not a function

