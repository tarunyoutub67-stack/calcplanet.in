
// EMI
function calculateEMI(){

let loan=document.getElementById("loan").value;
let rate=document.getElementById("rate").value/1200;
let months=document.getElementById("months").value;

let emi=(loan*rate*Math.pow(1+rate,months))/
(Math.pow(1+rate,months)-1);

document.getElementById("emiResult").innerHTML=
"Monthly EMI: "+emi.toFixed(2);

}


// SIP
function calculateSIP(){

let amount=document.getElementById("sipAmount").value;
let rate=document.getElementById("sipRate").value/100/12;
let years=document.getElementById("sipYears").value*12;

let futureValue=
amount*((Math.pow(1+rate,years)-1)/rate)*(1+rate);

document.getElementById("sipResult").innerHTML=
"Future Value: "+futureValue.toFixed(2);

}


// FD
function calculateFD(){

let amount=document.getElementById("fdAmount").value;
let rate=document.getElementById("fdRate").value/100;
let years=document.getElementById("fdYears").value;

let maturity=amount*Math.pow((1+rate),years);

document.getElementById("fdResult").innerHTML=
"Maturity Amount: "+maturity.toFixed(2);

}


// CAGR
function calculateCAGR(){

let initial=document.getElementById("initial").value;
let final=document.getElementById("final").value;
let years=document.getElementById("years").value;

let cagr=(Math.pow(final/initial,1/years)-1)*100;

document.getElementById("cagrResult").innerHTML=
"CAGR: "+cagr.toFixed(2)+"%";

}


// Loan
function calculateLoan(){

let principal=document.getElementById("principal").value;
let rate=document.getElementById("loanRate").value/100;
let time=document.getElementById("loanYears").value;

let interest=principal*rate*time;

document.getElementById("loanResult").innerHTML=
"Interest: "+interest.toFixed(2);

}


// Compound Interest
function calculateCompound(){

let principal=document.getElementById("cpPrincipal").value;
let rate=document.getElementById("cpRate").value/100;
let time=document.getElementById("cpTime").value;

let amount=principal*Math.pow((1+rate),time);

document.getElementById("compoundResult").innerHTML=
"Final Amount: "+amount.toFixed(2);

}