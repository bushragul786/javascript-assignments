//Questiom no 1
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
//Answer
let x = 10;
document.write(`<strong>Result:</strong> <br>`);
document.write(`The value of x is: ${x} <br> <br>`);
document.write(`“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” <br> <br>`)
++x
document.write(`The value of ++x is: ${x} <br>`);
document.write(`Now  the value of x is: ${x} <br> <br>`);x
document.write(`The value of x++ is: ${x} <br> `);
x++
document.write(`Now  the value of x is:  ${x} <br> <br>`);

--x
document.write(`The value of --x is: ${x} <br>`);
document.write(`Now  the value of x is: ${x} <br> <br>`);x
document.write(`The value of x-- is: ${x} <br>`);
x--
document.write(`Now  the value of x is: ${x} <br> <br>`);

//Questiomn no x
//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
//Answer
//let  a = 2, b = 1;  
// Step 1: Initial values
let a = 2, b = 1;
document.write(`
  <h2>Initial Values</h2>
  a = ${a} <br>
  b = ${b} <br><br>
`);
//Step 2: Solve --a
document.write(`<h2>Solve --a</h2>`);
document.write(`a = 2 <br>`);
document.write(`--a means decrement first <br>`);
document.write(`a = 2 - 1 = 1 <br>`);
document.write(`Now a = 1`);

//Step 3: Solve --a - --b
document.write(`
  <h2>Step 3: Solve --a - --b</h2>
  Current a = ${a}, b = ${b} <br>
  --a = ${--a} (a becomes ${a}) <br>
  --b = ${--b} (b becomes ${b}) <br>
`);

 let step3 = a - b;
document.write(`
  So, --a - --b = ${step3} <br><br>
`);

// Step 4: Solve --a - --b + ++b
document.write(`
  <h2>Step 4: Solve --a - --b + ++b</h2>
  Current a = ${a}, b = ${b} <br>
  ++b = ${++b} (b becomes ${b}) <br>
`);
let step4 = step3 + b;
document.write(`
  So, --a - --b + ++b = ${step4} <br><br>
`);

// Step 5: Solve --a - --b + ++b + b--
document.write(`
  <h2>Step 5: Solve --a - --b + ++b + b--</h2>
  Current a = ${a}, b = ${b} <br>
  b-- = ${b--} (use 1, then b becomes ${b}) <br>
`);
let result = step4 + 1;
document.write(`<h2>Result</h2>`)
document.write(`a = 1 <br>`);
document.write(`b = 0 <br>`);
document.write(`Result is ${result} `);  

//Question no 3
//3. Write a program that takes input a name from user & greet the user.
//Answer
// Take input from user
let userName = prompt("Enter your name:");

// Greet the user
document.write(`<h2>Hello, ${userName}! Welcome to JavaScript 😊</h2>`);

//Question no 4
//4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
//Answer
 let num = +prompt("Enter a number to display its multiplication table:");
 
// Check: if blank or cancel, use default = 5
if (!num) {
  num = 5;
}

// Table
document.write(`<h2>Multiplication Table of ${num}</h2>`);
let i  = 1;
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);
i++
document.write(`${num} x ${i} = ${num * i} <br>`);

//Question no 5
//a) Take three subjects name from user and store them in 3 different variables.
//Answer
let subject1 = prompt("Enter your  first subject name");
let subject2 = prompt("Enter your  second subject name");
let subject3 = prompt("Enter your  third subject name");


    // b) Total marks for each subject
    let totalMarksPerSubject = 100;

      // c) & d) Take obtained marks for each subject
      let marks1 = prompt(`Enter your obtain marks for ${subject1}`);
      let marks2 = prompt(`Enter your  obtain marks for ${subject2}`);
      let marks3 = prompt(`Enter your  obtain marks for ${subject3}`);

      
    // e) Calculate total and percentage
let totalObtained = marks1 + marks2 + marks3;
let totalMarks = totalMarksPerSubject * 3;
let totalPercentage = (totalObtained / totalMarks) * 100;
    
    let percentageMarks1 = ( marks1/totalMarksPerSubject) * 100;
        let percentageMarks2 = ( marks2/totalMarksPerSubject) * 100;
            let percentageMarks3 = ( marks3/totalMarksPerSubject) * 100;


     
    // Show result in browser using a table
    document.write(`
      <h2>Marks Sheet</h2>
      <table border="1" cellpadding="8" cellspacing="0"> 
      <tr>
       <th>Subject</th>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
          <th>percentage</th>
        </tr>
        <tr>
             <td>${subject1}</td>
          <td>${totalMarksPerSubject}</td>
          <td>${marks1}</td>
          <td>${percentageMarks1}%</td>
        </tr>
        <tr>
         <td>${subject2}</td>
          <td>${totalMarksPerSubject}</td>
          <td>${marks2}</td>
          <td>${percentageMarks2}%</td>

        </tr>
        <tr>
          <td>${subject3}</td>
          <td>${totalMarksPerSubject}</td>
          <td>${marks3}</td>
          <td>${percentageMarks3}%</td>
           
        </tr>
        <tr>
          <th>Total</th>
          <td>${totalMarks}</td>
          <td></td>
          <td>${totalObtained}%</td>

        
        </tr>
      </table>`
    
      )
      
      
