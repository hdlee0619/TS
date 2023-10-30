/*
* Problems with Array in JS
*
* 가장 큰 문제점은 array에 모든 값을 넣을 수 있다는 것
* */

const number = [1, 2, 3, 4, 5, '6', '7'] // 가능

let strings: string[] = ['1', '2', '3'] // 다른 type 들어가면 에러

let stringOrNumber: (string | number)[] = [
    1,
    '2',
    3
]

let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]

// 또는

stringArrNumberArr = [
    '1',
    '2',
    '3',
]

let stringOrNumberArr: string | number[] = [
    1, 2, 3
]

stringOrNumberArr = '1';

let boolsArr = [true, false, true];

boolsArr.push(false);


// boolsArr.push(1); 에러

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
    // item type string으로 유추
    let item = onlyString[i]
}

for (let item of onlyNumbers) {
    // number type으로 유추
    item
}

let number3 = onlyNumbers[0]

// typescript는 index의 길이는 상관하지 않는다.
// tuple이 아닌 이상 에러를 잡아내지 않음
let number4 = onlyNumbers[9999];
