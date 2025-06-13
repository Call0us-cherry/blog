var layer =["/images/grid.png","/images/blank.png","/images/shelf.png","/images/board.png","/images/pegboard.png","/images/book.png"];

var notes = ["/images/blank.png","/images/box.png"]

let e = layer[1];
let note = layer[1];

var id = "";

const items = {

place(x,y,){
    //console.log(x,y)

    if (x === 16 && y === 96 || x === 32 && y === 96){
        id = "shelf"
    }else if (x === 80 && y === 96 || x === 96 && y === 96){
        id = "game"
    }else if (x === 288 && y === 96 || x === 304 && y === 96){
        id = "tv"
    }else if (x === 224 && y === 96 || x === 240 && y === 96){
        id = "globe"}

//------------------

    else if (x === 48 && y === 144 || x === 64 && y === 144){
        id = "cook"
    }else if (x === 112 && y === 144 || x === 128 && y === 144){
        id = "heart"
    }else{id="" }

    //console.log(id)
},

item(id){
    if (id === "shelf"){
        e = layer[2]
        //show click
    }
    else if (id === "tv"){
        e = layer[3]
    }
    else if (id === "game"){
        e = layer[4]
        document.getElementsByTagName('IMG')[0].src = "/images/note1.png"
        Array.from(document.getElementsByClassName('btnID')).forEach(element => {
            element.style.visibility = 'visible'})
    }
    else if (id === "globe"){
        e = layer[4]
        document.getElementsByTagName('IMG')[0].src = "/images/D204smol.JPG"
        document.getElementsByTagName('IMG')[0].src = "/images/D204smol.JPG"
        Array.from(document.getElementsByClassName('btnID')).forEach(element => {
            element.style.visibility = 'visible'})
    }
    else if (id === "heart"){
        e = layer[4]
        //document.getElementsByTagName('IMG')[0].src = "/images/DSC_0204.JPG"
        Array.from(document.getElementsByClassName('btnID')).forEach(element => {
            element.style.visibility = 'visible'})
    }
    else if (id === "cook"){
        e = layer[5]
        //document.getElementsByTagName('IMG')[0].src = "/images/DSC_0204.JPG"
        Array.from(document.getElementsByClassName('btn_ID')).forEach(element => {
            element.style.visibility = 'visible'})
    }
    else{ 
        e = layer[1]
        Array.from(document.getElementsByClassName('btnID')).forEach(element => {
            element.style.visibility = 'hidden';})
            Array.from(document.getElementsByClassName('btn_ID')).forEach(element => {
                element.style.visibility = 'hidden';})

//console.log(e)

    if (e === layer[3]) {
        //console.log("hmm")

}

    }}
}

