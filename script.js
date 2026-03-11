function calculateEMI(){

let P = parseFloat(document.getElementById("loan").value);
let rate = parseFloat(document.getElementById("rate").value);
let months = parseFloat(document.getElementById("months").value);

if(!P || !rate || !months){
document.getElementById("emiResult").innerHTML="Enter all values";
return;
}

let r = rate/12/100;

let emi = (P*r*Math.pow(1+r,months))/(Math.pow(1+r,months)-1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹ "+emi.toFixed(2);

}



function calculateLoan(){

let loan = parseFloat(document.getElementById("loan").value);
let rate = parseFloat(document.getElementById("rate").value);
let years = parseFloat(document.getElementById("years").value);

if(!loan || !rate || !years){
document.getElementById("loanResult").innerHTML="Enter all values";
return;
}

let r = rate/12/100;
let n = years*12;

let emi = (loan*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

let total = emi*n;
let interest = total-loan;

document.getElementById("loanResult").innerHTML =
"EMI: ₹ "+emi.toFixed(2)+"<br>Total Interest: ₹ "+interest.toFixed(2);

}
