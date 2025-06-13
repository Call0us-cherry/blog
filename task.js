/*if (id === "shelf"){ 
    if id of a === 1:
        img = notes[0]
    then show image
    document.getElementById("a").style.visibility="visible";
};
*/

if (id === "shelf") {
    if (a.id === 1) {
        let note = notes[0];

        // Show the image (assuming you have an img element with id "imgElement")
        document.getElementById("imgElement").src = img;

        // Make the element with id "a" visible
        document.getElementById("a").style.visibility = "visible";
        console.log("slay")

    }

}
