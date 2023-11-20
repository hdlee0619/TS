/*
* Generic 함수에서 사용하기
* */

function whatValue(value: any): any {
    return value;
}

const value = whatValue('hello');

// type을 value화
// 존재하지 않는 타입을 받음
function genericWhatValue<T>(value: T): T {
    return value;
}

// 이 generic type이 어떤 타입이 될 지 선언할 수 있음
const genericResult = genericWhatValue<number>(123);

const genericResult2 = genericWhatValue('hello');

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z
    }
}

const multipleGenericsResult = multipleGenerics<string, number, boolean>('hello', 123, true);

// type 유추 가능
const multipleGenericsResult2 = multipleGenerics('hello', 123, true);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple('hello', 123);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

function instantiator<T extends { new(...args: any[]): {} }>(constructor: T, ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 28));
console.log(instantiator(Car, 'BMW', 'G80'));
