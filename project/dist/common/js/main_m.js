document.addEventListener("DOMContentLoaded", function () {
    // 메인 배너 슬라이드
    var swiper = new Swiper(".bannerSwiper", {
        autoplay : {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".bannerSwiper .swiper-pagination",
        },
    });

    // 이벤트 배너 슬라이드(전체)
    var swiper = new Swiper(".event01Swiper", {
        slidesPerView: "auto",
        spaceBetween: 12,
    });
    var swiper = new Swiper(".event02Swiper", {
        slidesPerView: "auto",
        spaceBetween: 12,
    });
    var swiper = new Swiper(".event03Swiper", {
        slidesPerView: "auto",
        spaceBetween: 12,
    });

    // 이벤트 탭
    const tabBtns = document.querySelectorAll(".eventArea .tabBtn");
    const tabConts = document.querySelectorAll(".eventArea .tabCont");

    tabBtns.forEach(function(tabBtn, index){
        tabBtn.addEventListener("click", function(){
            tabBtns.forEach(btn => btn.classList.remove('on'));
            tabConts.forEach(content => content.classList.remove('on'));

            tabBtn.classList.add("on");
            tabConts[index].classList.add("on");
        })
    })
});