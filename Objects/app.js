//Question no 1 
/*1. Suppose You have an array of object
var itemsArray = [
{name:”juice”,price:”50”, quantity:”3”},
{name:”cookie”,price:”30”, quantity:”9”},
{name:”shirt”,price:”880”, quantity:”1”},
{name:”pen”,price:”100”, quantity:”2”}];
Calculate total price of each item and all items;*/

//Answer

const itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 }
];

let totalAllItems = 0;
document.write("<h3>Total price of all items</h3>");
itemsArray.forEach(function(item){
    let total = item.price * item.quantity;  // total price of individual item
    document.write(item.name + " total price = " + total + "<br><br>");

    totalAllItems += total;  // adding to total of all items
});

document.write("Total price of all items = " + totalAllItems);


//Question no 2
//2. Create an object with properties name, email, password, age,gender, city, country.

//Answer

const user = {
    name : "bushra",
    email: "bushragul427@gmail.com",
    password : "3456565",
    age: 25,
    gender:"female",
    city:"karachi",
    country: "pakistan",
}

//Check if age and country properties exist in object or not.


// Checking properties
console.log("age exists? ", "age" in user);            // true
console.log("country exists? ", "country" in user);    // true


//Also check firstName and lastName properties in object.
console.log("firstName exists? ", "firstName" in user); // false
console.log("lastName exists? ", "lastName" in user);   // false

//Question no 3
//3. Create a constructor function with some properties. Now create multiple records using the constructor.
//Answer

//constructor function
function Student(name, age, grade, city){
this.name = name;
this.age = age;
this.grade = grade;
this.city = city;
}
// Creating multiple records
let Student1 = new Student("Ali",25,"A+","karachi");
let Student2 = new Student("Sara",20,"A","Lahore");
let Student3 = new Student("Ahmed",23,"B","Islamabad");

console.log(Student1);
console.log(Student2);
console.log(Student3);
  
//Question no 4 
//4. Suppose you want to check population of your area, their educations and professions.

//Constructor function
function Person(name,gender,address,education,profession){
this.name = name;
this.gender = gender;
this.address = address;
this.education = education;
this.profession = profession;
}
// Load existing records
let records = JSON.parse(localStorage.getItem("population")) || [];

document.getElementById("populationForm").addEventListener("submit",function (e){
e.preventDefault();

 let name = document.getElementById("name").value;
 let address = document.getElementById("address").value;
 let education = document.getElementById("education").value;
 let profession = document.getElementById("profession").value;

 let gender = document.querySelector('input[name="gender"]:checked').value;

   // Create object using constructor
   let person = new Person (name,gender,address,education,profession);
   records.push(person);
   localStorage.setItem("population",JSON.stringify(records));
   displayRecords();
   this.reset();
});

//display records
function displayRecords(){
   let output = "";
  records.forEach(function (p,index){
    output +=
    `<p>
    <b>${index+1}.</b>
    ${p.name} | ${p.gender} | ${p.education} | ${p.profession} | ${p.address}
    </p>
    `;
  })
  document.getElementById("output").innerHTML = output;
}
displayRecords();
