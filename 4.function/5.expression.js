// 함수 선언문 function name() { }
// 함수 표현식 const name = function() {}
// 이름이 없는 함수 를 무명함수라고 한다.
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

//화살표 함수 const name = () => {}
add = (a, b) => a + b;
console.log(add(1, 2));

// 생선자 함수 const object = new Function(); //

// 함수를 ()묶으면 값으로 변환 된다. 그뒤 ()를 사용하여 바로 함수를 호출 할수도 있다.
//IIFF(Immedicately-Invoked Function Expressions)
(function run() {
  console.log("^^");
})();
