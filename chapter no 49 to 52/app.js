//Question no 1
//  1. Create a signup form and display form data in your webpage on submission.
//Answer

document.getElementById("signupForm").addEventListener("submit",function(event){
event.preventDefault();


let name = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

document.getElementById("result").innerHTML = `
 <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});

//Question no 2
//2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Readmore” button, full detail of that particular item will be displayed.
//Answer

document.getElementById("btn").addEventListener("click",function(){
    let moreText = document.getElementById("moreText");
    if(moreText.style.display === "none"){
        moreText.style.display = "inline";
        this.textContent = "Read Less";
    } 
    else{
        moreText.style.display = "none";
        this.textContent = "Read More";
    }
});

//Question no 3
// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

//Answer
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

 let editRow = null;

 form.addEventListener("submit",function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let grade = document.getElementById("grade").value;


  // create table row
  let row = document.createElement("tr");
row.innerHTML =`
<td>${name}</td>
<td>${age}</td>
 <td>${grade}</td>
 <td>
    <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </td>`;

    table.appendChild(row);
    form.reset();

 });

 // DELETE & EDIT buttons (event delegation)
 table.addEventListener("click",function(event){

      // DELETE
    if(event.target.classList.contains("deleteBtn")){
        event.target.parentElement.parentElement.remove();
    }

     // EDIT
     if(event.target.classList.contains("editBtn")){
   editRow = event.target.parentElement.parentElement;
  
    // fill hidden form with existing data  
    document.getElementById("editName").value = editRow.children[0].textContent;
    document.getElementById("editAge").value = editRow.children[1].textContent;
    document.getElementById("editGrade").value = editRow.children[2].textContent;
    document.getElementById("editSection").style.display = "block";
}
 });
 //Save changes button
 document.getElementById("saveBtn").addEventListener("click",function(){
    editRow.children[0].textContent =document.getElementById("editName").value;
    editRow.children[1].textContent =document.getElementById("editAge").value;
    editRow.children[2].textContent =document.getElementById("editGrade").value;
    document.getElementById("editSection").style.display = "none";
 });


document.write(`<center><h1>-- END -- </h1></center>  `);