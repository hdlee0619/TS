/*
* Loopholes of Any
* */

let number: number = 10;

// number.toUpperCase(); 에러

// typescript에서 error를 잡지 않지만 런타임 때 에러 발생 가능
(number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2); // 에러 잡아주지 않음

let karina: any = {
    name: '유지민',
    age: 30,
}

// typescript가 name이라는 property가 존재하는지 인식하지 못함
const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x, y);
}

// 실수로라도 x, y를 빼면 에러가 발생해도 잡아주지 못함
const callback = (x: number, y: number) => {
    return x * y;
}

console.log(callbackRunner(5, 4, callback)); // 20 출력

