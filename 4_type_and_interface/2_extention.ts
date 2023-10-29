/*
* Extension
* */

interface IName {
    name: string;
}

interface  IIdol extends IName {
    age: number;
}


// interface merging과 비슷하지만 이름을 다르게 할 수 있음
const idle: IIdol = {
    name: '민지',
    age: 2001,
}

// type
type TName = {
    name: string;
}

type TIdol = TName &  {
    age: number;
}

const idol2: TIdol = {
    name: '카리나',
    age: 2000,
}

// interface 도 상속 가능
type TIdol2 = IName & {
    age: number;
}

const idol3 = {
    name: '지수',
    age: 1994
}

/*
* extending multiple
* */

type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

interface CatName {
    name: string;
}

interface CatAge {
    age: number;
}


interface Cat extends CatName, CatAge {
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: 'korean cat',
}

/*
* Overriding
* */

type THeight = {
    height: number;
}

type TRectangle = THeight & {
    // height를 string으로 재입력
    height: string;
    width: number;
}

// const rectangle: TRectangle = {
//     // primitive type이 intersection이 되면 never type이 됨
//     height: 100,
//     width: 100
// }

type TWidth = {
    width: number | string;
}

type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

// 선언은 가능
const rectangle: TRectangle2 = {
    height: 100,
    // number로 narrowing으로 돼서 string 불가능
    width: 200,
}

interface IHeight {
    height: number;
}

interface IRectangle extends IHeight {
    // string으로 입력 시 interface는 바로 에러 발생
    // height: string;
    width: number;
}

interface IWidth {
    width: number | string;
}

interface IRectangle extends IWidth {
    width: number;
    height: number;
}
