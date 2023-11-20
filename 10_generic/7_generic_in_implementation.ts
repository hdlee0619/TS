/*
* Generic in implementation
* */

interface Singer<T, V> {
    name: T;
    sing(year: V): void;
}

class Idol implements Singer<string, number> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(year: number): void {
        console.log(`${this.name}는 ${year}년에 데뷔했습니다.`);
    }
}

const karina = new Idol('카리나');

// 카리나는 2021년에 데뷔했습니다.
karina.sing(2021);

class Idol2<T, V> implements Singer<T, V> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }

    sing(year: V): void {
        console.log(`${this.name}는 ${year}년에 데뷔했습니다.`);
    }
}

const wonYoung = new Idol2<string, number>('장원영');
// 장원영은 2018년에 데뷔했습니다.
wonYoung.sing(2018);
