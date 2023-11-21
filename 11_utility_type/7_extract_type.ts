/*
* Extract<Type>
* */

// Exclude와 반대로 동작함

// string만 추출
type stringOnly = Extract<string | boolean | number, string>;

// Function만 추출
type FunctionOnly = Extract<string | (() => void), Function>;
