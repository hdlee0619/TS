/*
* Object Union
* */

/*
* 유추된 객체 타입 유니언
* */

// 강아지는 breed?: undefined로 타입 유추
// 고양이는 age?: undefined로 타입 유추
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    };

// undefined로 값을 유추하여 가져올 수 있음
dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    };

// 직접적으로 타입을 명시하면 값을 가져올 수 없음
dogOrCat2.name;
// dogOrCat2.age; 에러 발생

// narrowing을 통해 확인을 해야함

if ('age' in dogOrCat2) {
    // Dog type
    dogOrCat2;
} else {
    // Cat type
    dogOrCat2;
}
