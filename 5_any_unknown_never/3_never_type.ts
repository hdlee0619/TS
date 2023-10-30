/*
* Never Type
* */

// 1. 함수에서 에러를 던질 때

function throwError(): never {
    throw Error()
}

// 2. 무한 loop
function infiniteLoop(): never {
    while (true) {

    }
}

// 3. 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// 어떠한 값도 할당 불가능
// let neverType: never = 10;
// let neverType: never = undefined;
// let neverType: never = null;
