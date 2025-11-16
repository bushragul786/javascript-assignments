//Question no 1
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
//Answer

function power(a,b){
  return Math.pow(a,b);
}
document.write(`<h2>Function power(a,b)</h2>`);
document.write(`${power(3,4)}`);

//Question no 2
//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.Leap years ..., 2012, 2016, 2020, ...
//Answer

function isLeapYear(year){
if((year % 4===0 && year % 100 !== 0)||(year % 400 === 0)){
  return "It is a leap year";
    } else {
        return "It is not a leap year";
    }
}

// show document
document.write(`<h2>Year is a leap or not</h2>`);
document.write(isLeapYear(2020));  

//Question n0 3
//3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions
//Answer

function calculateS(a,b,c){
    return (a+b+c)/2

}
function triangleArea(a,b,c){
  let S = calculateS(a, b, c);
   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  return area;
}
document.write("<h2>Area of triangle</h2> = " + triangleArea(3, 4, 5) + "<br>");

//Question no 4
//4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. 
//Answer

// 1-average function
function average(m1,m2,m3){
return(m1 + m2 + m3)/3
}
// 2-percentage function
function percentage(m1,m2,m3){
   let  totalMarks = 300
   let obtained = m1 + m2 + m3
   return (obtained/totalMarks) *100;
}
// 3-main function
function mainFunction() {
  let m1 = +prompt("Enter marks of Subject 1:");
  let m2 = +prompt("Enter marks of Subject 2:");
  let m3 = +prompt("Enter marks of Subject 3:");

let avg = average(m1,m2,m3);
let perc = percentage(m1,m2,m3);

  document.write(`<h2>Result:</h2>`);
  document.write(`Average Marks: ${avg.toFixed(2)} <br>`);
  document.write(`Percentage: ${perc.toFixed(2)}%`);
}
  mainFunction();

//Quetion no 5
//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.
  //Answer

  function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;   // jahan character mil jaye, us index ko return karo
    }
  }
  return -1;      // agar na mile toh -1 return kare (same as indexOf)
}

  document.write(`<h2>Custom Index Of:</h2>`);
document.write(customIndexOf("JavaScript", "S"));


//Question no 6
//6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
//Answer

function deleteVowels(sentence) {
  let result = "";
  let vowels = "aeiouAEIOU";

  for (let char of sentence) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}
document.write(`<h2>Delete all vowels from a sentence</h2>`);
document.write(deleteVowels("bushra gul" + "<br>"));

//Question no 7
//7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
//Answer

function countAndDisplayDoubleVowels(text){
  let count = 0;
  let found =[];
  for (let i = 0;i < text.length-1;i++){
 let pair = text[i] +text[i+1];
  let p = pair.toLowerCase()           


    switch (p) {
      case "aa": case "ae": case "ai": case "ao": case "au":
      case "ea": case "ee": case "ei": case "eo": case "eu":
      case "ia": case "ie": case "ii": case "io": case "iu":
      case "oa": case "oe": case "oi": case "oo": case "ou":
      case "ua": case "ue": case "ui": case "uo": case "uu":

        count++;
        found.push(pair); // original pair store (case ko preserve karta hai)
        break;
    }
  }
  
  document.write("<h2>Total double vowels:</h2> " + count + "<br>");
  document.write("<h2>Found pairs:</h2> " + found.join(", "));
  }
  
let sentence = "Pleases read this application and give me gratuity";
countAndDisplayDoubleVowels(sentence);

//Question n0 8
//8. The distance between two cities (in km.) is input through the keyboard.
//Answer

//to meters
function toMeters(km){
return km * 1000
}

//to feet
function toFeet(km){
return km * 3280.84;
}

// to inches
function toInches(km){
return km *39370.1
}

//to centimeters
function toCentimeters(km){
return km * 100000
}
function myFunction() {
  let km = +prompt("Enter distance in kilometers:");

  document.write(`<h2>Distance Conversions</h2>`);
  document.write(`Meters: ${toMeters(km)} m <br>`);
  document.write(`Feet: ${toFeet(km).toFixed(2)} ft <br>`);
  document.write(`Inches: ${toInches(km).toFixed(2)} in <br>`);
  document.write(`Centimeters: ${toCentimeters(km)} cm <br>`);
}

myFunction();



//Question no 9
//9. Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
//Answer

function calculateOvertime(hoursWorked){
 let overtimeRate = 12;
 if(hoursWorked > 40){
  let overtimeHours = hoursWorked - 40;
  let overtimePay = overtimeHours * overtimeRate;
  return overtimePay;
 }else{
  return 0;
 }
}
let hours = +prompt("Enter total hours worked:");

let pay = calculateOvertime(hours);

document.write(`<h2>Overtime Pay Calculation</h2>`);
document.write(`Hours Worked: ${hours} <br>`);
document.write(`Overtime Pay: Rs. ${pay}`);


//Question no 10
//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through thekeyboard in hundreds, find the total number of currency notesof each denomination the cashier will have to give to the withdrawer.
//Answer

function currencyNotes(amount){
  let note100 = Math.floor(amount/100);
  amount = amount % 100;
  let note50 = Math.floor(amount/50);
    amount = amount % 50;
  let note10 = Math.floor(amount/10);
    
  document.write(`<h2>Currency Breakdown</h2>`);
  document.write(`100 Notes: ${note100} <br>`);
  document.write(`50 Notes: ${note50} <br>`);
  document.write(`10 Notes: ${note10} <br>`);
    
}

let amount = +prompt("Enter amount to withdraw!!");
currencyNotes(amount);


document.write(`<center><h1>-- END -- </h1></center>  `);