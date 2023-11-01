/*
* readonly 프로퍼티
* */

class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const karina = new Idol('유지민', 20);

karina.age = 32; // 변경 가능
// karina.name = '이현동' 변경 불가능
