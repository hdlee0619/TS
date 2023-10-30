/*
* Multi Dimension Array
* */

const number2DArr: number[][] = [[1, 2, 3], [1, 2, 3]]

// string[][]으로 유추
const string2DArr = [
    ['1', '2', '3'],
    ['4', '5', '6']
]

// array안의 array에 number 또는 string type이 가능
const stringAndNumArr: (number | string)[][] = [
    [1, '2', 3],
    ['4', 5, '6']
]

// array안의 array에 string type만 있거나 number type만 있어야함
let strArrOrNumArr: string[][] | number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]
strArrOrNumArr = [
    ['1', '2', '3'],
    ['4', '5', '6']
]

strArrOrNumArr = [
    ['1', '2', '3']
]

for (let arr of number2DArr) {
    // number[] type으로 유추
    arr;
    for (let item of arr) {
        // number type으로 유추
        item;
    }
}
