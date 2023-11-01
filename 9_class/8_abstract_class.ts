/*
* Abstract class
*
* 추상 클라스
* 인스턴스화 하지 못하도록
* */

// 이 자체로는 인스턴스화 할 일이 절대로 없는데
// 공유되는 값들을 프로퍼티나 메소드들을 정의하고 싶을 때
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// 직접적으로 선언이 불가능
// const modelWithId = new ModelWithId(123);

// extension을 할 때 사용

class Product extends ModelWithId {
}

const product = new Product(1);

product.id;

abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
}

// shout라는 method를 구체화 해줘야함
// method를 abstract 하면 구현을 강제할 수 있음
class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        return "소리질러";
    }
}
