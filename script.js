const numberValue = document.getElementById("number");
const conventerBtn = document.getElementById("convert-btn");
const resultCon = document.getElementById("result-container");
const numberOutput = document.getElementById("output");
let isHide = true;

const roman =
    {
        1000 : "M",
        900 : "CM",
        500 : "D",
        400: "CD",
        100 : "C",
        90 : "XC",
        50 : "L",
        40 : "XL",
        10 : "X",
        9 : "IX",
        5 : "V",
        4 : "IV",
        1 : "I"
    }

conventerBtn.addEventListener("click", () => {
    numberOutput.innerText = coventer(getValue());
    if(isHide){
        isHide = false;
        resultCon.classList.remove("hide");
    }
});

function coventer(val){
    if(typeof val === "string"){
        return val
    }
    let result = "";
    for (const value of Object.keys(roman).reverse().map(Number)){
        while (val >= value){
            result += roman[value];
            val -= value;
        }
    }
    return result;
}

const getValue = () => {
    if (!numberValue.value){
        resultCon.classList.add("warning");
        return "Please enter a valid number";
    }else if(numberValue.value < 1){
        resultCon.classList.add("warning");
        return "Please enter a number greater than or equal to 1";
    }else if(numberValue.value >= 4000){
        resultCon.classList.add("warning");
        return "Please enter a number less than or equal to 3999";
    }else{
        resultCon.classList.remove("warning");
        return Number(numberValue.value);
    }
};