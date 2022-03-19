




function logText<T>(text: T):T {
    console.log(text);
    return text;
}

const str = logText<string>('HELLO WORLD');
str.split('');

const flag = logText<boolean>(true);


function logThings (text: string | number) {
    console.log(text);
    return text;
}

const unionStr = logThings('a');
//왜 제네릭인가..???? 아래의 사례를 보자

// 아래의 split api 는 오류가 발생한다.
//a.split('');


