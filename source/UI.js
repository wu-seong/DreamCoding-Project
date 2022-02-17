export default class UI{
    constructor(){
        this.startBtn =document.querySelector("#start");
        this.restartBtn =document.querySelector(".restart"); 
        this.timer =document.querySelector(".timer");
        this.startBtn.addEventListener("click", () => this.clickStartBtn()); 
        this.restartBtn.addEventListener("click", () => this.clickStartBtn()); 
    }
    setStartBtn(callback){
        this.start = callback;
    }
    clickStartBtn(){
        console.log("click");
        this.start&&this.start();
    }
    playing(){   
        this.startBtn.style.display = "none";
        this.restartBtn.style.display = "none";
        this.timer.style.display = "block";
    }
    finished(){
        this.startBtn.style.display = "none";
        this.restartBtn.style.display = "block";
        this.timer.style.display = "none";
    }
}