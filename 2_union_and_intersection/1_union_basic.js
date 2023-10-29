"use strict";
/*
* Union basics
*
* 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나
* */
Object.defineProperty(exports, "__esModule", { value: true });
let stringOrBooleanType = '아이브';
stringOrBooleanType = true;
let state = 'DONE';
let stringListOrBooleanList = [
    '카리나',
    '윈터',
    '닝닝',
    '지젤'
];
let stringListOrNumberList = ['강슬기', 1995];
let animalOrHuman = {
    name: '이현동',
    age: 25,
    address: '송파구',
};
// address는 human type에만 있기 때문에 TS에서 human으로 타입 추론
console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);
animalOrHuman = {
    name: '강아지',
    age: 10
};
console.log(animalOrHuman); // animal로 추론
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address) animal type이라 에러
let animalOrHuman2 = {
    name: '이현동',
    age: 25,
    address: '송파구'
};
console.log(animalOrHuman2);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);
animalOrHuman2 = {
    name: '몽자',
    age: 9,
};
console.log(animalOrHuman2);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// 합집합의 개념과 같음
/*
* union을 사용할 때 하나의 type을 만족 한다면 다른 타입의 값을
* 초과하거나 없어도 상관 없음
*/
const personOrCat = {
    name: '이현동',
    age: 25,
    breed: '요크셔테리어',
    country: '영국'
};
