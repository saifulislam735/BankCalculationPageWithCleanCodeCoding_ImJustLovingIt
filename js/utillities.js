function getAmountByValue(elementValue) {
    const field = document.getElementById(elementValue);
    const stringValue = field.value;
    const amount = parseFloat(stringValue);
    field.value = ' ';
    return amount;
}
function getAmountByInnerText(elementInnerText) {
    const text = document.getElementById(elementInnerText);
    const stringValue = text.innerText;
    const textAmount = parseFloat(stringValue);
    return textAmount;
}
function setValueById(elementBySetName,setValue) {
    const setFieldId = document.getElementById(elementBySetName);
    setFieldId.innerText = setValue;
}

