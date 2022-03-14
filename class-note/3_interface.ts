interface Person {
    age: number;
    name: string;
    address: string;
}

//변수에 인터페이스 활용
var baha: Person = {
    age: 33,
    name: '바하',
    address: '인천',
}

// 함수에 인터페이스 활용
function getUser(user: Person) {
    console.log(user.toString());
}

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a:number, b:number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a','b','c'];


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

interface Person2 {
    name: string;
    age: number;
}

interface Developer extends Person2 {
    language: string;
}

var bach: Developer ={
    language: 'ts',
    name: 'kim',
    age: 33
}
