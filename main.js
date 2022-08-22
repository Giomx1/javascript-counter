let add = document.getElementById("increment");//grabbing by id of increment and storing it in add variable
let subtract = document.getElementById("decrement");// grabbing my id of decrement and storing it in subtract variable
let theNumber = document.getElementById("number"); //grabbing my number id and storing it in theNumber variable
let integer = 0;//0 is our starting point. Our count of 0 will later change. In order to change it first must be stored in the integer variable

add.addEventListener("click", function(){//function will be called whenever event is triggered
  integer++;//when + is clicked, the number will increment
  theNumber.innerHTML = integer;//will return html content and make it appear on the page
})
subtract.addEventListener("click", function(){//the same thing was done here only thing different is it will decrement
  integer--;
  theNumber.innerHTML = integer;
})