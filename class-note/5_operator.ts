
var odin: string | number | boolean;

function logMessage(value: string | number){
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    throw new TypeError('value must be string or number');
}


logMessage('hihi');
logMessage(1000);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

//Union Type (실무에서는 Union Type이 더 자주 쓰인다...)
function askSomeone(somenone: Developer | Person){
    somenone.name;
}
askSomeone({ name: 'Kim', skill: 'Boxing' });


//InterSection Type
function askSomeone1(somenone: Developer & Person) {
    somenone.name;
    somenone.age;
    somenone.skill;
}
askSomeone1({ name: 'Kim', skill: 'Boxing', age: 33 });


let hyesu: string | number | boolean;
let baha: string & number & boolean;

