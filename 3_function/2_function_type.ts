/*
* Function Type
* */

type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
    return ['카리나', '윈터', '닝닝'].map(
        callback
    );
}

console.log(runner((x) => `에스파 멤버 ${x}`));

// 이 함수의 시그니처, params, return type 유추 가능
type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
    return x * y;
}

/*
* Interface로 함수 타입 선언
* */

interface IMultiplyTwoNumbers {
    // type과의 차이는 화살표가 아닌 ':'로 정의
    (x: number, y: number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y) => {
    return x * y;
}
