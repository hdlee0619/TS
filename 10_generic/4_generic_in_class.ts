/*
* Class 에서 Generic 사용하기
* */

class Pagination<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();

// number[]
pgData.data;
// string | undefined
pgData.message;
// Date | undefined
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pagination2 = new Pagination2([123, 456]);

// number[]
pagination2.data;
// unknown
pagination2.message;
// Date | undefined
pagination2.lastFetchedAt;

class DefaultGeneric<T = boolean> {
    data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
// boolean[]
defaultGeneric.data;
