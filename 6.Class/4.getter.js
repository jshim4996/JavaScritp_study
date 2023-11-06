// 접근자 프로퍼티(Accessor Property)
class Student {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // this.fullName = `${this.lastname} ${this.firstname}`;
  }
  get fullName() {
    return `${this.lastname} ${this.firstname}`;
  }

  set fullName(value) {
    console.log("set", value);
  }
}

const student = new Student("심", "준");
student.firstname = "곽";
console.log(student.firstname);
console.log(student.fullName);
student.fullName = "김철수";
