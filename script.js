$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});

var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var status = 0;
var positionUnit = -100;

function slideImg(x) {

    var i;

    for (i = 0; i < caroBtns.length; i++) {
        caroBtns[i].style.backgroundColor = "#ffffff44";
    }

    caroBtns[x].style.backgroundColor = "#fff";

    position = x * positionUnit;
    imgList.style.left = position + "%";

}


let loadBtn = document.querySelector('#load');
let currentItem = 4;

loadBtn.onclick = () => {
    let cards = [...document.querySelectorAll('.menu-container .card')];
    for (var i = currentItem; i < currentItem + 4; i++) {
        cards[i].style.display = 'grid';
    }
    currentItem += 4;

    loadBtn.style.display = 'none';
}
