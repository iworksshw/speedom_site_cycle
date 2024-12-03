document.addEventListener("DOMContentLoaded", function () {
    // AI 예측 그래프 애니메이션
    const aiCharts = document.querySelectorAll(".aiChart")
    aiCharts.forEach(function(aiChart){
        const bar = aiChart.querySelector(".progressBar");
        const num = aiChart.querySelector(".chartNum em").innerHTML;
        const barnum = (num*1.58) + 2;

        bar.style.cssText = `transform: rotateZ(${barnum}deg);`
    })

    // 메인슬라이드
    const progressLine = document.querySelector(".mainBox .autoplay-progress svg");
    let mainSlide = new Swiper(".mainBox .mainSlide", {
        slidesPerView: "auto",
        spaceBetween: 24,
        loop:true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".mainBox .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".mainBox .swiper-button-next",
            prevEl: ".mainBox .swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress)
            }
        }
    });

    // 보도자료 슬라이드
    let newsSwiper = new Swiper(".newsSwiper", {
        navigation: {
            nextEl: ".newsSlideWrap .swiper-button-next",
            prevEl: ".newsSlideWrap .swiper-button-prev",
        },
        
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        watchOverflow: true,
    });
    
    // 배너 슬라이드
    let banner01Swiper = new Swiper(".bnSwap01 .bannerSwiper", {
        navigation: {
            nextEl: ".bnSwap01 .swiper-button-next",
            prevEl: ".bnSwap01 .swiper-button-prev",
        },
        
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false
        // },
        watchOverflow: true
    });
    let banner02Swiper = new Swiper(".bnSwap02 .bannerSwiper", {
        navigation: {
            nextEl: ".bnSwap02 .swiper-button-next",
            prevEl: ".bnSwap02 .swiper-button-prev",
        },
        
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false
        // },
        watchOverflow: true
    });

    let banner03Swiper = new Swiper(".bnSwap03 .bannerSwiper", {
        navigation: {
            nextEl: ".bnSwap03 .swiper-button-next",
            prevEl: ".bnSwap03 .swiper-button-prev",
        },
        
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false
        // },
        watchOverflow: true
    });

    // 바닥배너 슬라이드
    var btmBannerSwiper = new Swiper(".btmSlide", {
        navigation: {
            nextEl: ".bannerBtm .swiper-button-next",
            prevEl: ".bannerBtm .swiper-button-prev",
        },
    });

    // 배너 on/off
    const btmBanner = document.querySelector(".bannerBtm");
    const bannerClose = btmBanner.querySelector(".btnClose");

    btmBanner.classList.add("on");
    bannerClose.addEventListener("click", function(){
        btmBanner.classList.remove("on");
    })
    
    // 퀵메뉴 / 헤더 스크롤 보정
    let lastScrollX = 0;
    window.addEventListener("scroll", function(){
        const currentScrollX = window.scrollX;

        if(currentScrollX !== lastScrollX) {
            // 퀵메뉴
            const quickMenu = document.querySelector(".cptQuickMenu");
            console.log(window.innerWidth);
            if(window.innerWidth < 1400) {
                quickMenu.style.marginLeft = (860 - currentScrollX) + 'px';
            } else {
                quickMenu.style.marginLeft = (780 - currentScrollX) + 'px';
            }
            

            // 헤더
            const header = document.querySelector(".cptHeader");
            header.style.left = ( - currentScrollX) + 'px';
        }
    })

})