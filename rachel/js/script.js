var images = document.getElementsByClassName('mainPhoto');
var thumbnails = document.getElementsByClassName('thumbnail');
var currentPhoto = 0;
var maxPhotos = images.length - 1;

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
        currentPhoto = currentPhoto + 1;
        makeVisible(currentPhoto);
    } else {
        makeInvisible(currentPhoto);
        currentPhoto = 0;
        makeVisible(currentPhoto);
    }
}

function back() {
    if (currentPhoto > 0) {
        makeInvisible(currentPhoto);
        currentPhoto = currentPhoto - 1;
        makeVisible(currentPhoto);
    } else {
        makeInvisible(currentPhoto);
        currentPhoto = maxPhotos;
        makeVisible(currentPhoto);
    }
}

function jumpToPhoto(i) {
    makeInvisible(currentPhoto);
    currentPhoto = i;
    makeVisible(currentPhoto);
}