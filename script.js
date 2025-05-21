const swiperText = new Swiper('.swiper', {
    speed: 800,
    pagination:{
        el: '.swiper-pagination'
    },
    navigation:{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },
    autoplay: {
        delay: 3000,
    },
})

function hoverOn(){
    document.getElementById('training_choose-ul1').classList.add('visible');
    document.getElementById('butt1').classList.add('visible');

}
function hoverOff(){
    document.getElementById('training_choose-ul1').classList.remove('visible');
    document.getElementById('butt1').classList.remove('visible');
}
function hoverOn2(){
    document.getElementById('training_choose-ul2').classList.add('visible');
    document.getElementById('butt2').classList.add('visible');

}
function hoverOff2(){
    document.getElementById('training_choose-ul2').classList.remove('visible');
    document.getElementById('butt2').classList.remove('visible');
}

function reviews(){
    alert("Отзывы пока что, не доступны :3")
}

function contact(){
    document.getElementById('contact').classList.remove('hidden');
}
function hide(){
    document.getElementById('contact').classList.add('hidden');
}