// Object literal {key: value}
// new Object()
// Object.crete();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)

let apple = {
  name: "apple",
  "hello-by": "world",
  0: 1,
  ["hello-bye1"]: "world2",
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마쳄표 표기법 dot notation
console.log(apple["hello-bye1"]); //대괄호 표기법 braket notion
apple["name"];

//속성 추가
apple.emoji = "😀";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;

console.log(apple);
