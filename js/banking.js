// evnet handler added in deposit button to deposit money
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-input');
    const newDepositAmountText = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // get the value in deposit section
    const depositTotal = document.getElementById('deposit-total');
    const existingDepostitText = depositTotal.innerText;
    const existingDepositAmount = parseFloat(existingDepostitText);

    // total deposit amount
    const newDepositTotal = existingDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    
    
    
});
