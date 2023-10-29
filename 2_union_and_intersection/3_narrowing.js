"use strict";
/*
* Narrowing
*
* Narrowing은 Union 타입에서 더욱 구체적인 타입
* 논리적으로 유추 할 수 있게 되는 것을 의미
* */
Object.defineProperty(exports, "__esModule", { value: true });
let numberOrString = 'Code factory';
numberOrString; // 값을 통해서 string type으로 유추
const decimal = 12.3278;
console.log(decimal.toFixed(2));
console.log(numberOrString);
