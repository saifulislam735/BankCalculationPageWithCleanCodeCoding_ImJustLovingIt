document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get withdraw amount
    const NewWithdrawAmount = getAmountByValue('withdraw-field');
    //get the previous withdraw amount
    const previousWithdrawAmount = getAmountByInnerText('withdraw-section');
    //total withdraw Amount
    const totalWithdraw = previousWithdrawAmount + NewWithdrawAmount;
    //Set the withdraw Amount
    const settingWithdrawValue = setValueById('withdraw-section', totalWithdraw);
    //get the previous Balance Amount
    const previousBalanceAmount = getAmountByInnerText('balance-section');
    //total balance rest after withdraw
    const totalBalanceAmount = previousBalanceAmount - NewWithdrawAmount;
    //set balance amount
    const settingBalanceAmount = setValueById('balance-section', totalBalanceAmount);

})