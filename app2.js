var c= confirm("1- Mansaf / 2- Makmooraa / 3- Burger")
var i = prompt("What is your favourite food/","Type here")

while(!(i=="Mansaf" || i=="Makmoora" || i=="Burger")){

i=prompt("Enter Your type")
}
var c= prompt("How often do you Eat " + i)
var image = " ";


for(var j = 0; j < x; j++){
    
   if(i == "Mansaf"  ){
       image = image + '<img src"">'
       console.log(image)
    }else if(i =="Makmoora"){
       image = image + '<img src""> '
        console.log(image)
    }else if(i == "Burger"){

       image = image + '<img src""> '
        console.log(image)
    }
    
    
    for(var j = 0; j < x; j++){
       if(i =='Mansaf'){
            image = image + '<img src="https://www.cheftariq.com/wp-content/uploads/2020/04/mansaf-4-1-500x500.jpg">'
            console.log(image)
            
        }else if(i =="Makmoora"){
            image = image +'<img src="https://theculturetrip.com/wp-content/uploads/2017/03/b49d1b867772f191a0dbcda19596982aef8428cd.jpg">'
      
        }else if(i =="buger"){
            image = image +'<img src="https://media-cdn.tripadvisor.com/media/photo-s/17/ba/a6/31/burger.jpg">' 
    }
    
    
  }

document.write(image);