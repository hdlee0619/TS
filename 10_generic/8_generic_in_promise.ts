/*
* Generic in Promise
* */

const afterTwoSeconds = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
};

const runner = async function() {
    // unknown
    const result = await afterTwoSeconds();
    console.log(result);
}

runner();

// resolve할 type을 generic에 정의
// type 완성도 높게 유추 가능
const afterOneSeconds = function(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000);
    });
}

const runner2 = async function() {
    // string
    const result = await afterOneSeconds();
    console.log(result);
}

// done
runner2();

// async를 붙이면 자동으로 Promise를 반환
const runner3 = async function() {
    return "string return";
}
