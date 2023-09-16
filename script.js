var timer = 60;

var val;
var score=0;
function makebubble() {
    var clutter = "";
    for (var i = 0; i < 300; i++) {
        var num = parseInt(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
    var interval = setInterval(function () {
        document.querySelector("#box3").textContent = --timer;
        if(timer%5==0)
            makebubble();
        if (timer == 0) {
            document.querySelector("#pbtm").innerHTML = `<img class="end" src="./endgame.jpg" >`;
            clearInterval(interval);
        }
    }, 1000)
}
function newhit() {
    val = parseInt(Math.random() * 10);
    document.querySelector("#box2").textContent = val;
}
function validhit(){
    score+=10;
    document.querySelector("#box1").textContent=score;
    makebubble();
} 
document.querySelector("#pbtm").addEventListener("click",function(debts){
   console.log(debts.target);
    if(parseInt(debts.target.textContent)==val){
        validhit();
        newhit();
    }
})
makebubble();
newhit();
runtimer();
//validhit();
