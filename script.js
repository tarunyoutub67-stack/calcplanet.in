function emiCalc(){

let P=document.getElementById("loan").value;
let r=document.getElementById("rate").value/12/100;
let n=document.getElementById("months").value;

let emi=(P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

document.getElementById("result").innerHTML="EMI ₹ "+emi.toFixed(2);

}


function sipCalc(){

let P=document.getElementById("sip").value;
let r=document.getElementById("rate").value/12/100;
let n=document.getElementById("months").value;

let future=P*((Math.pow(1+r,n)-1)/r)*(1+r);

document.getElementById("result").innerHTML="Future Value ₹ "+future.toFixed(2);

}


function fdCalc(){

let P=document.getElementById("amount").value;
let r=document.getElementById("rate").value/100;
let t=document.getElementById("years").value;

let A=P*(1+r*t);

document.getElementById("result").innerHTML="Maturity ₹ "+A.toFixed(2);

}


function compoundCalc(){

let P=document.getElementById("amount").value;
let r=document.getElementById("rate").value/100;
let t=document.getElementById("years").value;

let A=P*Math.pow((1+r),t);

document.getElementById("result").innerHTML="Amount ₹ "+A.toFixed(2);

}


function cagrCalc(){

let start=document.getElementById("start").value;
let end=document.getElementById("end").value;
let years=document.getElementById("years").value;

let cagr=(Math.pow(end/start,1/years)-1)*100;

document.getElementById("result").innerHTML="CAGR "+cagr.toFixed(2)+"%";

}

