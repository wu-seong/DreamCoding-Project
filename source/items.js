export default class Items{
    constructor(target, disturb, targetCount, disturbCount){
        this.target = target;
        this.disturb = disturb;
        this.targetCount = targetCount;
        this.disturbCount = disturbCount;
        this.ground = document.querySelector(".ground");
        this.ground.addEventListener("click", (e) => this.setOnClick(e));
    }
    setOnClick(e){
        if(e.target.className == this.disturb){
            this.onItemClick();
        }
        else if(e.target.className == this.target){
            e.target.remove(); 
            if(document.querySelector(`.${this.target}`)){
                return
            }
            this.onItemClick();
            alert("you WIN");
        }
    }
    setOnItemClick(callback){
        this.onItemClick = callback;
    }
    init(){
        while(this.ground.firstChild){
            this.ground.removeChild(this.ground.lastChild);
        }
        this._create();
    }
    _create(){
        for(let i = 0; i < this.targetCount; i++){
            this._make(this.target);
        }
        for(let i = 0; i < this.disturbCount; i++){
            this._make(this.disturb);
        }
    } 
    _make(Item){
        const itemElement = document.createElement("img");
        itemElement.setAttribute("class",Item);
        itemElement.setAttribute("src",`../img/${Item}.png`);
        const coordinateX = Math.floor(Math.random()*1100);
        const coordinateY = Math.floor(Math.random()*250);
        itemElement.style.top =`${coordinateY}px`;
        itemElement.style.left = `${coordinateX}px`;
        this.ground.append(itemElement);
    }
}