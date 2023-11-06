// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
class Counter {
  #counter;
  constructor(counter = 0) {
    this.#counter = counter;
  }
  pluse() {
    this.#counter += 1;
  }
  initCouter() {
    this.#counter = 0;
  }
  get totalCouter() {
    return this.#counter;
  }
}

const counter = new Counter();

counter.pluse();
console.log(counter.totalCouter);
counter.pluse();
console.log(counter.totalCouter);
counter.pluse();
console.log(counter.totalCouter);

counter.initCouter();
console.log(counter.totalCouter);

class CouterDream {
  //  private(#)- 외외 접근 x, public(기본)- 외부 접근 가능/수정 가능 , protected 등은 field 에서 지정한다.
  #startValue;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#startValue = 0;
    } else {
      this.#startValue = startValue;
    }
  }

  get value() {
    return this.#startValue;
  }

  incrment = () => {
    this.#startValue++;
  };
}
const couterDream = new CouterDream();

couterDream.incrment();

console.log(couterDream.value);
