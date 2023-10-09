

// bank

let depositBtn = document.getElementById('button-tab')
depositBtn.addEventListener('click',function(){
    console.log("diposit Btn Clibked");

    let depositFiled = document.getElementById('Deposit-field');
    let depositFiledString = depositFiled.value;
    console.log(depositFiledString);
    depositFiled.value =""



     let DepositTotal = document.getElementById('Deposit-total');
    let previousDepositTotalString = DepositTotal.innerText;
      let newDepositTotal = parseInt (previousDepositTotalString) + parseInt (depositFiledString);
      DepositTotal.innerText = newDepositTotal



      let balanceTotal = document.getElementById('balance-total')
      let previousbalanceTotalString = balanceTotal.innerText;
      let newbalanceTotal = parseInt (previousbalanceTotalString) + parseInt (depositFiledString);
      balanceTotal.innerText = newbalanceTotal
      console.log(newbalanceTotal);

      
});

let WithdrawBtn = document.getElementById('button-tabe');

WithdrawBtn.addEventListener('click', function () {
  console.log("Withdraw Btn Clibked");
    let WithdrawFiled = document.getElementById('Withdraw-field');
    let WithdrawFiledString = WithdrawFiled.value;
    console.log(WithdrawFiledString);
    WithdrawFiled.value = "";



    let WithdrawTotal = document.getElementById('Withdrow-total');
    let previousWithdrawTotalString = WithdrawTotal.innerText;
    console.log(previousWithdrawTotalString);
    let newWithdrawTotal = parseInt (previousWithdrawTotalString) + parseInt(WithdrawFiledString);
    console.log(newWithdrawTotal);
    WithdrawTotal.innerText = newWithdrawTotal;
    console.log(newWithdrawTotal); 

    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceTotalString = balanceTotal.innerText;
    let newBalanceTotal = parseInt(previousBalanceTotalString) - parseInt(WithdrawFiledString);
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal);

    
});