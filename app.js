const calculator = {
    add : function(a, b) {	//����
        return a+b;
    },
    sub : function(a, b) {	//����
        return a-b;
    },
    div : function(a, b) {	//������
        return a/b;
    },
    mul : function(a, b) {	//����
        return a*b;
    },
    squ : function(a, b) {	//����
        return a**b;
    },
}

const addResult = calculator.add(1, 1);
const subResult = calculator.sub(addResult, 0);
const divResult = calculator.div(20, subResult);
const mulResult = calculator.mul(divResult, addResult);
const squResult = calculator.squ(mulResult, subResult);