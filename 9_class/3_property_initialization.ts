/*
* Property Initialization
* */

class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법
    pet?: string;
    // type of undefined
    petAge: number | undefined;

    constructor(name: string, pet?:string) {
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack {
    // 초기화가 보장이 되었다고 TS에게 알림
    stack!: string[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = [];
    }
}
