const colors = ["#EF4444","#F59E0B","#EAB308","#84CC16","#22C55E","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#4F46E50","#A855f7","#F43f5E"]

// selecting button
let btn = document.getElementById("btn");

//selecting background
let color = document.querySelector(".color")

//click handler
btn.addEventListener("click", function clickHandler(){
  
    let randomNumber = random()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

});

//to get a random number everytime button is clicked
function random(){
    return Math.floor(Math.random()*colors.length)
}

