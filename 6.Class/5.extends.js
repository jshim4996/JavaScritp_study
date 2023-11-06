// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("논다");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    // super 상속하고 있는 부모 class 를 지칭
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("논다");
  }
  // 오버라이딩 overriding => 부모 클래스에 있는 메소드를 자식 클래스에서 덮어 씌어 바꾸는것을
  eat() {
    //super 을 사용해서 부모에 생성자 함수를 또는 메소드를 가져올수 있다.
    super.eat();
    console.log("강아지가 먹는다.");
  }
}
const dog = new Dog("노랑이", "심준");
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
