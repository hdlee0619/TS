/*
* Exclude<Type, ExcludedUnion>
* */

// Exclude는 일반적인 uinion type을 넣어줌

// string 제외
type NoString = Exclude<string | boolean | number, string>;

// Function 제외
type NoFunction = Exclude<string | (() => void), Function>;
