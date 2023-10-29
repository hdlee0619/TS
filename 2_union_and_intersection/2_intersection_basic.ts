/*
* Intersection
*
* And
* */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

// object type
// type이 합쳐짐, 두 타입이 합쳐진 새로운 타입
type HumanAndContacts = Human & Contacts;

let HumanAndContacts: HumanAndContacts = {
    name: '이현동',
    age: 25,
    phone: '010-1212-1212',
    address: '송파구'
}

// primitive intersection
// never type으로 변경, 절대로 존재할 수 없는 type
type NumberAndString = number & string;
