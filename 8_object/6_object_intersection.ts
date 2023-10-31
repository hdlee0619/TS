/*
* Object Intersection
* */

// never type
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxyyyzzz',
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // Person type
    // 필수로 있어야 함
    name: '코드팩토리',
    age: 32,

    // Company type
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxxyyyyzzzz',

    // Pet type
    petName: '오리',
    petAge: 8,
}
