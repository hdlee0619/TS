/*
* Nested Object
* */

type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },

    nationality: string;
}

// identity가 에러가 났을 때 에러 메세지가 보기 어려울 수 있음
const codefactory: NestedPerson = {
    identity: {
        name: '코드팩토리',
        age: 32,
    },

    nationality: '한국인',
}

// 구조적으로는 NestedPerson과 같음
type TPerson = {
    identity: TPersonIdentity,
    nationality: string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

// identity에서 에러가 났을 때는 정확히 타입을 알려줌
const iu: TPerson = {
    identity: {
        name: '아이유',
        age: 31,
    },

    nationality: '한국인',
}

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

// 에러 발생 시에 위의 type에서와 같이 정확히 어떤 interface에서 에러가 났는지 알려줌
const yuJin: IPerson = {
    identity: {
        name: '안유진',
        age: 20,
    },

    nationality: '한국인'
}

interface IPersonIdentity {
    name: string;
    age: number;
}

