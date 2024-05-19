 function siBtn(){
    var principalAmount = parseFloat(document.getElementById('amount').value);
    var interestRate = parseFloat(document.getElementById('rate').value);
    var timeInYear = parseFloat(document.getElementById('year').value);

    // Validate the input values
    if (isNaN(principalAmount) || isNaN(interestRate) || isNaN(timeInYear)) {
        document.getElementById('si').innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var simpleInterest=(principalAmount*interestRate*timeInYear)/100;

    document.getElementById('si').innerHTML="The simple interest is:" + simpleInterest.toFixed(2);
}

function clearFields() {
    // Clear input fields
    document.getElementById('amount').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('year').value = '';

    // Clear result display
    document.getElementById('si').innerHTML = '';
}
