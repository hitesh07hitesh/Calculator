const result = document.getElementById('result')


function liveScreen(enteredvalue) {
    if (!result.value) {
        result.value = ""
    }
    result.value += enteredvalue
}
function backSpace() {
    const resultInput = result.value;
    //remove the last element in the string
    result.value = resultInput.substring(0, result.value.length - 1);
}

function calculater(value){
    const result01 = eval(value)
    // console.log(result01)
    result.value = result01
}

document.addEventListener("keydown",keyBord)

function keyBord(e){

    e.preventDefault();

    if(e.key === "0"){
        result.value += "0"
    }
    else if(e.key === "1"){
        result.value += "1"
    }
    else if(e.key === "2"){
        result.value += "2"
    }
    else if(e.key === "3"){
        result.value += "3"
    }
    else if(e.key === "4"){
        result.value += "4"
    }
    else if(e.key === "5"){
        result.value += "5"
    }
    else if(e.key === "6"){
        result.value += "6"
    }
    else if(e.key === "7"){
        result.value += "7"
    }
    else if(e.key === "8"){
        result.value += "8"
    }
    else if(e.key === "9"){
        result.value += "9"
    }
    else if(e.key === "9"){
        result.value += "9"
    }
    else if(e.key === "0"){
        result.value += "0"
    }

    else if(e.key === "+"){
        result.value += "+"
    }
    else if(e.key === "-"){
        result.value += "-"
    }
    else if(e.key === "*"){
        result.value += "*"
    }
    else if(e.key === "/"){
        result.value += "/"
    }
    else if(e.key === "."){
        result.value += "."
    }
    else if(e.key === "Backspace"){
        backSpace()
    }
    else if(e.key === "Enter"){
        calculater(result.value)
    }
    else if(e.key === "c"){
        result.value =''
    }

    else{
        console.log("o shit")
    }
}