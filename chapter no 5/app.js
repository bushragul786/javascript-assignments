//Question no 1                     
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//Answer

let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

// show result in browser
document.write(` <strong><h2> Sum of ${num1} and ${num2} is ${sum} </strong> </h2>`);

//Question no 2
//  2. Repeat task1 for subtraction, multiplication, division & modulus.
//Answer
//for subtraction
let subtraction = num1 - num2;
// show result in browser
document.write(` <strong><h2> subtraction of ${num1} and ${num2} is ${subtraction} </strong> </h2>`);
//for multiplication
let multiplication = num1 * num2;
// show result in browser
document.write(` <strong><h2> multiplication of ${num1} and ${num2} is ${multiplication} </strong> </h2>`);
//for division
let division = num1 / num2;
// show result in browser
document.write(` <strong><h2> division of ${num1} and ${num2} is ${division} </strong> </h2>`);
//for modulus.
let modulus = num1 % num2;
console.log(modulus );
// show result in browser
document.write(` <strong><h2> modulus of ${num1} and ${num2} is ${modulus} </strong> </h2>`);

 //Questin no 3
//3. Do the following using JS Mathematic Expressions
//Answer
//a. Declare a variable.
let num;
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write(`<h2> <strong> Value after variable declaration is:${num } </strong> </h2>`);
//c. Initialize the variable with some number.
 num = 5;
 //d. Show the value of variable in your browser like “Initial value: 5”.
 document.write(`<h2> <strong> Initial value is ${num } </strong> </h2>`);
//e. Increment the variable.
num++;
//f. Show the value of variable in your browser like “Value after increment is: 6”.
 document.write(` <h2> <strong> Value after increment is ${num}  </strong> </h2>`);
 //g. Add 7 to the variable.
   num = num+7;
  // h. Show the value of variable in your browser like “Value after addition is: 13”.
   document.write(` <h2> <strong> Value after addition is ${num }  </strong> </h2>`);
   //i. Decrement the variable.
   num--;
   //j. Show the value of variable in your browser like “Value after decrement is: 12”.
    document.write(` <h2> <strong> Value after decrement is ${num }  </strong> </h2>`);
//k. Show the remainder after dividing the variable’s value by 3.
  let remainder = num % 3;
  //l. Output : “The remainder is : 0”.
   document.write(` <h2> <strong> The remainder is ${remainder }  </strong> </h2>`);

//Question no 4
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
//Answer
let ticketPrice = 600;
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;
document.write( `<h1><strong>Total cost of Tickets</strong></h1>`)
document.write(`<h2> <strong> total cost to buy ${numberOfTickets} tickets to a movie is ${totalCost} PKR </strong> </h2>`);

//Question no 5
//5. Write a script to display multiplication table of any number in your browser. E.g
//Answer
let number = 4;
let i = 1;
document.write(`<h1> Multiplication Table of ${number} </h1> `)

document.write(`${number} x ${i} = ${number * i} <br>`);
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );
i++
document.write(` ${ number} x ${i} = ${ number* i} <br>` );

//Question no 6
//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//Answer
//a. Store a Celsius temperature into a variable.
let celsius = 25;
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let fahrenheitResult = (celsius* 9/5)+32;
document.write( `<h1><strong>The Temperature Converter</strong></h1>`)
document.write(`<h2>${celsius}°C is ${fahrenheitResult}°F</h2>`);
//c. Now store a Fahrenheit temperature into a variable.
let fahrenheit = 70;
//d. Convert it to Celsius & output “NNoF is NNoC”.
let celsiusResult = (fahrenheit-32 )*5/9;
document.write(`<h2>${fahrenheit}°F is ${celsiusResult}°C</h2>`);

//Questin no 7
//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//Answer
//a. Price of item 1
let priceItem1 = 650;
//b. Price of item 2
let priceItem2 = 100;
// c. Ordered quantity of item 1
let quantityItem1 = 3;
// d. Ordered quantity of item 2
let quantityItem2 = 7;
// e. Shipping charges
let shippingCharges = 100;
// Calculate total cost
let total = ( priceItem1* quantityItem1) + (priceItem2 * quantityItem2 ) + shippingCharges;
console.log(total );

document.write( `<h1><strong>Shopping Cart</strong></h1>`)
document.write(`Price of item 1 is ${priceItem1} <br>`);
document.write(`Quantity of item 1 is ${quantityItem1} <br>`);
document.write(`Price of item 2 is ${priceItem2} <br>`);
document.write(`Quantity of item 2 is ${quantityItem2} <br>`);
document.write(`Shipping Charges ${shippingCharges} <br><br>`);
document.write(`<strong>Total cost of your order is ${total} PKR</strong>`);

//Question no 8
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
//Answer
// Store total marks & obtained marks
let totalMarks = 980;
let obtainedMarks = 804;
// Compute percentage
let percentage = (obtainedMarks / totalMarks) * 100;

// Show result in browser
document.write(`<h1><strong> Marks Sheet </strong></h1>`);
document.write( `Total Marks: ${totalMarks} <br>` );
document.write(`Obtain Marks: ${obtainedMarks}<br>`);
document.write(`Percentage ${percentage }% <br>` );

//Question no 9
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
//Answer
// Currency in PKR
let totalPKR = (10*104.80 ) + (25*28 );

document.write(`<h1><strong> Currency in PKR <strong></h1>`);
document.write(`Total Currency in PKR: ${totalPKR}`);

//Question no 10
//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//Answer
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
let value = 10;
let arithmetic = ((value+5)*10/2) ;
console.log(arithmetic );
document.write(`<h1><strong>Arithmetic <strong></h1>`);
document.write(`${arithmetic }`);

//Question no 11
//11. The Age Calculator: Forgot how old someone is? Calculate it!
//Answer
//a. Store the current year in a variable.
let currentYear = 2025;
//b. Store their birth year in a variable.
let birthYear = 1999;
//c. Calculate their 2 possible ages based on the stored values.
let age1 =  currentYear-birthYear;
let age2 = age1-1;
console.log( age1);
console.log(age2);
//show in browser
document.write(`<h1><strong>The Age Calculator</h1></strong>`);
document.write(`Current Year: ${currentYear }<br> `);
document.write(`Birth Year: ${birthYear } <br>`);
document.write(`Your age is: ${age2 } <br>`);

//Question no 12
//12. The Geometrizer: Calculate properties of a circle.a. Store a radius into a variable.
//Answer
//a. Store a radius into a variable.
let radius = 20;
//b. Calculate the circumference based on the radius,
let circumferenceOfACircle = (2*3.14)*radius;
console.log(circumferenceOfACircle );
//Calculate the area based on the radius,
let areaOfACircle = 3.14*( radius* radius);
console.log( areaOfACircle);

//show in browser
document.write(`<h1><strong>The Geometrizer</h1></strong>`);
document.write(`Radius of a circle: ${radius } <br>`);
document.write(`The circumference is: ${ circumferenceOfACircle} <br>`);
document.write(`The Area is: ${areaOfACircle } <br>`);

//Question no 13
//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
//Answer
//a. Store your favorite snack into a variable
let  favoriteSnack = "Chocolate Chip";
//b. Store your current age into a variable.
let currentAge = 15;
// c. Maximum age
let maxAge = 65;
// d. Estimated amount per day
let perDay = 3;
// e. Calculate lifetime supply
let totalSnacks = (maxAge - currentAge) * 365 * perDay;
console.log( totalSnacks );

//show in browser
document.write(`<h1><strong>The Lifetime Supply Calculator</h1></strong>`);
document.write(`Favorite Snack: ${favoriteSnack} <br>`);
document.write(`Current Age: ${currentAge} <br>`);
document.write(`Estimated Maximum Age: ${maxAge} <br>`);
document.write(`Amount of snacks per day: ${perDay} <br><br>`);
document.write(`<strong>You will need to ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}</strong>`);
document.write(`<center><h1>-- END -- </h1> </center> `)
