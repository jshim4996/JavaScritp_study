// return 을 명시적으로 작성하지 않으면 반환값이 없음
function add(a, b) {
  return a + b;
}

const result = add(1, 2);

// return 을 함수 중간에 하게 되면 함수가 종료됨
// 사용예: 조건에 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함
function print(num) {
  if (num < 0) return;
  //   num < 0 ? console.log(num) : "";
  console.log(num);
}

print(12);
print(-12);
