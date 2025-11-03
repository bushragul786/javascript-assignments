//Question no 1
//1. Write a program that displays current date and time in your browser.
//Answer

let currentDate = new Date();
//show in browser
document.write(`<h1>--Current Date and Time  -- </h1>  `);
document.write( `${currentDate}`);

//Question no 2
//2. Write a program that alerts the current month in words.
//Answer

let month = new Date();
let monthNames = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

let currentMonth = monthNames[(month.getMonth())];
//show in browser
document.write(`<h1>--Current Month  -- </h1>`);
document.write(`${currentMonth}`)

//Question no 3
//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
//Answer

let day = new Date();
let weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = weekNames[(day.getDay())];
let shortDay = currentDay.slice(0,3);
//show in browser
document.write(`<h1>--Current Day  -- </h1>`);
document.write(`${shortDay}<br>`)

//Question no 4
//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//Answer

let today = new Date();
let funDay = today.getDay();
document.write(`<h1>--Today  -- </h1>`);
if (funDay === 0 || funDay === 6) {
  document.write("It's Fun day!");
} else {
  document.write("It's a working day.");
}

//Question no 5
//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
//Answer

let days = new Date();
let fifteenDays = days.getDate();
if(fifteenDays < 16){
document.write(`<h2>First fifteen days of the month</h2>`);
}
else{
    document.write(`<h2>Last days of the month</h2>`)
}

//Question no 6
//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//Answer

let now = new Date();
let millisecondsSince1970 = now.getTime();

let minutesSince1970 = millisecondsSince1970 /(1000 * 60);
//show in browser
document.write(` <h2>Current Date:</h2>${now}<br>`);
document.write(`<h2>Elapsed milliseconds  since  Jan. 1, 1970 :</h2>${millisecondsSince1970}<br>`);
document.write(`<h2>Elapsed Minutes  since  Jan. 1, 1970 :</h2>${minutesSince1970}<br>`);

//Question no 7
//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
//Answer

let time = new Date();
let hours = time.getHours();

if(hours < 12){
 alert("It's AM");
}
else{
  alert("It's PM");
}

//Question no 8
//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
//Answer

// Create Date object for last day of last month of 2025
let laterDate = new Date(2025, 11, 31);

//show in browser
document.write(`<h2>Later Date:</h2> ${laterDate} <br>`);


//Question no 9
//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015 
//Answer

// Create a Date object for 1st Ramadan (June 18, 2015)
let ramadanStart = new Date(2015, 5 ,18);

// Create a Date object for the current date
let todayy = new Date();

// Calculate the difference in milliseconds
let diff = todayy - ramadanStart;

// Convert milliseconds to days
let passedDays = Math.floor(diff/ (1000 * 60 * 60 * 24));

// Show result
document.write(`<h2>Passed Days in Ramadan</h2>`);
document.write(`Current Date: ${todayy}<br>`);
document.write(`1st Ramadan Date: ${ramadanStart}<br>`);
document.write(`<b>${passedDays}</b> days have passed since 1st Ramadan 2015.`);

//Question no 10
//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2025.
//Answer

// Create a Date object for the beginning of 2025
let beginningOf2025 = new Date (2025,0,1);

// Create a Date object for the current date
let referenceDate = new Date();

// Calculate the difference in milliseconds
let difference = referenceDate - beginningOf2025;

// Convert milliseconds to seconds
let secondsElapsed = Math.floor(difference/1000);

// Show result in browser
document.write(`<h2>Seconds Elapsed Since Beginning of 2025</h2>`);
document.write(`Reference Date: ${referenceDate}<br>`);
document.write(` <b>${secondsElapsed}</b> seconds had passed since beginning of 2025`);

//Question no 11
//11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
//Answer

 // 1. Create a Date object for the current date and time
 let currentTime = new Date();
let currentDateAndTime = new Date();

// 2. Extract the current hour
let currentHour = currentTime.getHours();

// 3. Reset the date object one hour ahead
currentDateAndTime.setHours(currentHour + 1);

// 4. Display the updated date and time in browser

  document.write(`<h2>Current Date: ${currentTime}</h2>`);
  document.write(`1 hour ahead:${currentDateAndTime}`);
// 3. Reset the date object one hour ago
currentDateAndTime.setHours(currentHour - 1);
document.write(`<h2>Current Date: ${currentTime}</h2>`);
  document.write(`1 hour ago it was:${currentDateAndTime}</h2>`);

  //Question no 12
  //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
  //Answer
let current = new Date();
  // Create a Date object for current date
  let newDate = new Date ();
  
// Move date 100 years back
newDate.setFullYear(newDate.getFullYear()-100);
// Show result in alert box
alert(`${current}`);
alert("Date 100 years back it was: " + newDate);
//Show in browser
document.write(`<h2>Current and 100 years back  Date:</h2>`);
document.write(`${current} <br>`);
document.write("Date 100 years back it was: " + newDate + "<br>");


//Question no 13
//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
//Answer

let age = new Date();
let userAge = Number(prompt("what's your age? "));
let birthYear =  age.getFullYear() - userAge;

//show in browser
document.write(`<h2>User age and birth year:</h2>`);
document.write(`Your age is:${userAge} <br>`)
document.write(`Your birth year is${birthYear}`);

//Question no 14
//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//Answer

//a. Customer Name
let customerName = prompt("Enter custumer Name");

//b. Current Month
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let currentMonthName = months[new Date().getMonth()];

//c. Number of units
let  numberOfUnits = Number(prompt("Enter number of units"));

//d. Charges per unit
let chargesPerUnit = Number(prompt("Enter charges per units"))

//e. Net Amount Payable (within Due Date)
let netAmountPayable = numberOfUnits * chargesPerUnit;

//f. Late Payment Surcharge
let latePaymentSurcharge = 350;

//g. Gross Amount Payable (after Due Date)
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//show in browser
document.write(`<h1>--K - Electric Bill  -- </h1>  `);
document.write(`<b>Customer Name:</b> ${customerName} <br>`);
document.write(`<b>Month:</b> ${currentMonthName} <br>`);
document.write(`<b>Number of Units:</b> ${numberOfUnits.toFixed(2)} <br>`);
document.write(`<b>Charges per Unit:</b> ${chargesPerUnit.toFixed(2)} <br><br>`);

document.write(`<b>Net Amount Payable (within Due Date):</b> ${netAmountPayable.toFixed(2)} <br>`);
document.write(`<b>Late Payment Surcharge:</b> ${latePaymentSurcharge.toFixed(2)} <br>`);
document.write(`<b>Gross Amount Payable (after Due Date):</b> ${grossAmountPayable.toFixed(2)} <br>`);

document.write(`<center><h1>-- END -- </h1></center>  `);