/*
* Overloading
* */

/*
* 파라미터를
* 1. 하나를 받거나
* 2. 세개를 받는 함수
* */

// 오버로딩으로 정의해둠
// 이와 다른 형태로 사용하려고 하면 에러를 뱉게 됨
function stringOrString(memberOrMembers: string): string;
function stringOrString(memberOrMembers: string, member2: string, member3: string): string;

/*
* 만약에 하나의 파라미터만 입력 받는다면
* 아이돌 멤버들을 하나의 스트링으로 입력 받는다.
* 예) '카리나, 윈터, 닝닝, 지젤'
*
* 만약에 세개의 파라미터를 받는다면
* 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
* 예) '카리나', '윈터', '닝닝', '지젤'
* */

function stringOrString(memberOrMembers: string, member2?: string, member3?: string) {
    if (member2 && member3) {
        return `에스파 ${memberOrMembers}, ${member2}, ${member3}`;
    } else {
        return `에스파 : ${memberOrMembers}`;
    }
}

console.log(stringOrString('카리나, 윈터, 닝닝'))
console.log(stringOrString('카리나', '윈터', '닝닝'))
// console.log(stringOrString('카리나', '윈터')) 에러 발생되게 됨.
// 위의 오버로딩으로 가능한 함수이 형태가 정의되어 있지 않기 때문

/*
* JS로 컴파일 될 때에는 오버로딩 코드는 TS 코드이기 때문에 사라지게 됨
* 오버로딩은 지양하는 것이 좋고 함수를 따로 정의하는게 유지보수에 좋을 수 있음
* */
