/*
* Generic in Interface
* */

interface Cache<T> {
    data: T[];
    lastUpdated: Date;
}

const cache1: Cache<string> = {
    data: ['abc'],
    lastUpdated: new Date()
}

// type 유추 불가능, 오류 발생
// const cache2: Cache = {
//     data: [123],
//     lastUpdated: new Date();
// }

interface DefaultGeneric<T = string> {
    data: T[];
}

// default type이 string이므로 사용가능
const cache3: DefaultGeneric = {
    data: ['abc']
};
