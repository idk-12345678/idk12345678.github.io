function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var y = getRandomInt(50)
var q = 1
console.log(y)
function checkguess(){
    var x= document.getElementById("inp").value
    if(x == y){alert("You guessed correctly in "+ q +" tries!" )
document.body.innerHTML = "Score = " + q
}
    else if(x>y){
        var w = window.open('','','width=100,height=100')
    
    w.document.write('Incorrect. Hint: the number is less than '+ x)
    w.focus()
    setTimeout(function() {w.close();}, 1000)
    q+=1
    document.getElementById("inp").value = ""}
    else if(x<y){
        var w = window.open('','','width=100,height=100')
    
    w.document.write('Incorrect. Hint: The number is greater than '+ x)}
    w.focus()
    setTimeout(function() {w.close();}, 800)
    q+=1
    document.getElementById("inp").value = ""
    }