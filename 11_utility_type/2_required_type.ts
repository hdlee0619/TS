/*
* Required<Type>
* */

interface Dog {
    name: string;
    age?: number;
    country?: string;
}

// generic에 넣은 타입이 옵셔널도 모두 필수가 됨
const requiredDog: Required<Dog> = {
    name: '멍멍이',
    age: 2,
    country: 'korea',
}
