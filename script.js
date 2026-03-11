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
