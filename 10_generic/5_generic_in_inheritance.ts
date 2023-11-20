/*
* Generic in inheritance
* */

class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> {

}

const stringCache = new StringCache();

// string[]
stringCache.data;

// 자식 클래스에서 Generic을 다시 받아서 부모 클래스 Generic에 다시 넘겨줄 수 있음
class GenericCache<T, Message> extends BaseCache<T> {
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericCache<string, string>('message');
// string[]
genericChild.data;
// string | undefined
genericChild.message

/*
* 제너릭의 inheritance
* */

interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

// name 프로퍼티는 반드시 필요, 없으면 에러 발생
// 구조를 정확하게 강제할 수 있음
const Karina = new Idol({
    name: '카리나',
    age: 24,
})

/*
* keyof 함께 사용하기
* */

const testObj = {
    a: 1,
    b: 2,
    c: 3
}

// K는 무조건 a, b, c 중 하나
function ObjectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

// result = 1
const result = ObjectParser(testObj, "a");

/*
* Ternary
* 1 === 2 ? true : false
* */

class Idol2 {
    type?: string;
}

class FemaleIdol extends Idol2 {
    type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
    type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

// FemaleIdol
const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
// MaleIdol
const idol3: SpecificIdol<MaleIdol> = new MaleIdol();
