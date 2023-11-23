/*
* Method Decorator
* */

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('dev')
    dance() {
        console.log(`${this.name} is dancing`);
    }
}
// target - static method에 데코레이팅을 할 경우 생성자 함수
//        = instance method에 데코레이팅을 할 경우 인스턴스의 prototype
// propertyKey - 데코레이팅을 할 메소드의 이름
// descriptor - property descriptor

function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("LogCall");
    console.log('---target---');
    console.log(target);
    console.log('---propertyKey---');
    console.log(propertyKey);
    console.log('---descriptor---');
    console.log(descriptor);
}

// method를 사용하지 않아도 위의 log가 전부 실행
const karina = new Idol('karina', 20);
karina.dance();

function Configurable(configurable: boolean) {
    // factory 함수를 데코레이팅
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('---descriptor---');
        console.log(descriptor);
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`${env} running function : = ${propertyKey}`);

            return originalMethod.apply(this, ...args);
        }
    }
}

// method call logger 한번 더 실행
karina.dance();
