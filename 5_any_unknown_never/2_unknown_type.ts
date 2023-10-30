/*
* Unknown Type
*
* any 보다는 덜 자유로운 타입
* */

let anyValue: any;

// 모든 값이 할당 가능
anyValue = 24;
anyValue = '카리나';
anyValue = true;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

// unknown도 마찬가지로 모든 값 할당 가능
unknownValue = 24;
unknownValue = '카리나';
unknownValue = true;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 모든 값 할당 가능
// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// any와 unknown을 제외하고 모든 값에 할당 불가능
let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// 알지 못하는 값 실행 불가
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown): target is string {
    return typeof target === 'string'
}

let testVal: unknown;

if (isString(testVal)) {
    testVal;
}

/*
* Union Type
* */

// unknown type이 됨
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
// any type이 됨
type uOrAny = unknown | any;
type anyOrU = unknown | any;

/*
* Intersection Type
* */

// stirng, boolean, number가 됨
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
// any type이 됨
type uAndAny = unknown & any;
type anyAndU = any & unknown;

/*
* Operator 사용
* */

let number1: unknown = 10;
let number2: unknown = 20;

// 불가능, 값을 알 수 없기 때문
// number1 + number2
// number1 - number2
// number1 * number2
// number1 / number2

// 사용가능
number1 === number2
number1 == number2
number1 !== number2
number1 != number2
