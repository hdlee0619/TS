/*
* inheritance
* */

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다.`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }

    sing() {
        console.log(`child: ${this.name}이 노래를 부릅니다.`);
    }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
ahri.sing();

let person: Parent;

// 상속을 받으면 자식은 부모가 될 수 있음
person = codefactory;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = codefactory; 에러

/*
* Optional 프로퍼티를 유의
* */

class Parent2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends Parent2 {
    age?:number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age;
    }
}

const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

// 이 경우에는 가능
// optional이라 구조가 같을 수 있으면 할당이 가능
let child: Child2;
child = ahri2;
