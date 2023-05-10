//Set the background to the img src to keep alt text on images
var imgs = document.getElementById("img-container").getElementsByTagName('img');
document.body.style.backgroundImage = "url(" + imgs[0].src + ")";
document.body.style.backgroundSize = "100%";
const numPhotos = imgs.length - 1;
let currentPhoto = 0;
function nextPhoto() {

    document.body.style.backgroundImage = "url(" + imgs[currentPhoto].src + ")"
    document.body.style.backgroundSize = "100%"
    if (currentPhoto === numPhotos) {
        currentPhoto = 0;
    } else {
        currentPhoto++;
    }
}

setInterval(nextPhoto, 8000);
