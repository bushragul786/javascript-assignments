//Questin no 1
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.

//Answer
let age = 23;
alert("i am " + age + " years old");
console.log(age)


//Questin no 2                  
//2. Declare & initialize a variable to keep track of how manytimes a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//Answer
// Declare & initialize visits
let visitCount = 14;
console.log(visitCount)
// show your page
document.write("<p style='font-size:24px; font-weight:bold;'>You have visited this site " + visitCount + " times</p>");



//Questin no 3
//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

//Answer
let birthYear = 1999;
console.log(birthYear)
//message in browser
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number <br>");


//Questin no 4
// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: “John
//Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

//Answer
// visitor's name 
let visitorName = ("John Doe");
//Product  title 
let productTitle = ("T-shirts (s)");
//Quantity
let quantity = (5);

//message in browser
document.write("<p style='line-height:24px; font-size:20px;'>" + "<strong>" + visitorName + "</strong>" +  " ordered " +  "<strong>" + quantity + "</strong>"  + " " + "<strong>" + productTitle + "</strong>"+ " on XYZ Clothing store <br> ");

document.write("<center>-- END -- </center>")