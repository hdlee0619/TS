/*
* ParameterType<Type>
* */

function sampleFunction(x: number, y: string, z: boolean) {
    return x + y + z;
}

// parameter의 type들을 순서대로 가져옴
type Params = Parameters<typeof sampleFunction>;

// type으로 인식
type Params2 = Parameters<(one:number) => void>;
