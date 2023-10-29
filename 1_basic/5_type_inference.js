"use strict";
/*
* Type Inference
*
* 타입 추론
* */
Object.defineProperty(exports, "__esModule", { value: true });
let stringType = 'string';
let booleanType = true;
// stringType = 121; 에러
// string 리터럴 타입, 좀 더 구체화 된 타입
const constStringType = 'const string'; // TS 에서 const string type을 부여함
let Karina = {
    name: '유지민',
    year: 2000,
};
const Winter = {
    name: '김민정',
    year: 2001,
};
Winter.name = '민지'; // const이더라도 변경 가능
// 프로퍼티를 구체화 하는 방법
const Minji = {
    name: '신민지',
    year: 1999,
};
// Minji.name = '이현동' 에러 발생
/*
* Array
* */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, '3', 4, '5'];
// numbers.push('6'); 에러, number[]이기 때문
const nos = numbersAndString[100]; // 에러 발생하지 않음, undefined
// tuple
const twoNumbers = [1, 2]; // readonly [1, 2] 로 추론, 수정 불가
// twoNumbers[0] = 10; 에러
// twoNumbers.push(100); 에러
// const first2 = twoNumbers[100]; 에러
