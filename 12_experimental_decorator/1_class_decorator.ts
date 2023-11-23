/*
* Class Decorator
* */

// 클래스 위에 데코레이터를 작성하면 파라미터로
// 데코레이팅을 한 대상 클래스를 받아볼 수 있음

@Test
@Frozen
@LogTest('dev')
@ChangeClass
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 데코레이터 함수 실행
function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const karina = new Idol('karian', 20);

// Frozen 함수가 실행되면서 클래스가 동결되었기 때문에
// true
console.log(Object.isFrozen(Object.getPrototypeOf(karina)));

// decorator factory

function LogTest(env: string) {
    return function (constructor: Function) {
        console.log(`${env} ${constructor}is called`);
    }
}

console.log('-------------------');

// 데코레이터 실행되지 않음
// 클래스의 선언이 읽힐 때 딱 한번만 실행이 된다.

const wonYoung = new Idol('wonYoung', 15);
console.log(wonYoung);

function ChangeClass<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        group = 'IZ*ONE';
        constructor(...params: any[]) {
            super(...params);

            console.log('constructor instantiated')
        }
    }
}
