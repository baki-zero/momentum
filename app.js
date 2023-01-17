const calculator = {
    add : function(a, b) {	//µ¡¼À
        console.log(a+b);
    },
    sub : function(a, b) {	//»¬¼À
        console.log(a-b);
    },
    div : function(a, b) {	//³ª´°¼À
        console.log(a/b);
    },
    mul : function(a, b) {	//°ö¼À
        console.log(a*b);
    },
    squ : function(a, b) {	//Á¦°ö
        console.log(a**b);
    },
}

calculator.add(1, 1);
calculator.sub(15, 5);
calculator.div(20, 5);
calculator.mul(2, 50);
calculator.squ(2, 10);