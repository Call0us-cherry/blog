class Over{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas")
        this.ctx = this.canvas.getContext("2d")
    }

    startGameLoop(){
        const step = ()=> {

            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
            this.map.drawLowerImage(this.ctx);

            //draw game objects
            Object.values(this.map.gameObject).forEach(object =>{
                object.update({
                    arrow: this.dInput.direction,
                    map: this.map,
                })
                object.sprite.draw(this.ctx);
            })
            this.map.drawUpperImage(this.ctx);
            
            this.map.drawUpImage(this.ctx); 

            requestAnimationFrame(()=>{
            step();
            })
            
        }
        
        step();

    }

    init() {
        this.map = new OverMap(window.OverMaps.DemoRoom);

        this.dInput = new dInput();
        this.dInput.init();
        this.dInput.direction;

        this.startGameLoop(); 
        
    }
}
