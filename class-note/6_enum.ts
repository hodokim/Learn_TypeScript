enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes);



enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if(answer === Answer.Yes){

    }
    if (answer === Answer.No){

    }
}

// 불가 
//askQuestion('Yes');

askQuestion(Answer.Yes);