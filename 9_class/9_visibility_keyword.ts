/*
* Visibility Keyword
*
* 1. public (기본값) - 어디서든 접근 가능
* 2. protected - 현재 클래스 및 하위 클래스 (자식)에서 접근 가능
* 3. private - 현재 클래스 내부에서만 접근 가능
* */

class PropertyTestParent {
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsPrivateProperty = 'js private property';

    test() {
        // 모두 접근 가능
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty;
    }
}

class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // 접근 불가능
        // this.privateProperty;
        // this.#jsPrivateProperty;
    }
}

const instance = new PropertyTestChild();

// 아래 2가지만 사용가능
instance.publicProperty;
instance.test();
