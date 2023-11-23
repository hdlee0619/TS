/*
* Accessor Decorator
* */

class Rectangle {
    // private 값이 됨
    #width: number;
    #height: number;

    constructor(width: number, height: number) {
        this.#width = width;
        this.#height = height;
    }

    @Configurable(false)
    get height() {
        return this.#height;
    }

    @Configurable(false)
    get width() {
        return this.#width;
    }
}

function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

const rectangle = new Rectangle(10, 20);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
