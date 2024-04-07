let hitNum = document.querySelector(".dplay");
let timeVal = document.querySelector(".dtimer");
let pbtm = document.querySelector(".pbottom");
let scoreVal = document.querySelector(".dscore");


var score=0;
function myScore() {
    score+=10;
    scoreVal.textContent = score;
}
// myScore();
pbtm.addEventListener("click", (dets) => {
    var clickedNum = Number(dets.target.textContent);
    if (clutter == clickedNum) {
        myScore();
        myBubble();
        myhitNum();

    }
});


let clutter = 0;
function myhitNum() {
  clutter = Math.ceil(Math.random() * 10);
  hitNum.innerHTML = `${clutter}`;
}
myhitNum();


var timer= 60;
function myTimer() {
   let timerint = setInterval(function () {
    if (timer > 0) {
        timer--;
        timeVal.textContent=timer;
    } else {
        clearInterval(timerint);
        pbtm.innerHTML= "<h1>Reload the page to start the game again</h1>";
    }
   }, 1000) 
}
myTimer();


function myBubble() {
  let bubbler = "";
  for (let i = 1; i <= 81; i++) {
    bubbler += `<div class = "bubble">${Math.ceil(Math.random() * 10)} </div>`;
  }
  pbtm.innerHTML = `${bubbler}`;
}
myBubble();

