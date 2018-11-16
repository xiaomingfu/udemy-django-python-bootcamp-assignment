var ls = [];

function addName(){
    var name = prompt("What name would you like to add? ");
    ls.push(name);
}

function display(){
    console.log(ls)
}

function remove(){
    var remName = prompt("What name would you like to remove?");
    var index = ls.indexOf(remName);
    ls.splice(index,1)
}

var start = prompt("Would you like to start the roster web app? y/n");
var choice = "empty";

if(start === "y"){
    while(choice != "quit"){
        choice = prompt("Please select an action: add, remove, display, or quit.")
        if(choice === "add"){
            addName();
            
        }
        else if(choice === "display"){
            display();
            
        }
        else if(choice === "remove"){
            remove();
            
        }
    }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")






