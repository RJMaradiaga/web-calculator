var input = ""; 

function changeInputBox(clicked_number) {
    var elem = document.getElementById('userInput');
    input += clicked_number;
    elem.value = input;
    console.log("number changed");
}

