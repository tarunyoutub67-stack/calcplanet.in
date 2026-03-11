function calculateLoan(){

let P = parseFloat(document.getElementById("amount").value);
let rate = parseFloat(document.getElementById("rate").value);
let years = parseFloat(document.getElementById("years").value);

let r = rate/12/100;
let n = years*12;

let emi = (P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);

let total = emi*n;
let interest = total-P;

document.getElementById("loanResult").innerHTML =
"EMI: ₹ "+emi.toFixed(2)+"<br>Total Interest: ₹ "+interest.toFixed(2);

}
