/*
* Method 에서 Generic 사용하기
* */

class Idol <T> {
    id: T;
    name: string;

    constructor(id: T, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(time: Time) {
        return `안녕하세요 ${this.name} 입니다. ID는 ${this.id}입니다. 지금 시간은 ${time} 입니다.`;
    }
}

const karina = new Idol<number>(123, '카리나');

// string
console.log(karina.sayHello("2023"));
// number
console.log(karina.sayHello(1992));

class Message<T> {
    sayHello<Time>(logTime: Time, message: T) {
        console.log(`[${logTime}] ${message}`);
    }
}

const message = new Message<string>();
// logTime: number, message: string
message.sayHello<number>(2000, '안녕하세요');

// class의 generic과 method의 generic이 중복될 경우
// 메서드의 generic이 우선순위가 높음

// 따라서 중복되게 사용하지 않기
class DuplicatedGenericName<T> {
    sayHello<T>(logTime: T) {
        console.log(`logTime: ${typeof logTime}`);
    }
}

const duplicate = new DuplicatedGenericName<string>();

duplicate.sayHello<number>(123);
