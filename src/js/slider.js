import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

const comSwiper = new Swiper(".comSwiper", {
    slidesPerView: 1,
    slideToClickedSlide: true,
    watchOverflow: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

const authSwiper = new Swiper(".authSwiper", {
    slidesPerView: 1,
    slideToClickedSlide: true,
    watchOverflow: true,
});