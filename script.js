const inpNum1 = document.querySelector("#num1");
const inpNum2 = document.querySelector("#num2");
const txtSum = document.querySelector("#sum");
const txtDif = document.querySelector("#dif");
const txtPro = document.querySelector("#pro");
const txtQuo = document.querySelector("#quo");

let sum = 0;
let dif = 0;
let pro = 0;
let quo = 0;

function calculate(){
    
    if(!(inpNum1.value === "" || inpNum2.value === "")){

    sum = parseFloat(inpNum1.value) + parseFloat(inpNum2.value);
    dif = parseFloat(inpNum1.value) - parseFloat(inpNum2.value);
    pro = parseFloat(inpNum1.value) * parseFloat(inpNum2.value);
    quo = parseFloat(inpNum1.value) / parseFloat(inpNum2.value);

    txtSum.innerHTML = sum;
    txtDif.innerHTML = dif;
    txtPro.innerHTML = pro;
    txtQuo.innerHTML = quo;
    }
}

function clearEntries(){

    inpNum1.value = "";
    inpNum2.value = "";
    txtSum.innerHTML = "";
    txtDif.innerHTML = "";
    txtPro.innerHTML = "";
    txtQuo.innerHTML = "";
    sum = 0;
    dif = 0;
    pro = 0;
    quo = 0;
}