/*
* ConstructorParameters<Type>
* */

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// constructor의 parameter type을 추출
type ConstructorParametersType = ConstructorParameters<typeof Idol>;
