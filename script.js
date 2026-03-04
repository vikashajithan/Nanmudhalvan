document.getElementById("registrationForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let dob=document.getElementById("dob").value;
let event=document.getElementById("event").value;
let college=document.getElementById("college").value.trim();

let gender=document.querySelector('input[name="gender"]:checked');
let mode=document.querySelector('input[name="mode"]:checked');

let confirm=document.getElementById("confirm").checked;

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""){
alert("Name cannot be empty");
return;
}

if(!emailPattern.test(email)){
alert("Enter valid email");
return;
}

if(!/^\d{10}$/.test(phone)){
alert("Phone must be 10 digits");
return;
}

if(dob===""){
alert("Select Date of Birth");
return;
}

if(!gender){
alert("Select Gender");
return;
}

if(event===""){
alert("Select Event");
return;
}

if(!mode){
alert("Select Mode");
return;
}

if(college===""){
alert("Enter College or Company name");
return;
}

if(!confirm){
alert("Please confirm the declaration");
return;
}


let table=document.getElementById("participantsBody");

let row=document.createElement("tr");

row.innerHTML=`
<td>${name}</td>
<td>${email}</td>
<td>${phone}</td>
<td>${event}</td>
<td>${mode.value}</td>
`;

table.appendChild(row);


let msg=document.getElementById("successMessage");

msg.innerText="Registration Successful!";
msg.style.color="green";

setTimeout(()=>{
msg.innerText="";
},3000);


document.getElementById("registrationForm").reset();

});