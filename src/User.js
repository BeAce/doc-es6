class User {
  constructor(sex) {
    this.friends = [];
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
user.getSex();
User.method();
