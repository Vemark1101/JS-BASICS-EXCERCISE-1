const inpNum1 = document.getElementById("num1");
const inpNum2 = document.getElementById("num2");
const txtSum = document.getElementById("sum");
const txtDif = document.getElementById("dif");
const txtPro = document.getElementById("pro");
const txtQuo = document.getElementById("quo");

let sum = 0;
let dif = 0;
let pro = 0;
let quo = 0;

function calculate(){

    if(!(inpNum1.value === "" || inpNum2.value === "")){

    sum = parseInt(inpNum1.value) + parseInt(inpNum2.value);
    dif = parseInt(inpNum1.value) - parseInt(inpNum2.value);
    pro = parseInt(inpNum1.value) * parseInt(inpNum2.value);
    quo = parseInt(inpNum1.value) / parseInt(inpNum2.value);

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