//sytax
function hello(){
    console.log("hello world");
}

function hello(name){
    console.log("hello " + name);
}

function hello(name="Dong"){
    console.log("hello "+ name);
}

function formal(name="Tim", title="Sir"){
    console.log(title + " " +name);
}

function timeFive(numInput){
    var result = numInput * 5;
    return result;
}

// result is in local scope

// global scope
var v = "Global v"
var stuff = "Global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}

fun()
console.log(stuff);


//
function formal(name="Sam",title="Sir"){
    console.log(title+" "+name)
}

"Welcome " + formal()
// Welcome undefined


// With a return
function formal(name="Sam",title="Sir"){
    return title+" "+name;
}

//
"Welcome "+formal()
//

var result = formal()
