/*
* Narrowing
*
* Narrowing은 Union 타입에서 더욱 구체적인 타입
* 논리적으로 유추 할 수 있게 되는 것을 의미
* */

// let numberOrString: number | string = 'Code factory'
//
// numberOrString; // 값을 통해서 string type으로 유추
//
// const decimal = 12.3278;
// console.log(decimal.toFixed(2));
// numberOrString.toFixed(); 에러, string으로 narrowing 됐음

/*
* Narrowing의 종류
*
* 1. Assignment Narrowing
* 2. typeof Narrowing
* 3. Truthiness Narrowing
* 4. Equality Narrowing
* 5. in operator Narrowing
* 6. instanceof Narrowing
* 7. discriminated union Narrowing (차별된 유니언 내로잉)
* 8. exhaustiveness checking
* */

// 1. Assignment Narrowing
// 특정 값을 할당해서 내로잉

let numberOrString: number | string = '아이유';

numberOrString.toString();

// 2. typeof Narrowing

// number 일지 string 일 지 예측 불가
numberOrString = Math.random() > 0.5 ? 1123 : '아이유';

if (typeof numberOrString === 'string') {
    // string type으로 narrowing
    numberOrString;
} else {
    // number type으로 narrowing
    numberOrString;
}

// 3. Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['에스파', '레드벨벳']

if (nullOrString) {
    // string[] type으로 narrowing
    nullOrString
} else {
    // null type으로 narrowing
    nullOrString
}

// 4. Equality Narrowing

let numbOrString: string | number = Math.random() > 0.5 ? 1123 : '아이유';

let stringOrBoolean: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numbOrString === stringOrBoolean) {
    // 둘 다 string인 경우 밖에 없음
    numbOrString;
    stringOrBoolean;
} else {
    // string | number 로 narrowing
    numbOrString;
    stringOrBoolean;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
    1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    // number로 narrowing
    numberOrStringOrNull;
} else {
    // string | null로 narrowing
    numberOrStringOrNull;
}

// 5. in operator Narrowing

interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '강슬기',
    age: 29,
}

let dog: Dog = {
    name: '오리',
    type: '요크셔테리어'
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ?
    human : dog;

if ('type' in humanOrDog) {
    // type key는 Dog type에만 있기 때문에 Dog type으로 narrowing
    humanOrDog;
} else {
    // Human type으로 narrowing
    humanOrDog;
}

// 6. instanceof Narrowing

let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '이현동';

if (dateOrString instanceof Date) {
    // Date type narrowing
    dateOrString;
} else {
    // string type narrowing
    dateOrString
}

// 7. discriminated union Narrowing
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // 강아지 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? {
    type: 'human',
    height: 177,
} : {
    type: 'dog',
    breed: '요크셔테리어'
}

if (animal.type === 'human') {
    // number | undefined 로 narrowing
    animal.height;
} else {
    // string | undefined 로 narrowing
    animal.breed;
}

interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog',
    breed: '요크셔테리어'
}

type HumanOrDog2 = Human2 | Dog2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 168,
    } : {
        type: 'dog',
        breed: '요크셔테리어'
    };

// type을 나눠서 정의하고 union으로 합치는게 훨씬 유리
if (humanOrDog2.type === 'human') {
    // Human2 type으로 더 정확히 narrowing
    humanOrDog2
} else {
    // Dog2 type으로 더 정확히 narrowing
    humanOrDog2
}

// 8. exhaustiveness checking

switch (humanOrDog2.type) {
    case "human":
        humanOrDog2;
        break;
    case "dog":
        humanOrDog2;
        break;
    default:
        humanOrDog2;

        /*
        * type이 추가될 경우에 default에서 never type이 아니라
        * 추가된 type이 될 수 있으므로 에러를 뱉기 때문에
        * 알림과 같은 역할을 해줄 수 있음
        * */
        const _check: never = humanOrDog2;
        break;
}
