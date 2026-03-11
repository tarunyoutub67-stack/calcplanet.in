function calculateEMI(){

let loan = parseFloat(document.getElementById("loan").value);
let rate = parseFloat(document.getElementById("rate").value)/12/100;
let months = parseFloat(document.getElementById("months").value);

let emi = (loan*rate*Math.pow(1+rate,months))/(Math.pow(1+rate,months)-1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹ "+emi.toFixed(2);

}

function calculateSIP(){

let monthly = parseFloat(document.getElementById("sip").value);
let rate = parseFloat(document.getElementById("rate").value)/12/100;
let months = parseFloat(document.getElementById("months").value);

let future = monthly*((Math.pow(1+rate,months)-1)/rate)*(1+rate);

document.getElementById("sipResult").innerHTML =
"Future Value: ₹ "+future.toFixed(2);

}

function calculateFD(){

let amount = parseFloat(document.getElementById("amount").value);
let rate = parseFloat(document.getElementById("rate").value)/100;
let years = parseFloat(document.getElementById("years").value);

let maturity = amount*Math.pow((1+rate),years);

document.getElementById("fdResult").innerHTML =
"Maturity Amount: ₹ "+maturity.toFixed(2);

}

function calculateLoan(){

let principal = parseFloat(document.getElementById("amount").value);
let rate = parseFloat(document.getElementById("rate").value)/100;
let years = parseFloat(document.getElementById("years").value);

let interest = principal*rate*years;

document.getElementById("loanResult").innerHTML =
"Total Interest: ₹ "+interest.toFixed(2);

}

function calculateCAGR(){

let start = parseFloat(document.getElementById("start").value);
let end = parseFloat(document.getElementById("end").value);
let years = parseFloat(document.getElementById("years").value);

let cagr = (Math.pow(end/start,1/years)-1)*100;

document.getElementById("cagrResult").innerHTML =
"CAGR: "+cagr.toFixed(2)+"%";

}

function calculateCompound(){

let amount = parseFloat(document.getElementById("amount").value);
let rate = parseFloat(document.getElementById("rate").value)/100;
let years = parseFloat(document.getElementById("years").value);

let total = amount*Math.pow((1+rate),years);

document.getElementById("compoundResult").innerHTML =
"Total Amount: ₹ "+total.toFixed(2);

}
