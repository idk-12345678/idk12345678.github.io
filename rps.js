var thing
function redirfunc(){window.location.assign("ishantgames.html")}
function rock(){
 thing =  "Rock"
}
function paper(){thing="Paper"}
function scissors(){thing="Scissors"}
function w(){document.getElementById("urthing").innerHTML = "You did:" + "  "+thing}
const arr = ["Rock" , "Paper" , "Scissors"];
function x(){var computerel = arr[Math.floor(Math.random() * arr.length)];document.getElementById("compu").innerHTML = "Thinking...";window.setTimeout(() => document.getElementById("compu").innerHTML = "The computer did:"+" "+computerel, 500)
             console.log(thing + computerel)
            if(thing == computerel){document.getElementById("re").innerHTML = "Tie!"}
             if(thing == "Rock" && computerel == "Scissors"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You win!", 600)}
             if(computerel == "Rock" && thing == "Scissors"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You lose.", 600)}
             if(thing == "Scissors" && computerel == "Paper"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You win!", 600)}
             if(computerel == "Scissors" && thing == "Paper"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You lose.", 600)}
             if(thing == "Paper" && computerel == "Rock"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You win!", 600)}
             if(computerel == "Paper" && thing == "Rock"){window.setTimeout(() =>document.getElementById("re").innerHTML = "You lose.", 600)}
            }