const calculator = {
    add : function(a, b) {	//µ¡¼À
        return a+b;
    },
    sub : function(a, b) {	//»¬¼À
        return a-b;
    },
    div : function(a, b) {	//³ª´°¼À
        return a/b;
    },
    mul : function(a, b) {	//°ö¼À
        return a*b;
    },
    squ : function(a, b) {	//Á¦°ö
        return a**b;
    },
}

const addResult = calculator.add(1, 1);
const subResult = calculator.sub(addResult, 0);
const divResult = calculator.div(20, subResult);
const mulResult = calculator.mul(divResult, addResult);
const squResult = calculator.squ(mulResult, subResult);