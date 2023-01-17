//나이 계산기
//이 계산기는 음주가 가능한 나이인지 아닌지를 알려줌

const age = parseInt( prompt("How are you?") );

if (isNaN(age) || age < 0 ) {   //age가 숫자가 아니거나 음수일 때 문장 실행
    console.log("Please write a real positive number");
} else if( age < 18 ) {         //age가 18미만일 때
    console.log("You are too young.");
} else if( age >= 18 && age <= 50 ) {   //age가 18이상이고 50이하일 때
    console.log("You can drink");
} else if( age > 50 && age <= 80 ) {    //age가 50 초과이고 80이하일 때
    console.log("You should excercise");
} else if(age === 100) {                //age가 100일 때
    console.log("WOW you are wise");
} else if(age > 80) {                   //age가 80 초과일 때
    console.log("You can do whatever you want.");
} 