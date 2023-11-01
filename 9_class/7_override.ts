/*
* Override
* */

class Parent {
    shout(name: string) {
        return `${name}야 안녕!`;
    }
}

class WrongChild extends Parent {
    // 3가지를 지키면 override 가능

    // 1. 부모 메서드와 반환타입이 일치해야한다.
    // 2. 부모 메서드에 필수인 파라미터들이 존재해야한다.
    // 3. 부모 메서드에서 Optional인 파라미터들이 자식에서 필수로 지정되면 안된다.

    // shout(name: string) {} 에러
}

class Child extends Parent {
    // 명칭은 달라도 상관없지만 첫번째 값은 무조건 string이어야 함
    shout(name: string, me? :string): string {
        if (!me) {
            // 부모 클래스의 shout를 그대로 사용
            return super.shout(name);
        } else {
            return super.shout(name) + ` 내 이름은 ${me}이야!`;
        }
    }
}

const child = new Child();

console.log(child.shout('카리나'));
// 카리나야 안녕! 출력
console.log(child.shout('카리나', '이현동'))
// 카리나야 안녕! 내 이름은 이현동이야!

/*
* 속성 override
* */

class PropertyParent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 불가능
// class PropertyChild extends PropertyParent {
//     name: number;
//
//     constructor(name: number) {
//         this.name = name
//     }
// }

class PropertyParent2 {
    name?: string | number;

    constructor(name: string | number) {
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2 {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('hello')
