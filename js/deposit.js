// deposite
let depositeField = document.getElementById("btn-deposit");
depositeField.addEventListener("click", function () {
  let myDeposit = document.getElementById("deposit");
  let newDepositAmount = parseFloat(myDeposit.value);

  if (newDepositAmount >= 0) {
    let depositResult = document.getElementById("deposit-show");
    let previousDepositTotal = parseFloat(depositResult.innerText);
    //   depositResult.innerText = newDepositAmount;

    let currentDepositeTotal = previousDepositTotal + newDepositAmount;
    let ii = typeof currentDepositeTotal;
    depositResult.innerText = currentDepositeTotal;

    let myBalance = document.getElementById("balance");
    let previousBalance = parseFloat(myBalance.innerText);

    let totalBalance = newDepositAmount + previousBalance;
    myBalance.innerText = totalBalance;

    myDeposit.value = "";
  } else {
    alert("Hey Bro, Wrong Amount Given. Please Input Correct Ammount");
    myDeposit.value = "";
  }
});
