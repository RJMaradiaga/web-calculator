var input1 = ""; 
var input2 = ""; 
var operator; 
var cycle = 0; 
var elem = document.getElementById('userInput');
var result; 

function changeInputBox(clicked_number) {

    if (cycle == 0) {
        input1 += clicked_number;
        elem.value = input1; 
    }
    else if (cycle >= 1) {
        input2 += clicked_number;
        elem.value = input2; 
    }
    console.log("number changed"); 
}

function changeOperator(clicked_operator) {
    operator = clicked_operator; 
    cycle++;
}

function calculate() {
    var first = parseInt(input1);
    var second = parseInt(input2);
    if (operator == "*") {
        result = first*second;
    }

    if (operator == "/") {
        result =  first/second;
    }

    if (operator == "+") {
        result = first+second;
    }

    if (operator == "-") {
        result =  first-second;
    }
    elem.value = result; 
    
    halfClear(); 
}

function halfClear() {
    input1 = result;
    input2 = ""; 
}

function fullClear() 
{
    input1 = ""; 
    input2 = ""; 
    cycle = 0; 
    elem.value = "CLEARED"; 
    console.log("CLEARED");
}

