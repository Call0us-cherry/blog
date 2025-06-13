console.log("tap tap tap")
document.getElementById('clickableArea').addEventListener('click', function() {
    var image = document.getElementById('image');
    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
    } else {
        image.classList.add('hidden');
    }
});