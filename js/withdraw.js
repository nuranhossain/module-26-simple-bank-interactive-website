// withdraw

// step 1 button get by id then add addEventListener
let withdrawButton = document.getElementById("btn-withdraw");
withdrawButton.addEventListener("click", function () {
  // step 2 get value from input element field by id
  let withdrawField = document.getElementById("withdraw-field");
  let newWithdrawAmountString = withdrawField.value;
  // parseFloat diye number a rupantor kora hoise
  let newWithdrawAmount = parseFloat(newWithdrawAmountString);

  let balanceTotalElement = document.getElementById("balance");
  let previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
  if (previousBalanceTotal < newWithdrawAmount) {
    alert("Bhai Besi tuila falaisen eto taka nai bank a");
    withdrawField.value = "";
  } else if (newWithdrawAmount >= 0) {
    // step 3 Show how much money you withdraw here
    // ekhane withdraw te koto taka withdraw kora hoise seta dekhanor jonno withdraw tag er id neya hoise ebong value neya hoise innerText er dara
    // parseFloat diye number a rupantor kora hoise

    let withdraw = document.getElementById("withdraw");
    let previousWithdrawAmount = parseFloat(withdraw.innerText);

    // step 4 ager withdraw amount er sate notun withdraw ammount jog kora hoise
    let totatlWithdraw = newWithdrawAmount + previousWithdrawAmount;
    withdraw.innerText = totatlWithdraw;

    // step 5 getting balance total amount by id from p tag abong er value innerText dara neya hoise

    balanceTotalElement = document.getElementById("balance");
    previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    // new withdraw amount er sate orthat withdraw input field er ammount theke total balance minus kora hoise
    let currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // total balance er value set kore deya hoise total balance theke new withdraw amount minue kore

    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = "";
  } else {
    alert("Bro, Wrong Amount Given, Please Put Correct Amount");
    withdrawField.value = "";
  }
});
