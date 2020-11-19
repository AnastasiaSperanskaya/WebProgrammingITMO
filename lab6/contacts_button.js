var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log("click in listener");
    popup.style.display = "block";
})

closePopupButton.addEventListener('click', function() {
    popup.style.display = "none";
})

document.addEventListener('keydown', function(evt) {
    console.log("keydown in listener: ")
    if (evt.keyCode === 27) {
        console.log(evt.code);
        popup.style.display = "none"
    }
})

console.log("finish");