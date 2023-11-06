//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지 않다.
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야됨
// 원시값 - 값의 복사
// 객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
  num = 5; // 좋지 않은 코드
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function changeName(obj) {
  //   obj.name = "bob"; // xxxxxxxx
  //   console.log(obj);
  return { ...obj, name: "Bob" };
}

const jshim = { name: "shim joon" };

console.log(changeName(jshim));
console.log(jshim);
