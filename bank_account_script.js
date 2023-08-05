const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
const transfers =[];
let totalBalance =508721890073;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const userTransfer = document.getElementById("userTransfer");
const btnTransfer = document.getElementById("btnTransfer");

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnDeposit.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 100000) {
            alert("You can only deposit between $50000 and $100,000.")
            return // Prevent the action from executing userDeposit.value = '';
        } else {
                {
                alert("proceed to transfer to the recipient.");
            }
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        } else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

// Get references to the input fields and button
const transferAmountInput = document.getElementById('transferAmount');
const recipientAccountInput = document.getElementById('recipientAccount');
const transferButton = document.getElementById('btnTransfer');

// Add event listener to the transfer button
transferButton.addEventListener('click', transferFunds);

// Function to handle the transfer of funds
function transferFunds() {
  // Get the transfer amount and recipient account from the input fields
  const transferAmount = parseFloat(transferAmountInput.value);
  const recipientAccount = recipientAccountInput.value;

  // Perform validation checks

  

  // Perform the transfer operation
  // Add your logic here to update the account balances, log the transaction, etc.
  // For demonstration purposes, we'll just log the transfer details to the console
  console.log('Transfer Amount: ' + transferAmount);
  console.log('Recipient Account: ' + recipientAccount);

  // Clear the input fields
  transferAmountInput.value = '';
  recipientAccountInput.value = '';
}

// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
