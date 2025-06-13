class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/images/DemoCh.png",
        });
    }
    update(){}

    /*async setTimeout (() => {
    await eventHandler.init();

     },10); */
}

class Person extends GameObject{
    constructor(config) {
    super(config);
    this.movingProgress = 0;

    this.isPlayer = config.isPlayer || false;

    this.directionUpdate = {
        "up": ["y",-1],
        "down": ["y",1],
        "left": ["x",-1],
        "right": ["x",1]
    }
    }
    update(state){
        if (this.movingProgress > 0) {
        this.updatePosition();
        }else{

            //arrow is pressed
            if ( this.isPlayer && state.arrow){
                this.startBehavior(state,{
                    type:"walk",
                    direction: state.arrow
                })
            } this.updateSprite(state);
            
            items.place(this.x,this.y,this.direction)
            items.item(id)
            //if (id !== ""){console.log(id)}
        }
    }
    startBehavior(state, behavior){
        this.direction = behavior.direction;
        if (behavior.type=== "walk"){
        if (state.map.isSpaceTaken(this.x, this.y, this.direction)){
            return; 
        }
        this.movingProgress = 16;
    }
    }

    updatePosition(){
            const [property, change] = this.directionUpdate[this.direction];
            this [property] += change;
            this.movingProgress -= 1;
        
    }

    updateSprite(){

        if (this.movingProgress > 0){
            this.sprite.setAnim("walk-"+this.direction);
            return;
        }
        this.sprite.setAnim("idle-"+this.direction);

    }

    
} 


