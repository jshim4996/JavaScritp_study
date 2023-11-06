//접근제어자 - 캡슐화
// private(#)- 외외 접근 x, public(기본)- 외부 접근 가능/수정 가능 , protected - 상속할경우 수정및 접근 가능
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

// apple 은 Fruit 클래스의 인스턴스이다. => 클래스로 만들어진 객체를 인스턴스라고 부른다.
const apple = new Fruit("apple", "🍎");
// apple.#name = "orange"; // #field 는 외부에서는 접근이 불가능함
console.log(apple.name);
// console.log(appledisplay());
