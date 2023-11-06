//  정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, workTime) {
    this.name = name;
    this.department = department;
    this.workTime = workTime;
  }
  getSales() {}
}

class FullTimeEmployee extends Employee {
  #hourlyWage = 10000;
  constructor(name, department, workTime) {
    super(name, department, workTime);
  }
  get sales() {
    return this.workTime * this.#hourlyWage;
  }
}

class PartTimeEmployee extends Employee {
  #hourlyWage = 8000;
  constructor(name, department, workTime) {
    super(name, department, workTime);
  }
  get sales() {
    return this.workTime * this.#hourlyWage;
  }
}

const fullTimeEmployee = new FullTimeEmployee("심준", "개발", 30);
console.log(fullTimeEmployee);
console.log(fullTimeEmployee.sales);

const partTimeEmployee = new PartTimeEmployee("제임스", "프론트", 10);
console.log(partTimeEmployee);
console.log(partTimeEmployee.sales);

///////////////

class EmployeeDream {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployeeDream extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.payRate);
  }
}
class PartTimeEmployeeDream extends Employee {
  static PAY_RATE = 8000;

  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployeeDream.payRate);
  }
}

const joon = new FullTimeEmployee("joon", "s/w", 30);
const bob = new PartTimeEmployeeDream("joon", "s/w", 30);
console.log(joon);
