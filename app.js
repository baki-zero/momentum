//���� ����
//�� ����� ���ְ� ������ �������� �ƴ����� �˷���

const age = parseInt( prompt("How are you?") );

if (isNaN(age) || age < 0 ) {   //age�� ���ڰ� �ƴϰų� ������ �� ���� ����
    console.log("Please write a real positive number");
} else if( age < 18 ) {         //age�� 18�̸��� ��
    console.log("You are too young.");
} else if( age >= 18 && age <= 50 ) {   //age�� 18�̻��̰� 50������ ��
    console.log("You can drink");
} else if( age > 50 && age <= 80 ) {    //age�� 50 �ʰ��̰� 80������ ��
    console.log("You should excercise");
} else if(age === 100) {                //age�� 100�� ��
    console.log("WOW you are wise");
} else if(age > 80) {                   //age�� 80 �ʰ��� ��
    console.log("You can do whatever you want.");
} 