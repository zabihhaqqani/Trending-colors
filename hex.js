const colors = ["#475569", "#4b5563"," #52525b"]




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