"use strict";
/*
* Types
* */
let helloText = 'Hello';
console.log(helloText);
/*
* JS 에 존재하는 7개의 타입
*/
const stringVar = 'String';
const numberVar = 3;
const bicIntVar = BigInt(9999999); // es2020시 사용가능
const booleanVar = true;
const symbolVar = Symbol(1);
const undefinedVar = undefined;
/*
* TS 에만 존재하는 타입
* */
// any - 어떤 타입이나 들어갈 수 있음
let anyVar;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = 'hdlee0619';
unknownType = false;
// any 와 차이는 unknownType 은 다른 타입의 변수에 할당 불가능
// let testNumber2: number = unknownType; -> 할당 불가
// let testString2: string = unknownType; -> 할당 불가
// let testBoolean2: boolean = unknownType; -> 할당 불가
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = null;
// let neverType: never = null;
// list type
const koreanGirlGroup = ['에스파', '오마이걸']; // string type 만 list 구성요소
const booleanList = [true, false, true, true];
