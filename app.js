
var userInput = prompt('What do you do for living');
    console.log(userInput);
 alert('Ok you are a ' + userInput + ' Thats Amazing by the way');

var marks = prompt('What Mark did you get in your tasks');
if(marks >= 100 ){
    document.write('<h2>'+' Thats Great I hope to get that mark too in the end'+'</h2>');
}else if(marks < 100){
    document.write('<h2>'+'Dont quit just yet Study hard keep searching and you will get more than that '+'</h2>');
}else if (mark = 0 ){
    document.write('<h2>'+'what is this are you sleeping during the class get up i will help you'+'</h2>');
}else{
    alert('<h2> ' + 'Welcome! you can get what ever you want if you just focus' + ' </h2>');
};

var button1 = document.querySelector("button");

button1.addEventListener("click", function() {

    document.body.classList.toggle("colorred");

});