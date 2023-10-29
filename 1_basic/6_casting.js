"use strict";
/*
* Casting
*
* TS에서 Casting을 하면 JS에서는 적용이 되지 않음
* 실제 구동하는 코드에서는 아무런 의미를 갖지 않음
* */
Object.defineProperty(exports, "__esModule", { value: true });
const codeFactory = 'code factory';
const testNumber = 3;
console.log(codeFactory.toUpperCase());
// console.log(testNumber.toUpperCase()); 에러 발생
let sampleNumber = 5;
console.log(sampleNumber.toUpperCase()); // 정상, JS에서는 에러 발생
let stringVar = sampleNumber; // 5를 넣어도 그 타입으로 강제해버림
// JS에서 컴파일 후에는 number로 나오지만, TS에서는 string에 해당하는 메서드 사용가능
console.log(typeof sampleNumber);
const number = 5;
/*
* 에러를 내던 기능을 잃게 됨
* 실제 JS 코드가 실행될 때의 실제 타입과
* 개발자가 코드를 쓸 때 인식하는 타입이 달라질 수 있음
*
* 실제로 as를 사용할 때는 상속 상에서 더 구체화된 값으로 캐스팅 할 때 사용
*/
console.log(number.toUpperCase());
