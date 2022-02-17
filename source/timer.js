export default class Timer{  //time을 count하고 timeout시 callback을 실행시킨다 
    constructor(playTime){
        this.playTime = playTime;
        this.timer = undefined;
        this.delayTime =playTime*1000;
    }
    setTimeover(callback){
        this.timeOver = callback;
    }
    set(){
        let remainedTime = this.playTime;
        updateTimer();
        this.timer = setInterval( () => {
            if(remainedTime <= 0){    //시간초과 경우
                this.timeOver();
                this.remove();
                return;
            }
            updateTimer()
        }, 1000);
    
        function updateTimer(){
            document.querySelector(".timerCount").innerText =` ${remainedTime--}`
        }
        
    }
    remove(){
        clearInterval(this.timer);
    }
}