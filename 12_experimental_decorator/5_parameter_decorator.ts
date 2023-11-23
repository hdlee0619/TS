/*
* Parameter Decorator
* */

class Cat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(@LogParam adj: string) {
        console.log(`${this.name} is dancing ${adj}`);
    }
}

const cat = new Cat('kitty');

cat.dance('cute');

function LogParam(target: any, propertyKey: string, paramIndex: number) {
    console.log(`${paramIndex} 번째 파라미터인 ${propertyKey}가 정의됐습니다.`);
}
