//Question no 1
//1. Show an alert box on click on a link.
//Answer

let link = document.getElementById("mylink");
link.addEventListener("click",function(){
    alert("thanks for click me 😊");
})

//Question no 2
//2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
//Answer

const phones = document.querySelectorAll(".phone");
phones.forEach(function (img) {
    img.addEventListener("click",function(){
        alert("Thanks for purchasing a Phone from us 😊!!")
    })
});

//Question no 3
//3. Display 10 student records in table and each row should contain a deletebutton. If you click on a button to delete a record, entire row should be deleted.
//Answer

// Select all delete buttons
const deleteButtons = document.querySelectorAll(".deleteBtn");

// Loop through each button
deleteButtons.forEach(function(button){
    button.addEventListener("click", function(){
        // parentElement = <td>, parentElement.parentElement = <tr>
        let row = button.parentElement.parentElement;
        row.remove(); // delete the row
    });
});

//Question no 4
//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
//Answer

const image = document.getElementById("pic");
 const message = document.getElementById("msg");


image.addEventListener("mouseover",function(){
image.src = "images/sukuns.jpg";
  message.textContent = "Pic 1 on Mouseover"; 
});
image.addEventListener("mouseout" , function(){
    image.src="images/gojo.jpg";
       message.textContent = "";
    
});

//Question no 5
//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
//Answer
 let counter = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

//Increase
increaseBtn.addEventListener("click",function(){
    counter++;
    countDisplay.textContent = counter;
});
//decrease
decreaseBtn.addEventListener("click",function(){
        if(counter > 0){
        counter--;
    }
    countDisplay.textContent = counter;

});
resetBtn.addEventListener("click",function(){
    counter =  0;
     countDisplay.textContent = counter;
})

document.write(`<center><h1>-- END -- </h1></center>  `);