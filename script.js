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