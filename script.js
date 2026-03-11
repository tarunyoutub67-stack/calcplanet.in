function calculateEMI(){

let P = document.getElementById("loan").value;
let annualRate = document.getElementById("rate").value;
let n = document.getElementById("months").value;

let r = annualRate / 12 / 100;

let emi = (P * r * Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);

document.getElementById("result").innerHTML = 
"Monthly EMI: ₹ " + emi.toFixed(2);

}
