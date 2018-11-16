var fn = prompt("Hello and Welcome. Please enter your first name:");
var ln = prompt("Please enter your Last Name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");

// condition need to be true
// set to null first
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//spy condition
if(fn === ln){
    nameCond = true;
}else{
    nameCond = false;
}

// ...

//check all four condition
if(namecond && agecond && heightcon && petcond){
    console.log("spy");
}else{
    console.log("pass");
}