/*
* Generic in type
* */

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = 'hello';
// const genericNumber: GenericSimpleType = "hello";

interface DoneState<T> {
    date: T[];
}

interface LoadingState {
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    date: ['abc']
};

state = {
    requestedAt: new Date()
};

state = {error: 'Error'};

// default type을 지정해야 함
// let state2: State = {
//     date: [123, 456]
// }
