function detectDevice(){
 const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return true;
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return true;
    }
    else{return false};
}
var score = 0
function checkdiv(){
    let numdiv = document.querySelectorAll('div:not(.gamediv)').length
    if(numdiv==2){window.location.href="score.html";sessionStorage.setItem("score", score)}if(numdiv==1 || numdiv === 0){return true}
}
function setchar(){
var color = localStorage.getItem("character")
    box=document.getElementById("block")
    color=parseInt(color, 10)
    console.log(color)
if(color==2){box.style.backgroundColor ="blue"}
if(color==1){box.style.backgroundColor="black"}
if(color==3){box.style.backgroundColor="green"}
if(isNaN(color)){alert("You have not picked a character");window.location.assign("blzstart.html")}    
 localStorage.clear()
}
    function divgen(){
const ndiv=document.createElement('div');
ndiv.id="target";
document.body.appendChild(ndiv);
 ndiv.style.border="solid 1px black";
    ndiv.style.height="50px"
    ndiv.style.width="50px"
ndiv.style.background = "red";
ndiv.style.top="30px";
    ndiv.style.left=Math.floor(Math.random() * 845)+"px";
ndiv.style.position="absolute";
 checkdiv()                
}

  function overlap(el1, el2) {
const Rect1 = el1.getBoundingClientRect();
  const Rect2 = el2.getBoundingClientRect();

  return !(
    Rect1.top > Rect2.bottom ||
    Rect1.right < Rect2.left ||
    Rect1.bottom < Rect2.top ||
    Rect1.left > Rect2.right
  );
 }
const b = document.getElementById("circle")
function getxpos(elment) {
                        const rect = elment.getBoundingClientRect();
                        return {
                            left: rect.left + window.scrollX
                                }
} 
function getypos(elment){const rect = elment.getBoundingClientRect();
                        return {top: rect.top + window.scrollY}}
                window.addEventListener('keydown', event=>{
                if(event.key === "Escape"){    
                if(confirm("Are you sure you want to end the game?")){
                window.location.href="score.html"
                }else{
                javascript:void(0)
                }
                }
                })
                window.addEventListener('mousemove', mouse)
                function mouse(){
                if(event.pageY>300){document.getElementById("block").style.top=event.pageY+"px"
                document.getElementById("block").style.left=event.pageX+"px"}   
                }
                function play(){
                const b = document.getElementById("circle")
                var positio=getxpos(document.getElementById("block")).left
                b.style.left = positio+"px"
                b.style.position="absolute"
                b.style.top = "30px"
                b.style.display="block";
                    setTimeout(clearr, 30)
                if (checkdiv()){if(overlap(document.getElementById("target"), b)){
                                   score=score+1
                                    console.log("YYAY")
                                    document.getElementById("target").remove();
                                   }}
                  
               }
localStorage.setItem("highscore",score) 
if(detectDevice()==true){var x = 2500; document.getElementById("block").style.height="40px"; document.getElementById("block").style.width = "70px" }
if(detectDevice()==false){var x = 1000}
setInterval(divgen, x)
           document.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                play() 
            }})
function clearr(){document.getElementById("circle").style.display="none"};