
//Question no 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

//Answer
let emptyMultidimensionalArray = [[], [], []];

//Question no 2
//2. Declare and initialize a multidimensional array representing the following matrix:

//Answer
let multiDimensionalArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1] ];

//display in browser
for(let i = 0; i < multiDimensionalArray.length; i++){
    document.write(multiDimensionalArray[i].join("") + "<br><br>");
}

//Question no3
//3. Write a program to print numeric counting from 1 to 10.

document.write(`<h3>counting from 1 to 10.</h3>`);
for(let i= 1; i <=10;i++ ){
     document.write(i + "<br>");
    
    
}

//Question no 4
//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

//Answer
let number = +prompt("Enter a number to show its multiplication table:");
let length = +prompt("Enter the length of multiplication table:");

//display in browser
document.write(`<h3>Multiplication Table of ${number}</h3>`);

for(let i = 1;i <= length ; i++){
    document.write(`${number} x ${i} = ${number*i}<br>`);
}

//Question no 5
//5. Write a program to print items of the following array using for loop:

//Answer
let fruits = ["Apple","Banana","Orange","Mango","Strawberry"];

//display in browser
document.write(`<h3>Fruits Name</h3>`);
for(let i = 0 ; i < fruits.length ; i++ ){
    document.write(fruits[i] + "<br>")
}

//Question n0 6
//6. Generate the following series in your browser.

//Answer
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15 

//display in browser
document.write(`<h3>Counting:</h3>`);
    for(let i = 0; i <= 15 ; i++){
          document.write(i + (i < 15 ? ", " : ""));
    }

 //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    //display in browser
    document.write(`<h3>Reverse Counting:</h3>`);
    for(let i = 10 ; i >= 1 ; i--){
     document.write(i + (i > 1 ? ", " : ""));
    }

//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    //display in browser
    document.write(`<h3>Even Numbers:</h3>`);
for(i = 0; i <= 20 ; i = i+2){
     document.write(i + (i < 20 ? ", " : ""));
    
}

//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    //display in browser
    document.write(`<h3>Odd Numbers:</h3>`);
for(i = 1; i <20; i = i+2 ){
document.write(i + (i < 19 ? ", " : ""));
}

//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 //display in browser
    document.write(`<h3>Series:</h3>`);
    for(i = 2; i <=20 ; i = i + 2 ){
  document.write(i + "k" + (i < 20 ? ", " : ""));
    }
//Question no 7
//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]

//Answer
let  bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let user = prompt("Welcomr to ABC bakery:what do you want to order Sir/ma'am?");

let item = user.toLowerCase();
let index = bakery.indexOf(item);

if(index !== -1){
    alert(`${user} is available at Index ${index} in our Bakery`)
}
else{
      alert(`We are sorry  ${user}  is not available in our bakery.`);

}

//Question no 8
// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].

//Answer
let A = [24, 53, 78, 91, 12];

let largest = A[0] 
for(let i = 1; i < A.length ;i++ ){
    if(A[i] > largest ){
    largest = A[i] 
    }
}
//Show in browser
document.write(`<h2>Array Items:</h2>${A} <br> `);
document.write("The largest number is " + largest);

//Question no 9
//9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]

//Answer
let B = [24, 53, 78, 91, 12];

let smallest = B[0] 
for(let i = 1; i < A.length ;i++ ){
    if(B[i] < smallest ){
    smallest = A[i] 
    }
}
//Show in browser
document.write(`<h2>Array Items:</h2>${A} <br> `);
document.write("The smallest number is " + smallest);

//Question no 10
//10. Write a program to print multiples of 5 ranging 1 to 100.

//Answer
document.write("<h3>Multiples of 5 (1 to 100)</h3>");
for( let i = 5 ; i <=100 ; i = i+5 ){
    document.write(i +(i < 100? "," : ""))
}


document.write(`<center><h1>-- END -- </h1> </center> `);