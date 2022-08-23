function getInputFieldValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    return elementValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValue = parseFloat(textElement.innerText);
    return textElementValue;
}