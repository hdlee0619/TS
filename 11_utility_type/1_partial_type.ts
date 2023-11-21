/*
* Partial<Type>
* */

interface Idol {
    name: string;
    age: number;
    groupName: string;
}

const karina: Idol = {
    name: '카리나',
    age: 24,
    groupName: 'aespa',
}

// Idol interface에 부분적으로 사용할 수 있도록 Partial을 사용한다.
function updateIdol(original: Idol, update: Partial<Idol>): Idol {
    return { ...original, ...update };
}

// name을 '카리나'에서 '지젤'로 업데이트
// 존재하는 프로퍼티만 사용 가능
console.log(updateIdol(karina, { name: '지젤' }));
