class Person {
    //클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

new Person(); // 생성 되었습니다.

let baha = new Person('바하', 33);
console.log(baha);

let hyesu = new Person('혜수', 31);
console.log(hyesu);