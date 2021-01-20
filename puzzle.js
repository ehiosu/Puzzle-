const guesses = 3;

var y = document.getElementById("textbox1");
var answerin = y.textContent ;
const answer = 6210001000;
document.getElementById("sub").addEventListener("Click",function(){
  while(guesses <10 ){
alert(answerin)
  if(answerin !== answer && guesses < 10){
    alert("wrong answer" + "you have "+guesses+ " left ")
    guesses = guesses + 1;
    console.log("checked");
  }else if (answerin === answer ) {
    alert("congrats!you got it");

    break;
  }
}
}

  })
