/*
* Interface
*
* JS에서는 존재하지 않음
* */

interface Animal {
    name: string;
    age: number;
    jump(): string;
}

// implements를 사용하면 interface에 정의한대로 class에 정의가 되어있어야함
class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }

    // 초과는 상관없음
    dance() {

    }
}

let ori: any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    // Animal type이 됨
    ori;
}

/*
* 다중 인터페이스 구현
* */

interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal, Pet{
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }

    // Pet
    bark(): void {
        console.log('야옹');
    }
}

type AnimalAndPet = Animal & Pet;

// type을 만들어서도 가능
class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Animal
    jump(): string {
        return `${this.name}이 점프를 합니다.`
    }

    // Pet
    bark(): void {
        console.log('야옹');
    }
}

// 안되는 상황

interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// name을 두 인터페이스에 정의해서 never가 됨
// 충돌되는 property가 없는지 체크해야함
// class Person implements WrongInterface1, WrongInterface2 {
//
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 제너릭에서 더 사용함
interface IdolConstructor {
    new (name: string, age: number): Idol;
}

// 외부에서 입력을 받음
function createIdol(constructor: IdolConstructor, name: string, age: number) {
    return new constructor(name, age);
}

createIdol(Idol, '유지민', 20);
