class Sprite{
    constructor(config) {

        //set up image
        this.image = new Image();
        this.image.src = config.src;
        this.isLoaded = false;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        this.shadow = new Image();
        this.useShadow = true; //checks if sprite needs a shadow
        if (this.useShadow){
            this.shadow.src = "/images/Shadow.png"
        }
        this.shadow.onload = () => {
            this.isShadowLoad = true;
        }
        
        //configuring
        this.animation = config.animation || {
            "idle-down": [ [0,0] ],
            "idle-right":[[0,1]],
            "idle-left":[[0,3]],
            "idle-up":[[0,2]],
            "walk-down": [ [1,0],[0,0],[3,0], [0,0] ],
            "walk-up":[[1,2],[0,2],[3,2],[0,2] ],
            "walk-right":[[1,1],[0,1],[3,1],[0,1] ],
            "walk-left":[[1,3],[0,3],[3,3],[0,3] ] 
        }

        this.currentAnim = "idle-down"; //config.currentAnim ||"idle-down";
        this.currentAnimFrame = 0;
        this.AnimFrameLimit = config.AnimFrameLimit || 8; //speed
        this.AnimFrameProgress = this.AnimFrameLimit;

        this.gameObject = config.gameObject;
        }

        get frame() {
            return this.animation[this.currentAnim][this.currentAnimFrame]
        }
    

    setAnim(key){
        if (this.currentAnim !== key) {
            this.currentAnim = key;
            this.currentAnimFrame = 0;
            this.AnimFrameProgress = this.AnimFrameLimit;
        }
    }

    updateAnim(){
        if (this.AnimFrameProgress > 0 ){
            this.AnimFrameProgress -= 1;
            return;
        }
        this.AnimFrameProgress = this.AnimFrameLimit;
        this.currentAnimFrame += 1;
 
        if (this.frame === undefined) {
            this.currentAnimFrame = 0;
        }
    }

    draw(ctx) {
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.isShadowLoad && ctx.drawImage(this.shadow,x,y)

        const [frameX,frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX*32, frameY *32,
            32,32,
            x,y,
            32,32,)

            this.updateAnim();
    }  
}