/*start 버튼을 누르면 timer가 작동, carrot과 bug가 랜덤배치 
bug는 누르면 game over
carrot은 누르면 삭제, carrot count, /count-max일 때 win

initial -> playing -> game over || game win ->(re)playing
              v
            replay  
*/
const $ = (selector) =>document.querySelector(selector);

$(".play").addEventListener("click", playGame);
$(".redo").addEventListener("click", playGame);
function setGame(difficulty){
    //if(difficulty =="easy"){
        createItems(10, 10);
    //}
    //if(difficulty =="hard"){
    //    createItems(20, 10);
    //}
    setUI();
}
function createItems(bugCount, carrotCount){
    for(let i = 0; i < bugCount; i++){
        createBug();
    }
    for(let i = 0; i < carrotCount; i++){
        createCarrot();
    }
} 
function setUI(){
    $("#start").style.display = "none";
    $(".timer").style.display = "block";
    $(".restart").style.display = "none";
    
}
function playGame(){
    setGame();
    const timeControllers = getTimer();
    const startTimer = timeControllers[0];
    const reduceTimer = timeControllers[1];
    $(".ground").addEventListener("click",handler);
    function handler(e){
        if(e.target.className =="bug"){
            stopTimer(startTimer, reduceTimer);
        }
        else if(e.target.className =="carrot"){
            e.target.remove();
            if($(".carrot")){
                return
            }
            stopTimer(startTimer, reduceTimer);
            alert("you WIN");
        }
    }
    function stopTimer(startTimer, reduceTimer){
        $(".ground").removeEventListener("click", handler);
        clearTimeout(startTimer);
        clearInterval(reduceTimer);
        setEnd();
    }
    function getTimer(){
        const timeStart = setTimeout(() =>{ 
            stopTimer(timeStart, timer)}, 10000);
        let timeLimit = 10;
        $(".timerCount").innerText = timeLimit--;
        const timer = setInterval( () => {$(".timerCount").innerText =` ${timeLimit--}`;
        }, 1000);
       return [timer,timeStart];
    }
    
}
function setEnd(){
        removeItems();
        $(".timer").style.display = "none"
        $(".restart").style.display = "block";
       
}


function createBug(){
    const bug = document.createElement("img");
    bug.setAttribute("class","bug");
    bug.setAttribute("src","/img/bug.png");
    const coordinateX = Math.floor(Math.random()*1100);
    const coordinateY =Math.floor(Math.random()*250);
    bug.style.top =`${coordinateY}px`;
    bug.style.left = `${coordinateX}px`;
    $(".ground").append(bug);
}
function createCarrot(){
    const carrot = document.createElement("img");
    carrot.setAttribute("class","carrot");
    carrot.setAttribute("src","/img/carrot.png");
    const coordinateX = Math.floor(Math.random()*1100);
    const coordinateY =Math.floor(Math.random()*250);
    carrot.style.top =`${coordinateY}px`;
    carrot.style.left = `${coordinateX}px`;
    $(".ground").append(carrot);
}
function removeItems(){
    while($(".ground").firstChild){
        $(".ground").removeChild($(".ground").lastChild);
    }
}


