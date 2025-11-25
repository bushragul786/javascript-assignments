//Question no 1
//i. Get element of id “main-content” and assign them in a variable.
//Answer
 let mainContent = document.getElementById("main-content");
console.log(mainContent);


//Question no 2
//ii. Display all child elements of “main-content” element.
//Answer
var children = mainContent.children    

for (var i = 0; i < children.length; i++) {
    console.log(children[i]);
}


//Question no 3
//iii. Get all elements of class “render” and show their innerHTML in browser.
//Answer
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>");
}


//Question no 4
//iv. Fill input value whose element id first-name using javascript.
//Answer
document.getElementById("first-name").value = "Alex";


//Question no 5
//v. Repeat part iv for id ”last-name” and “email”.
//Answer
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";


//2. use HTML code of question 1 and show the result on browser.

//Question no 1
//i. What is node type of element having id “form-content”.
//Answer
let  formContent = document.getElementById("form-content");
document.write("<h1>Node type of form-content:</h1> " + formContent.nodeType + "<br>");

//Question no 2
//ii. Show node type of element having id “lastName” and its child node.
//Answer
 var lastName = document.getElementById("lastName");

document.write(" <h1> Node type of lastName:</h1> " + lastName.nodeType + "<br>");
document.write(" <h1> Node type of lastName child:</h1>" + lastName.firstChild.nodeType + "<br>");

//Question no 3
//iii. Update child node of element having id “lastName”.
//Answer
lastName.firstChild.nodeValue = "Last Name: Updated  Bank";

//Question no 4
//iv. Get First and last child of id “main-content”.
//Answer
var main = document.getElementById("main-content");

document.write("<h1>First Child:</h1> " + main.firstElementChild.innerHTML + "<br>");
document.write("<h1>Last Child: </h1>" + main.lastElementChild.innerHTML + "<br>");


//Question no 5
//v. Get next and previous siblings of id “lastName”.
//Answer
var nextSibling = lastName.nextElementSibling;
var prevSibling = lastName.previousElementSibling;

document.write(" <h1>Next Sibling:</h1>  " + nextSibling.innerHTML + "<br>"); 
document.write("<h1>Previous Sibling: </h1> " + prevSibling.innerHTML + "<br>");


//Question no 6
//vi. Get parent node and node type of element having id “email”
//Answer
var email = document.getElementById("email");

document.write("<h1>Parent Node: </h1>" + email.parentNode.nodeName + "<br>");
document.write("<h1>Node Type of email:</h1> " + email.nodeType + "<br>");


document.write(`<center><h1>-- END -- </h1></center>  `);