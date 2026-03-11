function calculateLoan(){

let principal = parseFloat(document.getElementById("principal").value);
let annualRate = parseFloat(document.getElementById("loanRate").value);
let years = parseFloat(document.getElementById("loanYears").value);

let monthlyRate = annualRate / 12 / 100;
let months = years * 12;

let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

let totalPayment = emi * months;
let interest = totalPayment - principal;

document.getElementById("loanResult").innerHTML =
"Monthly EMI: ₹ " + emi.toFixed(2) +
"<br>Total Interest: ₹ " + interest.toFixed(2) +
"<br>Total Payment: ₹ " + totalPayment.toFixed(2);

}
