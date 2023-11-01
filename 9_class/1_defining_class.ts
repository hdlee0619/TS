/*
* Class 선언
* */

class SampleClass {

}

// 선언할 때에는 타입 입력이 필요 + 초기화
class Game {
    name: string;
    country: string;
    download: number;

    // 초기화
    constructor(name: string, country: string, download: number) {
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce() {
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

const starcraft = new Game('Star Craft', 'USA', 1000000);

const retVal = starcraft.introduce();

// starcraft.changeGame(); 에러, 실행하기 전부터 존재하지 않는다고 알려줌, JS는 알려주지 않음
