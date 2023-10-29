/*
* Statement and Expression
* */

// statement 방식 (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression 방식 (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/*
* statement
*
* 함수의 타입들을 일일히 지정해주어야 함
* */


function add(x: number, y: number): number {
    return x + y;
}

function subtract(x: number, y: number): number {
    return x + y;
}

function multiply(x: number, y: number): number {
    return x + y;
}

function divide(x: number, y: number): number {
    return x + y;
}

/*
* expression
*
* 함수의 시그니처를 지정할 수 있음
* 깔끔하게 코드 작성 가능
* */

type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = (x, y) => {
    return x + y
}

const subtract2: CalculationType = (x, y) => {
    return x + y
}

const multiply2: CalculationType = (x, y) => {
    return x + y
}

const divide2: CalculationType = (x, y) => {
    return x + y
}
