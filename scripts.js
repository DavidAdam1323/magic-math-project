// Quick Tip Calculator Logic

//  Get the bill amount input ✅
//  Get the tip percentage input ✅
//  Get the number of people input ✅
//  Get the element to display the total bill ✅
//  Get the element to display the total per person ✅

const billAmountInput = document.querySelector("#bill-amount");
const tipPercentageInput = document.querySelector("#tip-percentage");
const numPeopleInput = document.querySelector("#num-people");
const totalBillAmount = document.querySelector("#total-bill");
const sharedBillPerPerson = document.querySelector("#shared-bill");

// Function to calculate the bill and shared amount 
//  Convert the bill amount input to a floating-point number ✅
//  Convert the tip percentage input to a floating-point number ✅
//  Convert the number of people input to an integer: 
//    - Specify radix ensure the string is always interpreted as intended. ✅
function calculateTip () {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const  numPeople = parseInt(numPeopleInput.value, 10);

//  Calculate the tip amount: (tip percentage / 100) * bill amount ✅
//  Calculate the total bill: bill amount + tip amount ✅
//  Calculate the amount per person: total bill / number of people ✅
  const tipAmount = (tipPercentage / 100) * billAmount;
  const totalBill = billAmount + tipAmount;
  const sharedBill = totalBill / numPeople;

}