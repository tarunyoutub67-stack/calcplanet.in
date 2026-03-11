function calculateEMI(){

let loan = parseFloat(document.getElementById("loan").value);
let rate = parseFloat(document.getElementById("rate").value);
let months = parseFloat(document.getElementById("months").value);

if(!loan || !rate || !months){
document.getElementById("emiResult").innerHTML="Please enter all values";
return;
}

let r = rate/12/100;

let emi = (loan*r*Math.pow(1+r,months))/(Math.pow(1+r,months)-1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹ "+emi.toFixed(2);

}
