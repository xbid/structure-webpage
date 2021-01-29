
// var userInput = prompt('What do you do for living');
//    console.log(userInput);
// alert('Ok you are a ' + userInput + ' Thats Amazing');

// var marks = prompt('What Mark did you get in your tasks');
// if(marks >= 100 ){
//    document.write('<h2>'+' Thats Great I hope to get that mark too in the end'+'</h2>');
// }else if(marks < 100){
//    document.write('<h2>'+'Dont quit just yet Study hard keep searching and you will get more than that '+'</h2>');
// }else if (mark = 0 ){
//    document.write('<h2>'+'what is this are you sleeping during the class get up i will help you'+'</h2>');
// }else{
//    alert('<h2>' + 'Welcome! you can get what ever you want if you just focus' + ' </h2>');
// };

// var input = document.getElementById('color');
// var button = document.querySelector('button');
// button.addEventListener('click', function( event ) {
//   event.preventDefault();    
//   var color = input.value;
//   document.body.style.background = color;
// });

// var color = confirm('Do you prefer to change page color ?');

// if(color == true){
//     var switchColor = prompt('Type in any color you want the page to turn on!','the color');
//    document.body.style.backgroundColor = switchColor;
// }else{
//   alert('Why You didnt change the color anyway its up to you, Come on in you are welcome');
// };

// var u= confirm("Mansaf | Makmooraa | Burger")

// var i = prompt("What is your favourite food?","Type here")

// while(!(i=="Mansaf" || i=="Makmoora" || i=="Burger")){

//   i=prompt("Enter a correct value")
// }
// var j= prompt("How often do you Eat " + i)

// var image = " ";

    
//     for(var f = 0; f < j; f++){
//        if(i =='Mansaf'){
//             image = image + '<img src="https://www.cheftariq.com/wp-content/uploads/2020/04/mansaf-4-1-500x500.jpg">'
//             console.log(image)
            
//         }else if(i =="Makmoora"){
//             image = image +'<img src="https://theculturetrip.com/wp-content/uploads/2017/03/b49d1b867772f191a0dbcda19596982aef8428cd.jpg">'
      
//         }else if(i =="buger"){
//             image = image +'<img src="https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg">' 
//     }

//   }

// document.write(image)

var food= confirm('                 You are in the resturant\n\nAnd there is only these options in the Menu:\n\n           Mansaf  |  Makmooraa  |  Burger')
 
var foodFav = prompt('What You are going to choose?'  , 'Mansaf or Makmooraa or Burger')

while(!(foodFav=="Mansaf" || foodFav=="Makmoora" || foodFav=="Burger"))
{
    foodFav = prompt("Enter one of these Meals Please", 'Mansaf or Makmooraa or Burger' )
}


var userSal = prompt('What salary do you want to achieve in future?\n\n                              ?!WARNING!?\n\n   For Reasonable purposes keep it short\n\n   or you can try a million on your own risk!', 'Type the Amount here' )
moneyImg = ''; 
for(i = 1 ; i <= userSal ; i++)
{
  
   moneyImg = moneyImg + '<img src= "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6b7c5fa6-b824-4430-b544-2102ad555fd1.jpg?source=next-opengraph&fit=scale-down&width=900" width="500px" >'
  
     console.log(moneyImg);
        
    
   

}

alert('Dream big Work Hard And You will achieve more than that')

document.write(moneyImg)