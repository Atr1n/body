import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

const authSwiper = new Swiper(".authSwiper", {
    slidesPerView: 3,
    slideToClickedSlide: true,
    watchOverflow: true,
    loop: true,
    centeredSlides: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const comSwiper = new Swiper(".comSwiper", {
    slidesPerView: 1,
    slideToClickedSlide: true,
    watchOverflow: true,

    autoplay: {
        delay: 3000,
    },
    
    pagination: {
        el: ".swiper-pagination",
    },
});