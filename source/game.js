import Items from './items.js';
import UI from './UI.js';
import Timer from './timer.js';
const $ = (selector) =>document.querySelector(selector);

export default class GameBuilder{
    constructor(){}
    target(target){
        this.target = target;
        return this;
    }
    disturb(disturb){
        this.disturb = disturb;
        return this;
    }
    targetCount(tgC){
        this.tgC = tgC;
        return this;
    }
    disturbCount(dtC){
        this.dtC = dtC;
        return this;
    }
    playTime(playTime){
        this.playTime = playTime;
        return this;
    }
    build(){
        return new Game(this.target, this.disturb, this.tgC, this.dtC, this.playTime);
    }
}
class Game{
    constructor(target, disturb, targetCount, disturbCount, playTime){
        this.target = target;
        this.disturb = disturb;
        this.targetCount = targetCount;
        this.disturbCount = disturbCount;
        this.playTime = playTime;
        this.timer =new Timer(this.playTime);
        this.gameUI =new UI();
        this.Item =new Items(this.target, this.disturb, this.targetCount, this.disturbCount);
        
        this.gameUI.setStartBtn(() => this.start());
        this.timer.setTimeover(() => this.end());
        this.Item.setOnItemClick(() => this.end());
    }
    start(){
        this.gameUI.playing();
        this.timer.set();
        this.Item.init();
    }
    end(){
        this.gameUI.finished();
        this.timer.remove();
    }
}