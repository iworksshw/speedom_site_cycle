document.addEventListener("DOMContentLoaded", function () {
    // 메인 배너 슬라이드
    var swiper = new Swiper(".bannerSwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // 이벤트 배너 슬라이드(전체)
    var swiper = new Swiper(".event01Swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
    });
    var swiper = new Swiper(".event02Swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
    });
    var swiper = new Swiper(".event03Swiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
    });
});