/*
* Type and Interface
* */

/*
* Type
*
* 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할
* */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: MaleOrFemale = 'male'
console.log(stringVar)

type IdolType = {
    name: string;
    year: number;
}

const Karina: IdolType= {
    name: '유지민',
    year: 2000
}

/*
* Interface
*
* interface가 type보다 나중에 생김
* interface만 사용할 수 있는 기능이 있고 type만 사용할 수 있는 기능이 따로 있음
*
* 일단 여기서는 type과 interface의 가장 큰 차이점은 interface는 type처럼 primitive(원시타입)는 나열 불가능
* interface는 객체 형태
* */

interface IdolInterface {
    name: string;
    year: number;
}

const winter: IdolInterface = {
    name: '김민정',
    year: 2001
}

interface IdolIT {
    name: NewStringType;
    year: NewNumberType;
}

const Ningning: IdolIT = {
    name: '닝닝',
    year: 2000
}

interface IdolOptional {
    name: string;
    year?: number; // 값을 넣어도 되고 안 넣어도 됨, type도 가능
}
