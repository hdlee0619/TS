/*
* Object
* */

const codefactory = {
    name: '코드팩토리',
    age: 32,
}

interface IPerson {
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

const iPerson: IPerson = {
    name: '아이유',
    age: 31,
}

const tPerson: TPerson = {
    name: '유인나',
    age: 31,
}
