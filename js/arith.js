//External JavaScript file
//Get Elements -- Get the text
let spanE = document.getElementById('num1');
let spanT = spanE.textContent;
let n1 = parseInt(spanT);
//One line way to get number from document:
let n2 = parseInt(document.getElementById('num2').textContent);

//add the numbers
let c = n1 + n2;

//display
document.write(c);