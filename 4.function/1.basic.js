// 사용 예지 1
function add(a, b) {
  //   const result = a + b;
  //   return result;
  return a + b;
}

// console.log(add(1, 2));
const result = add(1, 2);
console.log(result);

// 사용 예지 2\
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

let lastName = "심";
let firstName = "준";
// let fullName = `${firstName} ${lastName}`;
console.log(fullName(lastName, firstName));

let lastName2 = "곽";
let firstName2 = "예지";
// let fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName(lastName2, firstName2));
