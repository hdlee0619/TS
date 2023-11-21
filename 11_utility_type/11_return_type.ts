/*
* ReturnType<Type>
* */

// return type을 알고 싶은 함수를 넣어주면 됨
type ReternTypeSample = ReturnType<() => string>;

type FunctionSignatureType = (x: number, y: number) => number;

// number
type ReturnTypeSample2 = ReturnType<FunctionSignatureType>;
