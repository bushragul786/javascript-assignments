
//Question no 1
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”
//Answer
 let city = prompt("Enter your city name");
 if( city === "Karach" || city === "karachi" ) {
 alert("“Welcome to city of lights”");
 }
 else{
     alert("welcome to " + city)
 }

// //Question no 2
// //2. Write a program to take “gender” as input from user.
// //Answer
 let gender = prompt("Enter your gender");
 //user is female, give the message: Good Morning Ma’am.
 if(gender === "female" ){
     alert("Good Morning Ma’am.")
 }
 //user is male, give the message: Good Morning Sir.
  else if(gender === "male"){
     alert("Good Morning Sir.")
 }
 else{
     alert("Good Morning!")
 }

// //Question no 3 
// //3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// //Answer
 let trafficSignalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");

  trafficSignalColor = trafficSignalColor.toLowerCase();

 if( trafficSignalColor === "red" ){
      alert("Must Stop");
 }
 else if ( trafficSignalColor === "yellow"  ){
      alert("Ready to move");
 }
 else if ( trafficSignalColor === "green"  ){
      alert("Move now");
 }
 else{
     alert("Invalid color entered");
 }


//Question no 4
//4. Write a program to take input remaining fuel in car (in litres) from user.
//Answer
 let fuel = +prompt("Enter remaining fuel in car (in litres):");

 //If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
 if(fuel < 0.25 ){
      alert("Please refill the fuel in your car");
 }
 else{
       alert("You have enough fuel");
 }



//5. Run this script, & check whether alert message would be displayed or not. Record the outputs. a. var a = 4; if (++a === 5) {alert("given condition for variable a is true");
//a
 let a = 4
 if (++a === 5) {
   alert("given condition for variable a is true");
 }

// Explanation: ++a pre-increment hai, pehle value 1 se increase hui (a = 5),
// phir comparison hua. 5 === 5 true hua, is liye alert display hoga.


//b.
  let b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }
// Explanation: b++ post-increment hai, pehle comparison hua (82 === 83 → false),
// baad me b = 83 ho gaya. Condition false hai, alert show nahi hoga.

//c
  let c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
// Explanation:
// 1) c++ post-increment: 12 === 13 false, c = 13 ho gaya (no alert).
// 2) c === 13 → true (alert "condition 2 is true").
// 3) ++c = 14, compare 14 < 14 false (no alert).
// 4) c === 14 → true (alert "condition 4 is true").
// Final alerts: "condition 2 is true", "condition 4 is true".

//d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// Explanation: totalCost = 20000 + 2000 = 22000.
// laborCost + materialCost = 22000.
// Comparison true hai, is liye alert "The cost equals" show hoga.

//e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// Explanation:
// Pehla if (true) hamesha chalega → alert "True" show hoga.
// Dusra if (false) kabhi nahi chalega → "False" alert show nahi hoga.


//f
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Explanation: Strings lexicographical (dictionary order) me compare hote hain.
// "car" aur "cat" me pehle 2 letters same hain, lekin 'r' (114) < 't' (116).
// Is liye condition true hai aur alert show hoga: "car is smaller than cat".

// //Question no 6
 // Take input marks for 3 subjects
 let sub1 = +prompt("Enter marks for Subject 1 (out of 100):");
 let sub2 = +prompt("Enter marks for Subject 2 (out of 100):");
 let sub3 = +prompt("Enter marks for Subject 3 (out of 100):");


 // Total marks
 let totalMarks = 300;
 // Calculate obtained marks
let obtainedMarks = sub1 + sub2 + sub3;
// Calculate percentage
let percentage = (obtainedMarks / totalMarks) * 100;

 // Variables for grade and remarks
let grade, remarks;
 if (percentage >= 80) {
    grade = "A-one";
   remarks = "Excellent";
}
 else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
   grade = "B"
    remarks = "You need to improve";
} else {
     grade = "Fail";
     remarks = "Sorry";
}
//Show the total marks, marks obtained, percentage, grade & remarks
document.write(`
              <h1><strong>Marks Sheet</h1></strong>
              <b>Total marks :</b> ${totalMarks}<br>
              <b>Marks obtained :</b> ${obtainedMarks}<br>
              <b>Percentage :</b> ${percentage}%<br>
               <b>Grade :</b> ${grade}<br>
                <b>Remarks :</b> ${remarks}
               `);

//Question no 7
//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.
//Answer
let secretNumber = 4 
//Prompt user to guess the secret number.
let guess = +prompt("Guess the secret number (1 to 10):");
//a. If user guesses the same number, show “Bingo! Correct answer”.
if(guess === secretNumber){
     alert("Bingo! Correct answer");
}
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
else if(guess+1 === secretNumber){
       alert("Close enough to the correct answer");
}
else{
    alert("Try again!")
}
  
//Question no 8
//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
//Answer
let num = +prompt("Enter a number to check if it is divisible by 3:");
if( num % 3 === 0){
    alert( `${num} is divisible by 3 `)
}
else{
    alert(`${num} is not divisible by 3`)
}

//Question no 9
//9. Write a program that checks whether the given input is an even number or an odd number.
//Answer
let number = +prompt("Please enter any number to check even or odd:");
if(number % 2 === 0){
    alert(`${number} is an Even number`)
} 
else{
    alert(`${number}is an Odd number`)
}

//Question no 10
//10. Write a program that takes temperature as input and shows a message based on following criteria
//Answer
 // Take input from user
 let temp = +prompt("Enter the temperature:");
 //a. T > 40 then “It is too hot outside.”
 if(temp > 40 ){
    alert("It is too hot outside.");
 }
 //b. T > 30 then “The Weather today is Normal.”
 else if(temp > 30){
    alert("The Weather today is Normal.");
 }
 //c. T > 20 then “Today’s Weather is cool.”
   else if (temp > 20) {
    alert("Today’s Weather is cool.");
  } 
  //d. T > 10 then “OMG! Today’s weather is so Cool.”
  else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
  } 
  else {
    alert("It's very cold!");
  }

  //Question no 11
  //11. Write a program to create a calculator for +,-,*, / & %
  //Answer
    // Take input from user
    let num1 = +prompt("Enter the first number:");
  let num2 = +prompt("Enter the second number:");
   let operation = prompt("Enter operation (+, -, *, /, %):");

 let result;
 // Check operation using if statements
 if(operation === "+"){
    result = num1 + num2
 }
  if (operation === "-") {
    result = num1 - num2;
  }
  if (operation === "*") {
    result = num1 * num2;
  }
  if (operation === "/") {
    result = num1 / num2;
  }
  if (operation === "%") {
    result = num1 % num2;
  }
   // Show result
  alert(`Result:  ${result}`);

  document.write(`<center><h1>-- END -- </h1> </center> `)

