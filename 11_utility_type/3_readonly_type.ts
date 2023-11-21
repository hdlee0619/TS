/*
* Readonly<Type>
* */

interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냥이',
    age: 3,
}

// 변경 가능
nyaong.name = '냐옹이';

const bori : Readonly<Cat> = {
    name: '보리',
    age: 2,
}

// bori.name = '보리보리'; error 발생
