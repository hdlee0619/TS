/*
* Key Value Mapping
* */

enum State {
    loading,
    done,
    error,
}

// 예시로 글로벌하게 4개의 API 요청에 대한 상태를 관리한다고 가정
type GlobalApiStatus = {
    getUser: State;
    paginateUser: State | undefined;
    banUser: State | null;
    getPosts: State;
}

// 위와 곂치는게 많아 DRY 원칙 어김
type UserApiStatus = {
    getUser: State;
    paginateUser: State | undefined;
    banUser: State | null;
}

// 위 선언과 값이 같음
type UserApiStatus2 = {
    getUser: GlobalApiStatus["getUser"];
    paginateUser: GlobalApiStatus["getUser"];
    banUser: GlobalApiStatus["getUser"];
}

// 위 선언과 값이 같음
type UserApiStatus3 = {
    // key 값을 하나씩 입력받아서 mapping
    [key in 'getUser' | 'paginateUser' | 'banUser']: GlobalApiStatus[key];
}

// Pick<가져올 값이 있는 type, 어떤 값을 가져올지>
// 위 선언과 값이 같음
type PickUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUser'>;

// Omit<>
// 위 선언과 값이 같음
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/*
* keyof
*
* 해당 타입의 key 값을 가져옴
* */

type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser';

// 모든 키들이 다 들어옴
type KeyOfUserApiStatus = {
    [key in keyof GlobalApiStatus]: GlobalApiStatus[key]
}

// getPost 제외된 값으로 구성
type KeyOfUserApiStatus2 = {
    [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[key]
}

// 전부 optional로도 가능
type KeyOfUserApiStatus3 = {
    [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[key]
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

// StatusType은 'loading' | 'error'
type StatusType = FetchStatus['type'];
