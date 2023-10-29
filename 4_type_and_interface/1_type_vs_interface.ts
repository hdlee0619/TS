/*
* Type vs Interface
*
* */

// Object 선언
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function 선언
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/*
* Type에서는 할 수 있지만
* interface에서는 할 수 없는 것
* */

// 1. primitive type 선언
type Name = string;

// 2. union type 선언
type UnionType = string | number;

// 3. primitive list 또는 tuple type 선언
type TupleType = [number, string];

/*
* Interface는 할 수 있고
* Type은 할 수 없는 것
* */

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

// 같은 이름으로 선언한 interface들이 합쳐짐
// 중복 선언이 가능함
let rectangle: IRectangle = {
    height: 100,
    width: 100,
}

// 정의 자체를 할 수 없음
// 중복 선언 불가능
// type TRectangle = {
//     height: number;
// }
// type TRectangle = {
//     width: number;
// }

/*
* Interface Merging
* */

class Review {
    // property -> instance에 귀속
    getY = (x: number) => {return x};

    // method -> prototype에 귀속
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    // property도 함수 형태로 정의 가능
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: string) => number;
}

interface GetXnY2 {
    // method로 선언
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    // method로 선언
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x) {
        return x
    },
    getY(y) {
        return 1;
    }
}
