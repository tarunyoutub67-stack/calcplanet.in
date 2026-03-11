// EMI Calculator
function calculateEMI(){

let loan=parseFloat(document.getElementById("loan").value);
let rate=parseFloat(document.getElementById("rate").value)/12/100;
let months=parseFloat(document.getElementById("months").value);

let emi=(loan*rate*Math.pow(1+rate,months))/
(Math.pow(1+rate,months)-1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹ "+emi.toFixed(2);

}



// SIP Calculator
function calculateSIP(){

let amount=parseFloat(document.getElementById("sipAmount").value);
let rate=parseFloat(document.getElementById("sipRate").value)/100/12;
let months=parseFloat(document.getElementById("sipYears").value)*12;

let futureValue =
amount*((Math.pow(1+rate,months)-1)/rate)*(1+rate);

document.getElementById("sipResult").innerHTML =
"Future Value: ₹ "+futureValue.toFixed(2);

}



// FD Calculator
function calculateFD(){

let amount=parseFloat(document.getElementById("fdAmount").value);
let rate=parseFloat(document.getElementById("fdRate").value)/100;
let years=parseFloat(document.getElementById("fdYears").value);

let maturity = amount*Math.pow((1+rate),years);

document.getElementById("fdResult").innerHTML =
"Maturity Amount: ₹ "+maturity.toFixed(2);

}



// CAGR Calculator
function calculateCAGR(){

let initial=parseFloat(document.getElementById("initial").value);
let final=parseFloat(document.getElementById("final").value);
let years=parseFloat(document.getElementById("years").value);

let cagr=(Math.pow(final/initial,1/years)-1)*100;

document.getElementById("cagrResult").innerHTML =
"CAGR: "+cagr.toFixed(2)+"%";

}



// Loan EMI Calculator
function calculateLoan(){

let principal=parseFloat(document.getElementById("principal").value);
let rate=parseFloat(document.getElementById("loanRate").value)/12/100;
let months=parseFloat(document.getElementById("loanYears").value)*12;

let emi=(principal*rate*Math.pow(1+rate,months))/
(Math.pow(1+rate,months)-1);

let totalPayment=emi*months;
let interest=totalPayment-principal;

document.getElementById("loanResult").innerHTML =
"Monthly EMI: ₹ "+emi.toFixed(2)+
"<br>Total Interest: ₹ "+interest.toFixed(2)+
"<br>Total Payment: ₹ "+totalPayment.toFixed(2);

}



// Compound Interest
function calculateCompound(){

let principal=parseFloat(document.getElementById("cpPrincipal").value);
let rate=parseFloat(document.getElementById("cpRate").value)/100;
let time=parseFloat(document.getElementById("cpTime").value);

let amount = principal*Math.pow((1+rate),time);

let interest = amount - principal;

document.getElementById("compoundResult").innerHTML =
"Interest: ₹ "+interest.toFixed(2)+
"<br>Total Amount: ₹ "+amount.toFixed(2);

}
