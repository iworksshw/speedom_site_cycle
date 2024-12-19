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
        pagination: {
            el: ".bannerBtm .swiper-pagination",
        },
        autoplay: {
            delay: 4000,
        },
    });

    // 배너 on/off
    const btmBanner = document.querySelector(".bannerBtm");
    // 20241213 영문 메인 대응 태그 없을 경우 추가
    if (btmBanner) {
        const bannerClose = btmBanner.querySelector(".btnClose");
    
        btmBanner.classList.add("on");
        bannerClose.addEventListener("click", function(){
            btmBanner.classList.remove("on");
        })
    }
    
    // 퀵메뉴 / 헤더 스크롤 보정
    // let lastScrollX = 0;
    // window.addEventListener("scroll", function(){
    //     const currentScrollX = window.scrollX;

    //     if(currentScrollX !== lastScrollX) {
    //         // 퀵메뉴
    //         const quickMenu = document.querySelector(".cptQuickMenu");
    //         console.log(window.innerWidth);
    //         if(window.innerWidth < 1400) {
    //             quickMenu.style.marginLeft = (860 - currentScrollX) + 'px';
    //         } else {
    //             quickMenu.style.marginLeft = (780 - currentScrollX) + 'px';
    //         }
            

    //         // 헤더
    //         const header = document.querySelector(".cptHeader");
    //         header.style.left = ( - currentScrollX) + 'px';
    //     }
    // })
})

function mainVisual() {
    const cptmainVisual = document.querySelector(".lytMainEng .mainVisual");
    if (cptmainVisual) {
        const mobile = window.matchMedia('(max-width: 767px)');
        const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1279px)');
        const desktop = window.matchMedia('(min-width: 1280px)');

        let cycleVisualSwiper;
        let boatVisualSwiper;

        function initializeSwiper(config) {
            // 기존 swiper 인스턴스가 있으면 제거
            if (cycleVisualSwiper) cycleVisualSwiper.destroy(true, true);
            if (boatVisualSwiper) cycleVisualSwiper.destroy(true, true);


            // 새로운 swiper 생성
            cycleVisualSwiper = new Swiper(".cycleVisualSwiper", {
                effect: "fade",
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"><span></span></span>';
                    },
                },
            });
            
            boatVisualSwiper = new Swiper(".boatVisualSwiper", {
                effect: "fade",
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"><span></span></span>';
                    },
                },
            });
        }

        function handleScreenChange() {
            if (mobile.matches) {
                initializeSwiper({allowTouchMove: true});
            } else if (tablet.matches) {
                initializeSwiper({allowTouchMove: true});
            } else if (desktop.matches) {
                initializeSwiper({allowTouchMove: false});
            }
        }

        function swiperControll(){
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('btnPlay') || e.target.classList.contains('btnStop')) {
                    const swiper = e.target.closest('.cycleVisualSwiper') ? cycleVisualSwiper : boatVisualSwiper;
            
                    if (e.target.classList.contains('btnPlay')) {
                        swiper.autoplay.start();
                    } else if (e.target.classList.contains('btnStop')) {
                        swiper.autoplay.stop();
                    }
                }
            });
            
        }

        function mainVisualBtnEvent(){
            let target = cptmainVisual.querySelector('.innerWrap')
            let mainVisualBtns = target.querySelectorAll(':scope .visualWrap > .btnWrap button');
            mainVisualBtns.forEach((btn)=>{
                btn.addEventListener('click', (e)=>{
                    let title = e.target.closest('button').className;
                    title === 'btnBoating' ? target.classList.add('active') : target.classList.remove('active')
                });
            });
        }

        // 초기 상태 확인
        handleScreenChange();
        // 경륜 경정 변경 이벤트
        mainVisualBtnEvent();
        // 스와이퍼 stop, play
        swiperControll();

        // 화면 크기 변경 감지
        [mobile, tablet, desktop].forEach(mediaQuery => {
            mediaQuery.addEventListener("change", handleScreenChange);
        });
    }
}