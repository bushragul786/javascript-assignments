//Question no 1
//1. Write a program that takes a positive integer from user & display the following in your browser.
//Answer

//takes a positive integer from user
let num = Number(prompt("Enter a positive integer:"));


// show results in browser
if(num > 0){
document.write(`<h3>Number: ${num} </h3>`);
document.write(`<h3>Round off value:  ${Math.round(num)}</h3>`);
document.write(`<h3>Floor value:  ${Math.floor(num)} </h3>`);
document.write(`<h3>Ceil value:  ${Math.ceil(num)} </h3>`);
}
else{
     alert(`Please enter a positive number!`);
}