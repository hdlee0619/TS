/*
* Spread Operator
* */

const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

// string[]로 유추
const arr1 = [
    ...onlyString,
]

// (string | number)[]로 유추
const arr2 = [
    ...onlyString,
    ...onlyNumbers,
]
