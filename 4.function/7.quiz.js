//주어진 숫자 만큼 0부턴 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야 함
//5, 순회 하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
//function iterate(max, action)

const log = (num) => console.log(num);
const doubleAndLog = (num) => console.log(num * 2);

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(3, doubleAndLog);

setTimeout(() => {
  console.log("1초뒤 이 함수를 실행될거에요");
}, 1000);
