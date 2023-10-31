/*
* Tuple
* */

let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

// 두개의 타입만 넣겠다고 정의
let numberAndStringTuple: [number, string] = [
    23, '코드 팩토리'
]

// 에러 잡아주지 못함
numberAndStringTuple.push('아이유');

let unmodifiableTuple: readonly [number, string] = [
    23, '코드 팩토리'
]

// unmodifiableTuple.push('아이유'); push 조차 사용 불가능

/*
* Tuple inference
* */

// type: string[]
let actresses = ['김고은', '박소담', '전여빈'];

// type: readonly ['김고은', '박소담', '전여빈']
let actressesTuple = ['김고은', '박소담', '전여빈'] as const;

const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
]

/*
* Named Tuple
* */

// type: [name: string, age: number]
// 추가 정보를 입력 가능
const namedTuple: [name: string, age: number] = [
    '이현동',
    25
]

/*
* Assigning Tuple to Tuple
*
* Tuple은 같은 타입끼리만 할당 가능
* */

const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; 에러, 할당 불가능
// let tuple4: [number, number, number] = tuple2; 에러

let tuple5: [number, number] = tuple2;

/*
* Tuple과 Array의 관계
* */

let ive: [string, string] = [
    '장원영', '안유진',
]

// 할당 가능, Tuple이 더 상세하기 때문
let stringArr: string[] = ive;

// 반대는 불가능
// let ive2: [string, string] = stringArr; 에러

/*
* Multi Dimensional Tuple
* */

const tuple2D: [string, number][] = [
    ['코드팩토리', 32],
    ['아이유', 31],
    ['김고은', 30],
]
