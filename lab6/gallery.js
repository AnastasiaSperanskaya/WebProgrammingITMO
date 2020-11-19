var photos = [
    'gallery/1.jpeg',
    'gallery/2.jpeg',
    'gallery/3.jpeg',
    'gallery/4.jpeg',
    'gallery/5.jpeg'
]

var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailsClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
        fullPhoto.src = photo
    })};

for(var i = 0; i < thumbnails.length; i++) {
    addThumbnailsClickHandler(thumbnails[i], photos[i]);
}