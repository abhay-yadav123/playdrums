var numbutton= document.querySelectorAll(".drum").length;

for (var i = 0; i < numbutton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
  function clicked() {
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml);
    addanimation(buttoninnerhtml)
   
      
   
    
  }
}
document.addEventListener("keypress",function(event){
  makesound(event.key)
  addanimation(event.key)
})
function makesound(key){
  switch (key) {
    case "w":
       var audio= new Audio("crash.mp3")
       audio.play();
      
      break;
    case "a":
      var audio1= new Audio("kick-bass.mp3")
       audio1.play();
       break;
    case "s":
      var audio2= new Audio("snare.mp3")
       audio2.play();
       break;
    case "d":
      var audio3= new Audio("tom-1.mp3")
       audio3.play();
       break;
    case "j":
      var audio4= new Audio("tom-2.mp3")
       audio4.play();
       break;
    case "k":
      var audio5= new Audio("tom-3.mp3")
       audio5.play();
       break;
      
    case "l":
      var audio5= new Audio("tom-4.mp3")
       audio5.play();
       break;
       default:
        break;
     } 

}
function addanimation(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(() => {
    activebutton.classList.remove("pressed");
  }, 100);
}