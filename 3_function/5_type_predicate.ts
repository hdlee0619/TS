/*
* Type Predicate
*
* 어떤 변수 또는 반환값이 그 type인지 아닌지 구분할 때 사용
* */

// number인지 아닌지 판단해야하기 때문에 any type이 적절함
function isNumber(input: any): input is number {
    return typeof input === 'number';
}

console.log(isNumber('hi'));

// 아래처럼 사용해도 되지 않을까?
function isNumberRetBool(input: any): boolean {
    return typeof input === 'number';
}

let number: any = 5;

if (isNumberRetBool(number)) {
    // 그대로 any type으로 인식
    number;
}

if (isNumber(number)) {
    // number type으로 정확히 인식
    number;
}

interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = {
    name: '도지',
    age: 32,
}

if (isDoge(doge)) {
    doge;
} else {
    doge;
}
