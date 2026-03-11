function calculateEMI(){

let loan=document.getElementById("loan").value;
let rate=document.getElementById("rate").value;
let months=document.getElementById("months").value;

let r=rate/12/100;

let emi=(loan*r*Math.pow(1+r,months))/(Math.pow(1+r,months)-1);

document.getElementById("emiResult").innerHTML="EMI: ₹ "+emi.toFixed(2);

}

function calculateSIP(){

let sip=document.getElementById("sip").value;
let rate=document.getElementById("rate").value/12/100;
let months=document.getElementById("months").value;

let future=sip*((Math.pow(1+rate,months)-1)/rate)*(1+rate);

document.getElementById("sipResult").innerHTML="Future Value: ₹ "+future.toFixed(2);

}

function calculateFD(){

let amount=document.getElementById("amount").value;
let rate=document.getElementById("rate").value/100;
let years=document.getElementById("years").value;

let maturity=amount*Math.pow((1+rate),years);

document.getElementById("fdResult").innerHTML="Maturity Amount: ₹ "+maturity.toFixed(2);

}
