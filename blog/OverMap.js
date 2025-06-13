class OverMap {
    constructor(config) {
        this.gameObject = config.gameObjects;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = e;
        
        this.upImage = new Image();
        this.upImage.src = note;

        this.cutscene = false;
    }
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage,0,0)
    }
     drawUpperImage(ctx) {
        this.upperImage.src = e;
        ctx.drawImage(this.upperImage,0,0)
    } 

    drawUpImage(ctx) {
        this.upImage.src = note;
        ctx.drawImage(this.upImage,0,0)
    } 

    isSpaceTaken(currentX,currentY,direction){
        const {x,y} = utils.nextPos(currentX,currentY,direction);
        return this.walls[`${x},${y}`] || false;
    }

    startScene(events) {
        this.cutscene = true;
    }

}


window.OverMaps = {
    DemoRoom: {
        lowerSrc: "/images/grass.png",
        gameObjects: {
            hero: new Person({
                isPlayer: true,
               x: utils.wG(10),
               y: utils.wG(7) 
            }),
        },
        walls:{
            //door
           [utils.asCoord(10,1)] : true,
           [utils.asCoord(11,1)] : true,

            //wall
           [utils.asCoord(1,2)] : true,[utils.asCoord(2,2)] : true,[utils.asCoord(3,2)] : true,
           [utils.asCoord(4,2)] : true, [utils.asCoord(5,2)] : true,[utils.asCoord(6,2)] : true,
           [utils.asCoord(7,2)] : true,[utils.asCoord(8,2)] : true,[utils.asCoord(9,2)] : true,
           [utils.asCoord(12,2)] : true,[utils.asCoord(0,2)] : true,[utils.asCoord(13,2)] : true,
           [utils.asCoord(14,2)] : true,[utils.asCoord(15,2)] : true,[utils.asCoord(16,2)] : true,
           [utils.asCoord(17,2)] : true,[utils.asCoord(18,2)] : true,[utils.asCoord(19,2)] : true,
           [utils.asCoord(20,2)] : true,[utils.asCoord(21,2)] : true,

           //bookshelf
           [utils.asCoord(1,5)] : true,[utils.asCoord(2,5)] : true,
           [utils.asCoord(1,4)] : true,[utils.asCoord(2,4)] : true,

           //games
           [utils.asCoord(5,5)] : true,[utils.asCoord(6,5)] : true,
           [utils.asCoord(5,4)] : true,[utils.asCoord(6,4)] : true,

           //world
           [utils.asCoord(14,5)] : true,[utils.asCoord(15,5)] : true,
           [utils.asCoord(14,4)] : true,[utils.asCoord(15,4)] : true,

           //tv
           [utils.asCoord(18,5)] : true,[utils.asCoord(19,5)] : true,
           [utils.asCoord(18,4)] : true,[utils.asCoord(19,4)] : true,

           //baking
           [utils.asCoord(3,10)] : true,[utils.asCoord(4,10)] : true,
           [utils.asCoord(3,11)] : true,[utils.asCoord(4,11)] : true,

           //heart
           [utils.asCoord(8,10)] : true,[utils.asCoord(7,10)] : true,
           [utils.asCoord(8,11)] : true,[utils.asCoord(7,11)] : true
           
        }
    },
    Indoors:{
        lowerSrc: "/images/wood.png",
        gameObjects: {
        hero: new Person({
            x: utils.wG(8),
            y: utils.wG(8) 
        }),
    }

    }
} 
