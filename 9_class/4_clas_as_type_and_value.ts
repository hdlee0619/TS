/*
* Class as Type and Value
* */

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

// 자동으로 Dog type으로 지정되어있음
let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리'; 변경 불가

// 특수한 객체로는 변경 가능
ori = {
    name: '별이',
    bark() {
        return `${this.name}가 짖습니다.`
    }
};

//값이 바뀌어도 실행가능
console.log(ori);

