// Quick Tip Calculator Logic

//  Get the bill amount input ✅
//  Get the tip percentage input ✅
//  Get the number of people input ✅
//  Get the element to display the total bill ✅
//  Get the element to display the total per person ✅

const billAmountInput = document.querySelector("#bill-amount");
const tipPercentageInput = document.querySelector("#tip-percentage");
const numPeopleInput = document.querySelector("#num-people");
const totalBillSpan = document.querySelector("#total-bill");
const sharedBillSpan = document.querySelector("#shared-bill");

//  Function to calculate the bill and shared amount
//  Convert the bill amount input to a floating-point number ✅
//  Convert the tip percentage input to a floating-point number ✅
//  Convert the number of people input to an integer: Specify radix to ensure the string is always interpreted as intended. ✅

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value, 10);

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    totalBillSpan.textContent = "0.00";
    sharedBillSpan.textContent = "0.00";
    return;
  }

  //  Calculate the tip amount: (tip percentage / 100) * bill amount ✅
  //  Calculate the total bill: bill amount + tip amount ✅
  const tipAmount = (tipPercentage / 100) * billAmount;
  const totalBill = billAmount + tipAmount;

  //  Display the total bill rounded to two decimal places ✅
  totalBillSpan.textContent = totalBill.toFixed(2);

  //  Update the per person amount only if numPeople is valid
  //  Calculate the amount per person: total bill / number of people ✅
  //  Display the amount per person rounded to two decimal places ✅
  if (!isNaN(numPeople) && numPeople > 0) {
    const sharedBill = totalBill / numPeople;
    sharedBillSpan.textContent = sharedBill.toFixed(2);
  } else {
    sharedBillSpan.textContent = "0.00";
  }
}

// Event listeners to update the results
billAmountInput.addEventListener("input", calculateTip);
tipPercentageInput.addEventListener("input", calculateTip);
numPeopleInput.addEventListener("input", calculateTip);

// Event listeners for navigation (Enter and Arrow keys)
// Move the focus to the desired input area: E.g., tipPercentageInput.focus() ✅
billAmountInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "ArrowDown") {
    tipPercentageInput.focus();
  }
  if (event.key === "ArrowUp") {
    numPeopleInput.focus();
  }
});

tipPercentageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "ArrowDown") {
    numPeopleInput.focus();
  }
  if (event.key === "ArrowUp") {
    billAmountInput.focus();
  }
});

numPeopleInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Exit the input field ✅
    numPeopleInput.blur();
  }
  if (event.key === "ArrowUp") {
    // Move focus back to the tip percentage field ✅
    tipPercentageInput.focus();
  }
  if (event.key === "ArrowDown") {
    // Loop focus back to the bill amount field ✅
    billAmountInput.focus();
  }
});

// Disable Arrow keys from changing the number input field values
// Prevent the default action of incrementing/decrementing: E.g., event.preventDefault() ✅
billAmountInput.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});

tipPercentageInput.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});

numPeopleInput.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});