// function sayhello(){
// return("Hello, World");
// }
// // don't leave out the brackets when after the function
// let result = sayhello();

// console.log(result);

function sayhello (name,lastname){
    let message = "Hello";
    return message +" "+ name +" "+ lastname;
}

let name = prompt(" what\'s your name?")
let lastname= prompt("What\'s your lastname?")

alert(sayhello(name, lastname));


function smallTalk ( music){
    let message = " I know";
    return message +" "+ music +" "+ "Rocks!";
}

let music = prompt(" what\'s your favourite music genre eg. jazz, Pop, RnB etc?")

alert(smallTalk( music));