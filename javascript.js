let output = document.getElementById("output-text")
let btn = document.getElementById("btn")
let score = document.getElementById("score")
let chances = document.getElementById("chances")
let winImage = document.getElementById("image")
let winMusic = new Audio("music.mp3")
let restartBtn = document.getElementById("restartBtn")

let number = Math.floor(Math.random( ) * 5)
btn.addEventListener("click" , function(){
    let input = document.getElementById("input").value;


    if(input == number){
output.innerHTML = ` You guessed right, your number was ${number}`
winImage.style.display = "inherit"
winMusic.play()


    }
else if(input > number){
    output.innerHTML = `Number is too High`
}
else if(input < number){
    output.innerHTML = `Number is too Low`

}


})
restartBtn.addEventListener("click",function(){
output.innerHTML = "Enter a Number Below :"
input.value = "0";
winImage.style.display = "none"
winMusic.pause()
winMusic.currentTime = 0









})