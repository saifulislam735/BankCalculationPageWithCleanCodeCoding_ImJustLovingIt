document.getElementById('deposit-btn').addEventListener('click', function () {
    //getting the new deposit amount
    const newDepositAmount = getAmountByValue('deposit-field');
    //getting the previous amount
    const previousDepositAmount = getAmountByInnerText('deposit-section');
    //Total deposit Amount
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    //showing the total deposit amount
    const settingDepositValue = setValueById('deposit-section',totalDepositAmount);
    //getting the previous balance 
    const previousBalanceAmount = getAmountByInnerText('balance-section');
    //Total Balance Amount
    const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
    //Showing the Total Balance Amount
    const settingBalanceValue = setValueById('balance-section', totalBalanceAmount);

})