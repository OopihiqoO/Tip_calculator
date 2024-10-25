document.addEventListener('DOMContentLoaded', function() {
document.body.style.backgroundColor = "#000080";
});
document.getElementById('billTotal').addEventListener('input', function() {
        let value = parseFloat(this.value);
        if (!isNaN(value)) {
            this.value = value.toFixed(2);
        }
    });
document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
if (isNaN(bill) || bill <= 0) {
    alert("Please enter a bill amount.");
    return;
    }
 var tipValue = bill * (tip/100);
  var finalBill = bill + tipValue;
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount');
var totalBillWithTip = document.querySelector('#totalBillWithTip');

tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value = finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display = 'block';
};

