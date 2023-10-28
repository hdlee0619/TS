/*
* Enum
* */

/*
* API 요청을 한다.
* 상태는 4가지 상태
*
* DONE - 요청 완료 상태
* ERROR - 에러 발생
* LOADING - 로딩 상태
* INITIAL - 초기 상태
*
* */

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // ...
        state = 'DONE';
    } catch (e) {
        state = 'ERROR'
    } finally {
        return state;
    }
}

console.log(runWork() === 'DONE') //  'DONE' 부분이 틀리면 에러 발생할 수 있음

// 보통 JS 에서는 변수를 선언해서 휴먼에러 방지

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let state = initialState;

    try {
        state = loadingState;
        // ...
        state = doneState;
    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork() === doneState) // 변수값을 통해서 비교 가능

enum State {
    DONE, // Enum을 선언하면 0부터 부여가 됨, 지정도 가능
    LOADING,
    INITIAL,
    ERROR = 'ERROR',
}

function runWork3() {
    let state = State.INITIAL;

    try {
        state = State.LOADING;
        // ...
        state = State.DONE;
    } catch (e) {
        state = State.ERROR;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.DONE);
