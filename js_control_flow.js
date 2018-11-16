var hot = false;
var temp = 50;

// condition if and else
if(temp > 80){
    console.log("Hot Outside!");
}else if(temp <= 80 && temp >= 50){
    console.log("Average temp Outside");
}else if (temp >=50 && temp >= 32){
    console.log("Tt's pretty cold outside!");
}else {
    console.log("Tt's cold outside.")
}

// another example
var ham =0;
var cheese =0;

var report = "blank";

if (ham >= 10 && cheese >= 10){
    report = "Strong salses of both ham and cheese"
}else if(ham == 0 && cheese == 0){
    report = "Poor sales"
}else{
    report = "Have some sale"
}

console.log(report);


//while loop

var x = 0;

while(x<5){
    console.log("x is currently: " +x);
    console.log("x is still less than 5. adding 1 to x");

    x = x+1;
}

//add if loop
var x = 0;

while(x<5){
    console.log("x is currently: " +x);
    console.log("x is still less than 5. adding 1 to x");

    if (x === 3){
        console.log("x is equal to three.");
        break;
    }

    x = x+1;
}

// while loop to print the even numbers from 1 to 10

var num = 0;

while(num < 11){
if(num % 2 === 0){
    console.log(num);
}
num += 1;
}

// for loop
// num = num + 1, num ++, num += 1 is same
// for (statement1; statement2; statement3){
    //Execute some code
// }
// for (var i=0; statements2; statement3){
    //Execute some code
// }
// for (var i=0; i<5; statement3){
    //Execute some code
// }
// for (var i=0; i<5; i++){
    //Execute some code
// }

var word = "ABCDEFGHIJK"

for(var i = 0; i < word.length; i++){
    console.log(word[i]);
}

// problem 1: print hello 5 times

var word = "hello";

for(var i = 0; i < word.length; i++){
    console.log(word);
}

var i = 0;
while(i < 5){
    console.log(word);
    i += 1;
}

// problem 2:print out the odd numbers from 1 to 25(include)

// while loop

var i = 0;

while(i < 26){
    if (i % 2 === 1){
        console.log(i);
    }
    i += 1;
}

// for loop

for(var i = 0; i < 26; i ++){
    if(i % 2 === 1){
        console.log(i);
    }
}

// problem 2:print out the odd numbers from 1 to 25(not include)
// while loop

var i = 1;

while(i < 25){
    if (i % 2 !== 0){
        console.log(i);
    }
    i += 1;
}

