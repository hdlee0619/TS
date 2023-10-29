/*
* Defining functions
* */

function printName(name: string) {
    console.log(name)
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}과 ${person2}은 사귀고 있습니다.`
}

console.log(returnTwoCouples('이현동', '신민지'))
// returnTwoCouples(0, 1) type 에러

/*
* Optional Parameter
* */

function multiplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(multiplyOrReturn(10, 20))
console.log(multiplyOrReturn(10)) // 에러 발생하지 않음

function multiplyOrReturn2(x: number, y: number = 20) {
    // y는 undefined가 될 수 없음, 기본값 20
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/*
* 나머지 매개변수
* */

function getInfiniteParameter(...args: string[]) {
    return args.map(item => `너무 좋아 ${item}`);
}

console.log(getInfiniteParameter('카리나', '아이유', '강슬기'))

/*
* Return type
* */

function addTwoNumber(x: number, y: number) {
    return x + y;
}

// return type 유추해서 return number
addTwoNumber(10, 20);

function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤';
}

// return type 유추해서 return 10 | '랜덤'
randomNumber();

// return type을 지정해주었기 때문에 return을 해주어야함
function subtractTwoNumbers(x: number, y: number): number {
    return x - y;
}

const substractTwoNumbers2 = (x: number, y: number): number => {
    return x - y;
}

/*
* 특수 반환 타입
* */

function doNotReturn(): void {
    console.log('저는 반환을 하지 않습니다.')

    return;
}

// return void
doNotReturn();

// 함수가 끝나지 않는 경우를 정의
function neverEndingLoop(): never {
    while(true) {
        console.log('무한')
    }
}

// 함수가 끝나지 않는 상황을 절대적으로 만든다면 never return
function throwError(): never {
    throw Error();
}
