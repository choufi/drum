var numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButtons; i++) {
    document.querySelectorAll(".drum") [i].addEventListener("click" , function() {
    
    var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            case "s":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

            case "d":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                    
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

                
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

                
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        
            default:
                console.log("nofunciona")
                break;
        }  

        buttonAnimation(buttonInnerHTML);

    } )
}

document.addEventListener("keydown", (event) => {
  var keyName = event.key;
  var keyCode = event.code;
    if (event.code === "KeyW") {
        var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            
        } else if (event.code === "KeyA") {
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
        } else if (event.code === "KeyS") {
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
        } else if (event.code === "KeyD") {
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
        } else if (event.code === "KeyJ") {
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
        } else if (event.code === "KeyK") {
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        } else if (event.code === "KeyL") {
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        } 
        buttonAnimation(event.key);   
        } )


//función para la animación del sombreado al pulsar o clicar. 

function buttonAnimation (currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

//timer function below (para que el efecto "pressed" no dure al infinito)

setTimeout (function () {

activeButton.classList.remove("pressed");
}, 100);

}


