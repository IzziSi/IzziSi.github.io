const images = document.getElementsByClassName('mainPhoto');
const thumbnails = document.getElementsByClassName('thumbnail');
let currentPhoto = 0;
let maxPhotos = images.length - 1;

function makeVisible(i) {
    images[i].style.display = 'block';
    images[i].style.visibility = 'visible';
}

function makeInvisible(i) {
    images[i].style.display = 'none';
    images[i].style.visibility = 'hidden';
}

function next() {
    if (currentPhoto < maxPhotos) {
        makeInvisible(currentPhoto);
        thumbnails[currentPhoto].style.border = 'none';
        currentPhoto = currentPhoto + 1;
        makeVisible(currentPhoto);
        thumbnails[currentPhoto].style.border = '2px solid white';
        thumbnails[currentPhoto].scrollIntoView({block: "center"});
        
    } else {
        makeInvisible(currentPhoto);
        thumbnails[currentPhoto].style.border = 'none';
        currentPhoto = 0;
        makeVisible(currentPhoto);
        thumbnails[currentPhoto].style.border = '2px solid white';
        thumbnails[currentPhoto].scrollIntoView({block: "center"});
    }
}

function back() {
    if (currentPhoto > 0) {
        makeInvisible(currentPhoto);
        thumbnails[currentPhoto].style.border = 'none';
        currentPhoto = currentPhoto - 1;
        makeVisible(currentPhoto);
        thumbnails[currentPhoto].style.border = '2px solid white';
        thumbnails[currentPhoto].scrollIntoView({block: "center"});
    } else {
        makeInvisible(currentPhoto);
        thumbnails[currentPhoto].style.border = 'none';
        currentPhoto = maxPhotos;
        makeVisible(currentPhoto);
        thumbnails[currentPhoto].style.border = '2px solid white';
        thumbnails[currentPhoto].scrollIntoView({block: "center"});
    }
}

function jumpToPhoto(i) {
    makeInvisible(currentPhoto);
    currentPhoto = i;
    makeVisible(currentPhoto);
}

