
let x = 1;

function show(id) {
    // Get the image element by its ID

    const imageElement = document.getElementById("image");
    imageElement.src = "/images/box0.png"
    fop = id

    //console.log(fop)
    //pinboard
    if (fop === "btnid1"){
        imageElement.src = "/images/box.png"
    }
    else if (fop === "btnid2"){
        imageElement.src = "/images/box1.png"
    }
    
//cookbook
    if (fop === "btn_id1"){
        imageElement.src = "/images/bake1.png"
    }
    else if (fop === "btn_id2"){
        imageElement.src = "/images/box0.png"
    }
    
    // Check the current visibility status of the image
    const currentVisibility = imageElement.style.visibility;

    // change the visibility
    if (currentVisibility === "hidden") {
        // If the image is hidden, make it visible
        imageElement.style.visibility = "visible";
    } else {
        // Otherwise, hide the image
        imageElement.style.visibility = "hidden";
    }
}
    