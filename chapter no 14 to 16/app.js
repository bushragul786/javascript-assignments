//Question no 1
//1. Declare an empty array using JS literal notation to store student names in future.
//Answer

let studentNames = [];
//Explanation
//"Here, studentNames is an empty array created using literal notation, which can store names in the future."

//Question no 2
//2. Declare an empty array using JS object notation to store student names in future.
//Answer
let studentsName = new Array();
//Explanation
//"Here, studentNames is an empty array created using object notation, which can store names in the future."

//Question no 3
//3. Declare and initialize a strings array.
//Answer
let stringsArray = ["red", "blue", "green" , "pink" , "purple"]
console.log(stringsArray);

//Question no 4
//4. Declare and initialize a numbers array.
//Answer
let numbersArray = [1,2,3,4,5,6,7,8,9,10 ]
console.log(numbersArray);

//Question no 5
//5. Declare and initialize a boolean array.
//Answer
let booleanArray = [true,false, true, false]
console.log(booleanArray);

//Question no 6
//6. Declare and initialize a mixed array.
//Answer
let mixedArray = [ "blue", 2, false, 8, "pink" , true,]
console.log(mixedArray);

//Question no 7
//7. Declare and Initialize an array and store available
//Answer
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//Show in browser
document.write("<h1>Education Qualifications in Pakistan:</h1>");
for( let i = 0; i < educationQualifications.length ; i++ ){   
document.write(`(${i + 1} ) ${educationQualifications[i]} <br>`);
console.log((i + 1) +")"+ educationQualifications[i]);
}

//Question no 8
//8. Write a program to store 3 student names in an array.
//Answer
let threeStudentNames = ["Ali", "Sara", "Ahmed"];
//take another array to store score of these three students.
let studentScores = [320, 450, 380];

let totalMarks = 500;
document.write("<h1>Student Names and Percentage:</h1>");
for( let i = 0; i < threeStudentNames.length; i++){
    let percentage = (studentScores[i] / totalMarks) * 100;
      document.write(`${threeStudentNames[i]} scored ${studentScores[i]} Out of ${totalMarks}. Percentage: ${percentage}% <br>`);
}


//Questin no 9
//9. Initialize an array with color names. Display the array
//Answer
let colors = ["red","blue","green","pink"]
document.write(`<h2>Initial colors:</h2> ${colors}`)

//a. Ask the user what color he/she wants to add to the
//beginning & add that color to the beginning of the array.
let colorAtBeginning = prompt("Enter a color you want to add at the beginning:");
colors.unshift(colorAtBeginning)
document.write(`<h2>After adding to Start:</h2> ${colors} `);

//b. Ask the user what color he/she wants to add to the end
//& add that color to the end of the array.
let colorAtEnd = prompt("Enter a color you want to add at the End:");
colors.push(colorAtEnd);
document.write(`<h2>After adding to End:</h2> ${colors}`);

// c) Add two more colors to the beginning
colors.unshift("Yellow", "Orange");
document.write(`<h2>After adding two colors at the beginning:</h2> ${colors}`);

// d) Delete the first color
colors.shift();
document.write(`<h2>After deleting the first  color at the beginning:</h2> ${colors}`);


// e) Delete the last color
colors.pop();
document.write(`<h2>After deleting the last  color at the End:</h2> ${colors}`);

// f) Add color at specific index
let indexToAdd = prompt("At which index do you want to add a color?");
let colorToAdd = prompt("Enter the color name:");

colors.splice(indexToAdd,0,colorToAdd)
document.write(`<h2>After adding color at index:</h2> ${colors}`);

// g) Delete color(s) at specific index
let indexToDelete = prompt("At which index do you want to delete color(s)?");
let countToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete,countToDelete)
document.write(` <h2> Delete color(s) at specific index</h2> ${countToDelete} color (s) from index ${indexToDelete} ${colors}  `)

//Question no 10
//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//Answer
let scores = [320, 230, 480, 120];
document.write(`<h1>Scores of Students:</h1> ${scores}`);
//using Array’s sort method.
scores.sort(function (a,b){ 
  return a-b
})
document.write(`<h1>Ordered Scores of Students: </h1> ${scores}`)
console.log(scores)

//Question no 11
//11. Write a program to initialize an array with city names.
//Answer
let cities =  ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
 
//Copy 3 array elements from cities array to selectedCities array.
let selectedCities = cities.slice(2,4)

document.write(`<h1>Cities list: </h1> ${cities}`);
document.write(`<h1>Selected cities list: </h1> ${selectedCities}`);
 
//Question no 12
//12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//Answer
var arr = ["This", "is" , "my", "cat" ];
var singleString = arr.join(" ");

document.write(`<h1>Array:</h1> ${arr}`);
document.write(`<h1>String:</h1> ${singleString}`);

//Question no 13
// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they  were stored. (FIFO-First In First Out)
//Answer

// Create an empty array
let queue = [];

// Store values one by one (enqueue)
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

//display stored values
document.write(`<h1>devices</h1> ${queue}<br><br>`)

// Access (remove) values in FIFO order (dequeue)
document.write(`Out:${queue.shift()}<br> `)
document.write(`Out:${queue.shift()}<br> `)
document.write(`Out:${queue.shift()}<br> `)
document.write(`Out:${queue.shift()}<br> `)

//Question no 14
//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
//Answer

// Create an empty array
let stack = [];

//Add values one by one push
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

//display stored values
document.write(`<h1>devices</h1> ${stack}<br><br>`)

// Access  values in FIFO order (dequeue)
document.write(`Out:${stack.pop()}<br>`);
document.write(`Out:${stack.pop()}<br>`);
document.write(`Out:${stack.pop()}<br>`);
document.write(`Out:${stack.pop()}<br>`);

//Question no 15
//15. Write a program to store phone manufacturers
//Answer
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]; 
document.write(`<h1>dropdown/select menu</h1>`)
//Display the following dropdown/select menu in your browser using document.write() method:
document.write(`<select>`)
for(let i = 0; i < manufacturers.length; i++){
  document.write(`<option>${manufacturers[i]} </option>`);
}
document.write(`</select>`)


document.write(`<center><h1>-- END -- </h1> </center> `);