var len = document.querySelectorAll(".drum").length;

for(var i = 0; i < len ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var pressed = this.innerHTML;
        // var s1 = new Audio("./sounds/crash.mp3");
        //         s1.play();
                
        console.log(pressed);
        switch (pressed) {
            case "w":
                var s1 = new Audio("./sounds/crash.mp3");
                s1.play();
                break;
            case "a":
                var s2 = new Audio("./sounds/kick-bass.mp3");
                s2.play();
                break;
            case "s":
                var s3 = new Audio("./sounds/snare.mp3");
                s3.play();
                break;
            case "d":
                var s4 = new Audio("./sounds/tom-1.mp3");
                s4.play();
                break;
            case "j":
                var s5 = new Audio("./sounds/tom-2.mp3");
                s5.play();
                break;
            case "k":
                var s6 = new Audio("./sounds/tom-3.mp3");
                s6.play();
                break;
            case "l":
                var s7 = new Audio("./sounds/tom-4.mp3");
                s7.play();
                break;
                 
            default:
                console.log("wrong choice!!!");
                break;
        }
        buttonAnimation(pressed);
    });
}


document.addEventListener("keydown",function(event){
    typed(event.key);
    buttonAnimation(event.key);
})


function typed(pressed){
     switch (pressed) {
            case "w":
                var s1 = new Audio("./sounds/crash.mp3");
                s1.play();
                break;
            case "a":
                var s2 = new Audio("./sounds/kick-bass.mp3");
                s2.play();
                break;
            case "s":
                var s3 = new Audio("./sounds/snare.mp3");
                s3.play();
                break;
            case "d":
                var s4 = new Audio("./sounds/tom-1.mp3");
                s4.play();
                break;
            case "j":
                var s5 = new Audio("./sounds/tom-2.mp3");
                s5.play();
                break;
            case "k":
                var s6 = new Audio("./sounds/tom-3.mp3");
                s6.play();
                break;
            case "l":
                var s7 = new Audio("./sounds/tom-4.mp3");
                s7.play();
                break;
                 
            default:
                console.log("wrong choice!!!");
                break;
        }
}

function buttonAnimation(option){
    document.querySelector("."+option).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+option).classList.remove("pressed")
    },20)
}
// document.querySelector("button").addEventListener("click", function  () {console.log("I am clicked!!!");});