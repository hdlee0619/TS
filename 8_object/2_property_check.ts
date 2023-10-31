/*
* Property Check
*
* 초과 속성 검사
* */

type TName = {
    name: string;
}

type TAge = {
    age: number;
}

// 처음 초기화때는 초과 속성을 허용하지 않음
const iu = {
    name: '아이유',
    age: 30,
}

// 초과 속성 허용
// 에러가 나지 않음
const testName: TName = iu;
const testAge: TAge = iu;
