const calculator = {
    add : function(a, b) {	//����
        console.log(a+b);
    },
    sub : function(a, b) {	//����
        console.log(a-b);
    },
    div : function(a, b) {	//������
        console.log(a/b);
    },
    mul : function(a, b) {	//����
        console.log(a*b);
    },
    squ : function(a, b) {	//����
        console.log(a**b);
    },
}

calculator.add(1, 1);
calculator.sub(15, 5);
calculator.div(20, 5);
calculator.mul(2, 50);
calculator.squ(2, 10);