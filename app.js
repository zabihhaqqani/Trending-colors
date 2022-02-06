const colors = ["#ef4444","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#4f46e50","#a855f7","#f43f5e"]

// selecting button
let btn = document.getElementById("btn");

//selecting background
let color = document.querySelector(".color")


btn.addEventListener("click", function clickHandler(){

    let randomNumber = random()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

});

//to get a random number everytime button is clicked
function random(){
    return Math.floor(Math.random()*colors.length)
}