document.addEventListener("DOMContentLoaded", function () {

    //스크롤에 따른 헤더 반응
    let scrlT = document.documentElement.scrollTop;
    let afterScrlT = scrlT;
    document.addEventListener("scroll",function(e){
        const header = document.querySelector(".cptHeader");
        scrlT = document.documentElement.scrollTop;
        if(header){
            if(scrlT > 112){
                header.classList.add("on")
            }else{
                header.classList.remove("on")
            }
            //모바일
            if(afterScrlT > scrlT){
                //scroll down => GNB up
                header.classList.remove("up")
            }else{
                //scroll up => GNB down
                header.classList.add("up")
            }
        }
        afterScrlT = scrlT;
    })

    //All Menu -Start
    all1MenuAction();

    //GNB - Start
    const depth1Menus = document.querySelectorAll(".gnbArea .depth1Menu");
    const depth2Menus = document.querySelectorAll(".gnbArea .depth2Menu");
    const depth3Menus = document.querySelectorAll(".gnbArea .depth3Menu");
    const depth4Menus = document.querySelectorAll(".gnbArea .depth4Menu");
    let depth1On = false; //메뉴 활성화 상태

    //특정 엘리먼트 외 클릭 시 동작
    document.addEventListener("mouseup", function(e){
        //메뉴 외 영역 클릭시 메뉴 닫힘
        /*
        if(document.querySelector(".gnbBox") && !document.querySelector(".gnbBox").contains(e.target)){
            depth1Menus.forEach(function(depth1Menu){
                if(depth1Menu.classList.contains("on")){
                    depth1Menu.querySelector(".depth2Area").style.transition = "height 0.2s";
                    depth1Menu.classList.remove("on");
                    depth1On = false;
                    setTimeout(function(){
                        depth1Menu.querySelector(".depth2Area").style.transition = "none";
                    },210)
                }
            });
        }
        */
    });

    //뎁스 1메뉴 클릭
    /*
    depth1Menus.forEach(function(depth1Menu, idxI, elements){
        depth1Menu.querySelector(".depth1Name").addEventListener("click",function(e){
            e.preventDefault();
            depth2Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            depth3Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            depth4Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            elements.forEach(function(element, idxJ){
                if(idxI == idxJ){
                    if(element.classList.contains("on")){
                        //on되어 있는 메뉴 클릭
                        element.querySelector(".depth2Area").style.transition = "height 0.2s";
                        element.classList.remove("on");
                        depth1On = false;
                        setTimeout(function(){
                            element.querySelector(".depth2Area").style.transition = "none";
                        },210)
                    }else{
                        //클릭 시 메뉴 활성화 된 메뉴가 없을 때 모션 추가
                        if(depth1On == false) {
                            depth1On = true;
                            element.querySelector(".depth2Area").style.transition = "height 0.2s";
                            setTimeout(function(){
                                element.querySelector(".depth2Area").style.transition = "none";
                            },210)
                        }
                        element.classList.add("on");
                        const depth2Ele = element.querySelectorAll(".depth2Menu")[0];
                        if(depth2Ele){
                            depth2Ele.classList.add("on");
                            const depth3Ele = depth2Ele.querySelectorAll(".depth3Menu")[0];
                            if(depth3Ele){
                                depth3Ele.classList.add("on");
                                const depth4Ele = depth3Ele.querySelectorAll(".depth4Menu")[0];
                                if(depth4Ele){
                                    depth4Ele.classList.add("on");
                                }
                            }
                        }
                    }
                }else{
                    element.classList.remove("on");
                }
            });
            
        });
    });
    */
    /*
    //뎁스 2메뉴 오버
    depth2Menus.forEach(function(depth2Menu,idxI, elements){
        depth2Menu.querySelector(".depth2Name").addEventListener("mouseover",function(e){
            depth3Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            depth4Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            elements.forEach(function(element, idxJ){
                if(idxI == idxJ){
                    element.classList.add("on");
                    const depth3Ele = element.querySelectorAll(".depth3Menu")[0];
                    if(depth3Ele){
                        depth3Ele.classList.add("on");
                        const depth4Ele = depth3Ele.querySelectorAll(".depth4Menu")[0];
                        if(depth4Ele){
                            depth4Ele.classList.add("on");
                        }
                    }
                }else{
                    element.classList.remove("on");
                }
            });
        });
    })

    //뎁스 3메뉴 오버
    depth3Menus.forEach(function(depth3Menu,idxI, elements){
        depth3Menu.querySelector(".depth3Name").addEventListener("mouseover",function(e){
            depth4Menus.forEach(function(menu){
                menu.classList.remove("on");
            });
            elements.forEach(function(element, idxJ){
                if(idxI == idxJ){
                    element.classList.add("on");
                    const depth4Ele = element.querySelectorAll(".depth4Menu")[0];
                    if(depth4Ele){
                        depth4Ele.classList.add("on");
                    }
                }else{
                    element.classList.remove("on");
                }
            });
        });
    })

    //뎁스 4메뉴 오버
    depth4Menus.forEach(function(depth4Menu,idxI, elements){
        depth4Menu.querySelector(".depth4Name").addEventListener("mouseover",function(e){
            elements.forEach(function(element, idxJ){
                if(idxI == idxJ){
                    element.classList.add("on");
                }else{
                    element.classList.remove("on");
                }
            });
        });
    })
    */
    //GNB - End

    //디자인 셀렉트
    //designSelect();

    // Footer site btn
    const footerBtns = document.querySelectorAll(".cptFooter .depth1Btn");
    if(footerBtns) {
        footerBtns.forEach(function(footerBtn){
            footerBtn.addEventListener("click", function(){
                if(footerBtn.classList.contains("on")) {
                    footerBtn.classList.remove("on");
                } else {
                    footerBtns.forEach(function(others){
                        others.classList.remove("on");
                    })
                    footerBtn.classList.add("on");
                }
            })
        })
    }

    //파일찾기
    const uploadFiles = document.querySelectorAll(".fileBox .uploadBtn");
    /*
    uploadFiles.forEach(function(uploadFile,idx){
        uploadFile.addEventListener("change",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            let fileName;
            if(window.FileReader){
                fileName = this.files[0].name;
                console.log(fileName);
            } else {
                console.log("noFileReader");
                //var filename = $(this).val().split('/').pop().split('\\').pop();
                //var filename = this.val().split('/').pop().split('\\').pop();
            }
            fileBox.querySelector(".textBox").innerText = fileName;
            fileBox.classList.add("on");
        });
    });
    */
    uploadFiles.forEach(function(uploadFile,idx){
        uploadFile.addEventListener("change",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            let fileName;
            if(window.FileReader){
                fileName = this.files[0].name;
                console.log(fileName);
            } else {
                console.log("noFileReader");
                //var filename = $(this).val().split('/').pop().split('\\').pop();
                //var filename = this.val().split('/').pop().split('\\').pop();
            }

            function addNewListItem() {
                const newListItem = document.createElement("li");
                const span = document.createElement("span");
                const button = document.createElement("button");
    
                span.textContent = fileName;
                button.className = "fileDel";
                button.textContent = "삭제";
    
                newListItem.appendChild(span);
                newListItem.appendChild(button);


                const textBox = fileBox.querySelector(".textBox");
                // 최대 10개까지만 추가
                if (textBox.querySelectorAll("li").length < 10) {
                    textBox.appendChild(newListItem);
                }
            }
            addNewListItem();
        });
    });
    //파일찾기 취소
    /*
    const delFiles = document.querySelectorAll(".fileBox .fileDel");
    delFiles.forEach(function(delFile,idx){
        delFile.addEventListener("click",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            fileBox.querySelector(".uploadBtn").value = "";
            fileBox.querySelector(".textBox").innerText = "";
            fileBox.classList.remove("on");
        });
    });
    */
    const textBox = document.querySelector(".fileBox .textBox");
    if (textBox) {
        textBox.addEventListener("click", function(event) {
            if (event.target && event.target.classList.contains("fileDel")) {
                const listItem = event.target.closest("li");
                const fileBox = parentsElementFind(this, "fileBox");
                if (listItem) {
                    listItem.remove();
                    fileBox.querySelector(".uploadBtn").value = "";
                }
            }
        });
    }



    //팝업 내부 스크롤 시 타이틀 쉐도우 추가
    const scrollPops = document.querySelectorAll(".modPopup .popCont");
    scrollPops.forEach(function(scrollPop, idx){
        scrollPop.addEventListener("scroll",function(event){
            if(this.scrollTop >= 1){
                this.previousElementSibling.classList.add("shadow");
            }else{
                this.previousElementSibling.classList.remove("shadow");
            }

        });
    })

    //앨범/갤러리 체인지
    let changeList = document.querySelector(".cptGalleryList");
    if(changeList){
        let changeBtns = changeList.querySelectorAll(".listChange button");
        changeBtns.forEach(function (changeBtn){
            changeBtn.addEventListener("click",function(e){
                console.dir(this.parentNode);
                if(this.parentNode.classList.contains('gallery')){
                    this.parentNode.classList.remove('gallery');
                    this.parentNode.nextElementSibling.classList.remove('gallery');
                }else{
                    this.parentNode.classList.add('gallery');
                    this.parentNode.nextElementSibling.classList.add('gallery');
                }
            });
        });
    }

    // Top 버튼 동작
    const btnTop = document.querySelector(".cptQuickMenu .btnTop");
    if(btnTop){
        btnTop.addEventListener("click", function(){
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        });
    }

    //input text reset
    inputTextReset();

    //탭메뉴 (1차)
    tabMenuInit();

    tabMenu02Init();

    //단어 탭
    tabWords();

    //2뎁스 탭메뉴 (데이터)
    tabMenuDataSwiper();

    //캘린더 팝업
    if(document.querySelector(".cptCalendar")) {
        calendarPop();
        window.addEventListener("resize", calendarPop);
    }

    // 선수비교 하단 플로팅박스
    fullFloating();

    // 일별달력 슬라이드
    slctDateSlide();

    // 일별달력 선택 - 내부 스크롤
    dateCalInit();

    // 경륜정보 > 통계 > 데이터 슬라이드
    imgsDataSlide();

    // 모의베팅
    // 주간지수 슬라이드
    recordSlide();

    // 랭킹 슬라이트
    rankSlide();

    // 경기선택 슬라이드
    matchSlide();

    // 플로팅 푸터 옵션 toggle
    batFloating();
    
    // 아코디언함수
    contSlideOpen();

    // 경륜영상관 - 검색 박스 - 체크박스 이벤트
    inputCheckBoxAll();
    
    //이미지 확대기능
    scaleView();
});

// 모의배팅 init
function battingInit() {
    // 주간지수 슬라이드
    recordSlide();

    // 랭킹 슬라이트
    rankSlide();

    // 경기선택 슬라이드
    matchSlide();

    // 플로팅 푸터 옵션 toggle
    batFloating();

    //탭메뉴 (1차)
    tabMenuInit();
}


//이미지 확대기능
function scaleView(){
    const screen = document.querySelector(".comScaleView");
    if(screen){
        const scaleBox = screen.querySelector(".scaleViewArea");
        let posX = 0;
        let posY = 0;
        screen.addEventListener("mousemove", function(e){
            const scrW = e.target.offsetWidth;
            const scrH = e.target.offsetHeight;
            const posX = e.offsetX;
            const posY = e.offsetY;
            const perX = posX*100/scrW;
            const perY = posY*100/scrH;;
            //console.log([scrW,scrH,posX, posY]);
            //console.log(e.target.style);
            scaleBox.style.cssText = "transform-origin:" + perX + "% " + perY + "%;";
        });
    }
}

// ------------------------------- 전체 메뉴 ------------------------------- //
function all1MenuAction(){
    const btnAllMenu = document.querySelector(".allMenu");
    const btnCloseAllMenus = document.querySelectorAll(".allMenuArea .btnClose");
    const all1Menus = document.querySelectorAll(".allMenuArea .depth1Name");
    const all2Menus = document.querySelectorAll(".allMenuArea .depth2Name");
    const parent1Menus = document.querySelectorAll(".allMenuArea .depth1Menu");
    const parent2Menus = document.querySelectorAll(".allMenuArea .depth2Menu");
    
    const tabMo = window.matchMedia('(max-width: 768px)');      //모바일 분기

    if(btnAllMenu){
        btnAllMenu.addEventListener("click", function(e){
            document.querySelector(".allMenuArea").classList.add("on");
        });
    }
    btnCloseAllMenus.forEach(function(btn){
        btn.addEventListener("click", function(e){
            document.querySelector(".allMenuArea").classList.remove("on");
        });
    });

    all1Menus.forEach(function(all1Menu){
        all1Menu.addEventListener("click", function(e){
            e.preventDefault();
            if(tabMo.matches) {
                parent1Menus.forEach(function(menu){
                    menu.classList.remove("on");
                });
                parent2Menus.forEach(function(menu){
                    menu.classList.remove("on");
                });
                all1Menu.parentNode.classList.add("on");
            }
        });
    });

    
    all2Menus.forEach(function(all2Menu){
        all2Menu.addEventListener("click", function(e){
            if(tabMo.matches) {
                if(!all2Menu.nextElementSibling){return;}
                e.preventDefault(); //모바일에서만
                all2Menu.parentNode.classList.toggle("on");
                if(all2Menu.parentNode.classList.contains("on")){
                    slideDown(all2Menu.nextElementSibling, 200);
                }else{
                    slideUp(all2Menu.nextElementSibling, 200);
                }
            }
        });
    });

    //BreakPoint
    tabMo.addListener(function(){
        if(!tabMo.matches) {
            parent2Menus.forEach(function(menu){
                menu.classList.remove("on");
                if(menu.querySelector(".depth3Group")){
                    menu.querySelector(".depth3Group").removeAttribute("style");
                }
            });
        }
    });
}

// ------------------------------- 디자인 셀렉트 함수 ------------------------------- //
function designSelect() {
    const designSlts = document.querySelectorAll(".iptSlt");
    designSlts.forEach(function(designSlt, idx){
        designSlt.addEventListener("click", function(e){
            if(this.classList.contains("on")){
                this.querySelector(".sltTitle").textContent = e.target.textContent;
                this.classList.remove("on");
                designSelectCallback(this);
            }else{
                this.classList.add("on");
            }
        });
    });

    //디자인 셀렉트 닫기
    document.addEventListener("mouseup", function(e){
        if(!e.target.classList.contains("iptSlt") && !e.target.closest(".iptSlt")){
            designSlts.forEach(function(designSlt, idx){
                designSlt.classList.remove("on");
            });
        }
    });
}


//디자인 셀렉트 선택 후 콜백
function designSelectCallback($target){
    console.log($target, $target.querySelector(".sltTitle").textContent);
}

// ------------------------------- 팝업 함수 ------------------------------- //
//팝업 열기
function openPopup($popName){
    event.preventDefault();
    document.querySelector("#"+$popName).classList.add("on");
}
//팝업 닫기
function closePopup($popName){
    document.querySelector("#"+$popName).classList.remove("on");
}
// 컨텐츠 레이어팝업 열기
function openLayerPopup($popName){
    event.preventDefault();
    if (document.querySelector("#"+$popName).classList.contains("comInfoLayerPop")) {
        const lyrPops = document.querySelectorAll(".comInfoLayerPop");

        lyrPops.forEach(function(lyrPop){
            lyrPop.classList.remove("on");
        })
        document.querySelector("#"+$popName).classList.add("on");
    } else {
        document.querySelector("#"+$popName).classList.add("on");
    }
}

//알럿
function openAlert($altName){
    document.querySelector("#"+$altName).classList.add("on");
}
function closeAlert($altName){
    document.querySelector("#"+$altName).classList.remove("on");
}

// 캘린더 팝업
// 상대좌표 함수
function getDocumentOffset(element) {
    let offsetTop = 0;
    let offsetLeft = 0;

    while (element) {
        offsetTop += element.offsetTop;
        offsetLeft += element.offsetLeft;
        element = element.offsetParent;
    }

    const right = offsetLeft + (element ? element.offsetWidth : 0);

    return {
        top: offsetTop,
        left: offsetLeft,
        right: right
    };
}

// 캘린더 OPEN/Close
function calendarPop() {
    const calFrame = document.querySelector(".cptCalendar");
    let frameXY = getDocumentOffset(calFrame);
    const calMarks = document.querySelectorAll(".cptCalendar .dayItem .mark");
    const calPop = document.querySelector(".cptCalendar .calenPopup");
    const popClose = calPop.querySelector(".popClose");

    // Popup Open
    calMarks.forEach(calMark => {
        calMark.addEventListener("click", function(){
            let nowBtn = this;
            let btnXY = getDocumentOffset(nowBtn);

            calPop.classList.add("open");

            if(window.matchMedia("(min-width:768px)").matches){
                calPop.style.top = `${btnXY.top - frameXY.top + 38}px`;

                if(calFrame.getBoundingClientRect().right - btnXY.right < 180) {
                    calPop.style.left = "auto";
                    calPop.style.right = 0;
                } else {
                    calPop.style.left = `${btnXY.left - frameXY.left - 168}px`;
                }
            }
        })
    })

    // Popup Close
    popClose.addEventListener("click", function(){
        calPop.classList.remove("open");
    })
}

// ------------------------------- 탭메뉴 함수 ------------------------------- //
//2뎁스 탭메뉴 (데이터) (페이지 내에 같은 탭이 2개 이상이면 스크립트 수정해야함)
function tabMenuDataSwiper(){
    //모바일, 태블릿, PC 모두 슬라이드
    let tabSwiperData = new Swiper(".tabDataSwiper", {
        init: false,
        focusableElements: false,
        spaceBetween: 8,
        slidesPerView: "auto",
        breakpoints: {
            768: {
              spaceBetween: 12,
            },
        },
    });
    tabSwiperData.on('init', function () {
        let _idx = 0;
        this.slidesEl.querySelectorAll("li").forEach(function(tabItem){
            if(tabItem.querySelector(".tabName").classList.contains("on")){
                tabSwiperData.slideTo(_idx);
                console.log(_idx);
            }else{
                _idx++;
            }
        });
    });
    tabSwiperData.init();
}


//모드 탭 함수
function tabMenuSwiper(){
    //모바일, 태블릿, PC 모두 슬라이드
    let tabSwiperAll = new Swiper(".tabSwiper.toAll", {
        focusableElements: false,
        slidesPerView: "auto",
        navigation: {
            prevEl: ".tabSwiper.toAll ~ .tabDirection .tabBtn.alignL button",
            nextEl: ".tabSwiper.toAll ~ .tabDirection .tabBtn.alignR button",
        },
    });

    //BreakPoint
    const tabMo = window.matchMedia('(max-width: 768px)');      //모바일 분기
    const tabTa = window.matchMedia('(max-width: 1279px)');     //태블릿 분기
    let tabSwiperMob;
    let tabSwiperTab;
    
    function tabSwiperMobAction($bln){
        if($bln){
            tabSwiperMob = new Swiper(".tabSwiper.toMob", {
                focusableElements: false,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".tabSwiper.toMob ~ .tabDirection .tabBtn.alignL button",
                    nextEl: ".tabSwiper.toMob ~ .tabDirection .tabBtn.alignR button",
                },
            });
        }else{
            if(tabSwiperMob){
                tabSwiperMob.destroy();
                tabSwiperMob = undefined;
            }
        }
    }
    function tabSwiperTabAction($bln){
        if($bln){
            tabSwiperTab = new Swiper(".tabSwiper.toTab", {
                focusableElements: false,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".tabSwiper.toTab ~ .tabDirection .tabBtn.alignL button",
                    nextEl: ".tabSwiper.toTab ~ .tabDirection .tabBtn.alignR button",
                },
            });
        }else{
            if(tabSwiperTab){
                tabSwiperTab.destroy();
                tabSwiperTab = undefined;
            }
        }
    }

    if(tabMo.matches) {
        //console.log("모바일");
        tabSwiperMobAction(true);
    } else {
        //console.log("모바일아님");
        tabSwiperMobAction(false);
    }
    if(tabTa.matches) {
        //console.log("태블릿");
        tabSwiperTabAction(true);
    } else {
        //console.log("태블릿아님");
        tabSwiperTabAction(false);
    }

    tabMo.addListener(function(){
        if(tabMo.matches) {
            //console.log("모바일");
            tabSwiperMobAction(true);
        } else {
            //console.log("모바일아님");
            tabSwiperMobAction(false);
        }
    });
    tabTa.addListener(function(){
        if(tabTa.matches) {
            //console.log("태블릿");
            tabSwiperTabAction(true);
        } else {
            //console.log("태블릿아님");
            tabSwiperTabAction(false);
        }
    });
}

function tabMenuInit(){
    //모드탭의 수
    const modTabs = document.querySelectorAll(".modTab");
    modTabs.forEach(function(modTab,tabIdx,elements){
        const tabmenuGroups = modTab.querySelectorAll(".tabMenuGroup");
        const tabmenus = modTab.querySelectorAll(".tabName");
        const tabConts = modTab.querySelectorAll(".tabCont");

        //모바일에서 해당 hover효과
        tabmenuGroups.forEach(function(tabmenuGroup){
            tabmenuGroup.addEventListener("touchstart", function() {
                this.classList.add("on");
            });
            tabmenuGroup.addEventListener("touchend", function() {
                this.classList.remove("on");
            });
        });

        //모드탭 내의 메뉴 수
        tabmenus.forEach(function(tabmenu,menuIdx,inElements){
            tabmenu.addEventListener("click", function(event){
                if(this.classList.contains("outlink")){
                    return;
                }
                inElements.forEach(function(inElement){
                    inElement.classList.remove("on");
                    inElement.setAttribute("title", "탭메뉴");
                });
                this.classList.add("on");
                this.setAttribute("title", "선택 된 탭메뉴");
                tabConts.forEach(function(tabCont,contIdx){
                    tabCont.classList.remove("on");
                    if(menuIdx == contIdx){
                        tabCont.classList.add("on");
                    }
                })
            });
        });
    });

    tabMenuSwiper();
}

function tabMenu02Init(){
    //모드탭의 수
    const modTabs = document.querySelectorAll(".modTab02");
    modTabs.forEach(function(modTab,tabIdx,elements){
        const tabmenuGroups = modTab.querySelectorAll(".tabMenuGroup");
        const tabmenus = modTab.querySelectorAll(".tabName");
        const tabConts = modTab.querySelectorAll(".tabCont");

        //모바일에서 해당 hover효과
        tabmenuGroups.forEach(function(tabmenuGroup){
            tabmenuGroup.addEventListener("touchstart", function() {
                this.classList.add("on");
            });
            tabmenuGroup.addEventListener("touchend", function() {
                this.classList.remove("on");
            });
        });

        //모드탭 내의 메뉴 수
        tabmenus.forEach(function(tabmenu,menuIdx,inElements){
            tabmenu.addEventListener("click", function(event){
                inElements.forEach(function(inElement){
                    inElement.classList.remove("on");
                    inElement.setAttribute("title", "탭메뉴");
                });
                this.classList.add("on");
                this.setAttribute("title", "선택 된 탭메뉴");
                tabConts.forEach(function(tabCont,contIdx){
                    tabCont.classList.remove("on");
                    if(menuIdx == contIdx){
                        tabCont.classList.add("on");
                    }
                })
            });
        });
    });

    //tabMenuSwiper();
}

// 컨텐츠 탭
function tabWords() {
    const tabBtns = document.querySelectorAll(".cptWordTab .btnArea .btnItem");
    const tabConts = document.querySelectorAll(".cptWordTab .contArea .tabCont");

    tabBtns.forEach((tabBtn, index) => {
        tabBtn.addEventListener("click", function(){
            const btns = document.querySelectorAll(".cptWordTab .btnArea .btnItem .btn");
            btns.forEach(btn => {
                btn.classList.remove("Primary");
                btn.classList.add("gLine");
            });

            const currentBtn = this.querySelector(".btn");

            if (currentBtn) {
                currentBtn.classList.remove("gLine");
                currentBtn.classList.add("Primary");
            } 

            tabConts.forEach(tabCont => tabCont.classList.remove("on"));
            tabConts[index].classList.add('on');
        })
    })
}

// 선수비교 하단 플로팅박스
function fullFloating(){
    const float = document.querySelector(".cptFullFloat");
    
    if (float) {
        const winH = window.innerHeight;
        const contH = document.documentElement.scrollHeight;
        const floatH = float.clientHeight;
        
        window.addEventListener("scroll", function(){
            const scrlT = window.scrollY;
            console.log(winH, contH, scrlT, floatH);

            if(window.matchMedia("(min-width:768px)").matches){
                if(scrlT > contH - winH - floatH) {
                    float.classList.add("stick");
                } else {
                    float.classList.remove("stick");
                }
            } else {
                if(scrlT > contH - winH - floatH - 184) {
                    float.classList.add("stick");
                } else {
                    float.classList.remove("stick");
                }
            }        
        })
    }
    
}

// 날짜 선택 슬라이드
function slctDateSlide() {
    if (document.querySelector(".comDateSwiper")) {
        
        const onDateBtn = document.querySelector(".dateBox.on");
        const dateSlide = onDateBtn.closest(".swiper-slide");
        const dateSlides = Array.from(dateSlide.parentNode.children);  
        const sdindex = dateSlides.indexOf(dateSlide); 

        let dateSwiper = new Swiper(".dateSwiper", {
            slidesPerView: "auto",
            spaceBetween: 12,
            centeredSlides: false,
            initialSlide: sdindex,
            navigation: {
                nextEl: ".swiper-button-next.selectDate",
                prevEl: ".swiper-button-prev.selectDate",
            },
        });
    }
}

// 일별달력 스와이퍼 Sticky
function dateCalInit () {
    const dateCal = document.querySelector(".comDateSwiper.sticky");

    if(dateCal) {
        const dateCalH = dateCal.getBoundingClientRect().top + window.scrollY;

        window.addEventListener("scroll", function(){
            // Sticky 추가
            if(window.scrollY > dateCalH - 74) {
                dateCal.classList.add("sOn");
            } else {
                dateCal.classList.remove("sOn");
            }

            dateBoxInit();
        })

    
    }
}

// 스크롤에 따라 dateBox .on 이동
function dateBoxInit() {
    const sections = document.querySelectorAll(".cptLinkSection");
    const slides = document.querySelectorAll(".dateSwiper .swiper-slide");
    const btns = document.querySelectorAll(".dateBox");
    
    sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            btns.forEach(btn => btn.classList.remove("on"));

            const targetS = slides[idx];
            if (targetS) {
                const targetB = targetS.querySelector(".dateBox");
                if (targetB) {
                    targetB.classList.add("on");
                }
            }
        }
    })
}

// 일별달력 클릭 시 스크롤 이동
function scrlMoveTo(link, nowBtn) {
    const elem = document.querySelector("#" + link);

    if(elem) {
        const moveY = elem.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({top:moveY - 160, behavior:"smooth"});
    } 
}

// 경륜정보 > 통계 > 자료데이터 슬라이드
function imgsDataSlide() {
    if(document.querySelector(".comDataSwiper")) {
        let imgDataSwiper = new Swiper(".imgDataSwiper", {
            pagination: {
                el: ".comDataSwiper .swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".comDataSwiper .swiper-button-next",
                prevEl: ".comDataSwiper .swiper-button-prev",
            },
        });
    }
}

// ------------------------------- 아코디언 함수 ------------------------------- //
//모드 아코디언 함수
function accordionInit(){
    const modAccos = document.querySelectorAll(".modAccordion");
    modAccos.forEach(function(modAcco,modIdx){
        const accoItems = modAcco.querySelectorAll(".accoArea");
        accoItems.forEach(function(accoItem,itemIdx,elements){
            const accoBtn = accoItem.querySelector(".accoTitle");
            const accoCont = accoItem.querySelector(".accoBody");
            accoBtn.addEventListener("click",function(){
                if(this.classList.contains("on")){
                    this.classList.remove("on");
                    slideUp(accoCont,300);
                    return;
                }
                this.classList.add("on");
                slideDown(accoCont,300);
            });
        });
    });
}


// ------------------------------- 아코디언 리스트 함수 ------------------------------- //
//모드 아코디언 리스트 함수
function accordionListInit(){
    const modAccos = document.querySelectorAll(".modAccordionList");
    modAccos.forEach(function(modAcco,modIdx){
        const accoItems = modAcco.querySelectorAll(".accoArea");
        accoItems.forEach(function(accoItem,itemIdx,elements){
            const accoBtn = accoItem.querySelector(".accoTitle");
            const accoCont = accoItem.querySelector(".accoBody");

            accoBtn.addEventListener("click",function(){
                elements.forEach(function(element, eleIdx){
                    if(element.classList.contains("on")){
                        element.classList.remove("on");
                        slideUp(element.querySelector(".accoBody"),300);
                    }else if(itemIdx == eleIdx){
                        element.classList.add("on");
                        slideDown(element.querySelector(".accoBody"),300);
                    }
                });
            });
        });
    });
}

// 컨텐츠 아코디언 슬라이드 함수
function contSlideOpen() {
    if(document.querySelector(".cptContSlide")) {
        const slideBtns = document.querySelectorAll(".cptContSlide .slideTit");

        slideBtns.forEach(function(slideBtn){
            slideBtn.addEventListener("click", function(){
                slideBtn.closest(".slideItem").classList.toggle("slideOn");
            })
        })
    }
}


// ------------------------------- input text reset 함수 ------------------------------- //
function inputTextReset(){
    let btnResets = document.querySelectorAll('.btnReset');
    btnResets.forEach(function(btn){
        btn.addEventListener('click', function(){
            btn.parentNode.querySelector('.iptText').value = "";
            fnValid.check();
        })
    })
}



// ------------------------------- 모의베팅 함수 ------------------------------- //
// 주간 지수 슬라이드
function recordSlide() {
        // 20241219 기능 정지
//     if (document.querySelector(".rcrdSwiper")) {
//         let recordSwiper = new Swiper(".rcrdSwiper", {
//             navigation: {
//                 nextEl: ".rcrdNavi .swiper-button-next",
//                 prevEl: ".rcrdNavi .swiper-button-prev",
//             },
//         });
//     }
}

// 랭킹 슬라이드
function rankSlide() {
    let rankSwiper = new Swiper(".rankSwiper", {
        loop: true,
        touchRatio:0,
        pagination: {
            el: ".rankingBox .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
}

// 경기 선택 슬라이드
function matchSlide(){
    if(document.querySelector(".cptBatSimul")){
        const onMatchBtn = document.querySelector(".matchBox.on");
        const matchSlide = onMatchBtn.closest(".swiper-slide");
        const matchSlides = Array.from(matchSlide.parentNode.children);  
        const sdindex = matchSlides.indexOf(matchSlide); 

        let matchSwiper = new Swiper(".matchSwiper", {
            slidesPerView: "auto",
            spaceBetween: 12,
            centeredSlides: false,
            initialSlide: sdindex,
            navigation: {
                nextEl: ".matchNavi .swiper-button-next",
                prevEl: ".matchNavi .swiper-button-prev",
            },
        });
    
        // ON 변경
        const matchBtns = document.querySelectorAll(".matchSlct .matchBox");
    
        matchBtns.forEach(function(matchBtn, idx){
            matchBtn.addEventListener("click", function(){
                let target = this.parentNode;
    
                matchBtns.forEach(function(others) {
                    others.classList.remove("on");
                });
                if (!matchBtn.classList.contains("disabled")) {
                    this.classList.add("on");
                    // swCenter(target);
                }
            })
        });
    }

    // 시작 시 ON 으로 이동
    /*
    const onMatchBtn = document.querySelector(".matchBox.on");
    const matchSlide = onMatchBtn.closest(".swiper-slide");
    const matchSlides = Array.from(matchSlide.parentNode.children);  
    const sdindex = matchSlides.indexOf(matchSlide); 
    matchSwiper.slideTo(sdindex);
    swCenter(sdindex)

    function swCenter(target) {
        const snbWrap = document.querySelector('.matchSwiper .swiper-wrapper');
        console.log(snbWrap);
        const targetRect = target.getBoundingClientRect(); 
        const box = document.querySelector('.matchSwiper');
        const boxHalf = box.clientWidth / 2; 
        let pos;
        let listWidth = 0; 

        document.querySelectorAll('.matchSwiper .swiper-wrapper .swiper-slide').forEach(function (slide) {
            listWidth += slide.offsetWidth;
        });

        const selectTargetPos = targetRect.left - snbWrap.getBoundingClientRect().left + target.offsetWidth / 2;

        if (selectTargetPos <= boxHalf) {
            // 왼쪽에 위치한 경우
            pos = 0;
        } else if (listWidth - selectTargetPos <= boxHalf) {
            // 오른쪽에 위치한 경우
            pos = listWidth - box.clientWidth;
        } else {
            // 중앙에 위치한 경우
            pos = selectTargetPos - boxHalf;
        }

        // 애니메이션 적용
        snbWrap.style.transform = 'translateX(' + pos * -1 + 'px)';
        snbWrap.style.transitionDuration = '500ms';
    }
    */
}

// 플로팅 푸터 옵션 toggle
function batFloating () {
    if (document.querySelector(".smlFloating")) {
        const batFoot = document.querySelector(".smlFloating");
        const batBtn = batFoot.querySelector(".btnSlide");
        const batDt = batFoot.querySelector(".contBox");

        batBtn.addEventListener("click", function(){
            batDt.classList.toggle("on");
        })
    }
}

// Tooltip toggle
function ttOpen(contId) {
    const ttBox = document.querySelector("#" + contId);
    const allttBox = document.querySelectorAll(".tooltipBox");

    if (ttBox.classList.contains("on")) {
        ttBox.classList.remove("on");
    } else {
        allttBox.forEach(function(tBox){
            tBox.classList.remove("on");
        })
        ttBox.classList.add("on");
    }
}
function ttClose(contId) {
    const ttBox = document.querySelector("#" + contId);
    ttBox.classList.remove("on");
}

// ------------------------------- 모션 함수 ------------------------------- //

//fade in
function fadeIn(element, duration){
    let opacity = 0;
    element.style.display = "block";
    element.style.opacity = opacity;
    let action = setInterval(function(){
        opacity += 10/duration;
        element.style.opacity = opacity;
        if(opacity >= 1){
            clearInterval(action);
        }
    }, 10);
}

//fade out
function fadeOut(element, duration){
    let opacity = 1;
    element.style.opacity = opacity;
    let action = setInterval(function(){
        opacity -= 10/duration;
        element.style.opacity = opacity;
        if(opacity <= 0){
            clearInterval(action);
            element.style.display = "none";
        }
    }, 10);
}

//fade toggle
function fadeToggle(element, duration){
    element.style.display == "block" ? fadeOut(element, duration) : fadeIn(element, duration);
}

//slide function (slideUp)
function slideUp(element, duration) {
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideUpInterval = setInterval(function() {
        currentStep++;
        element.style.height = (height - stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideUpInterval);
            element.style.display = "none";
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

//slide function (slideDown)
function slideDown(element, duration) {
    element.style.display = "block";
    element.style.height = "0px"; // 이 부분을 수정하여 초기 높이를 0으로 설정합니다.
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideDownInterval = setInterval(function() {
        currentStep++;
        element.style.height = (stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideDownInterval);
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

// ------------------------------- 기타 함수 ------------------------------- //
//parents 엘리먼트 찾기
function parentsElementFind(my, findElement){
    let parentElement = my.parentNode;
    for(let i = 0;i<=20;++i){
        if(!parentElement.classList.contains(findElement)){
            parentElement = my.parentNode.parentNode;
        }else{
            return parentElement;
        }
    }
}

// ------------------------------- datePicker ------------------------------- //
//날짜
function datePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd'
        }
    });
}
//날짜 + 시간
function timePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd HH:mm A'
        },
        timePicker: true
    });
}
//datePicker("datepicker-input","wrapper");

//날짜 기간~기간
function datePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd'
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}
//날짜 기간+시간 ~ 기간+시간
function timePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd HH:mm',
        timePicker: true
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}

//datePickerTo("startpicker-input", "startpicker-container", "endpicker-input", "endpicker-container");


// 경륜영상관 - 검색 박스 - 체크박스 이벤트
function inputCheckBoxAll(){
    if (document.querySelector(".searchOptionBox")){
        document.querySelectorAll('.searchOptionBox .frmGroup').forEach((form) => {
            const checkboxes = Array.from(form.querySelectorAll('.iptRdoChk[type=checkbox]'));
            const chkAll = checkboxes.find((el) => el.classList.contains('chkAll'));
            const otherCheckboxes = checkboxes.filter((el) => el !== chkAll);

            if (checkboxes.length > 1) {
                checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', (e) => {
                        handleCheckboxChange(e.target, chkAll, otherCheckboxes);
                    });
                });
            }
        });

        function handleCheckboxChange(target, chkAll, checkboxes) {
            if (target === chkAll) {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = chkAll.checked;
                });
            } else {
                const allChecked = checkboxes.every((checkbox) => checkbox.checked);
                chkAll.checked = allChecked;
            }
        }
    }
}

//개인정보 동의 박스 전체 동의/해제
function inputCheckAll(){
    if (document.querySelector(".comPrivacyBox")){
        document.querySelectorAll('.comPrivacyBox .infoBox').forEach((form) => {
            const checkboxes = Array.from(form.querySelectorAll('.iptChk[type=checkbox]'));
            const chkAll = checkboxes.find((el) => el.classList.contains('chkAll'));
            const otherCheckboxes = checkboxes.filter((el) => el !== chkAll);
            console.log(checkboxes)
            console.log(chkAll)
            console.log(otherCheckboxes)

            if (checkboxes.length > 1) {
                checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', (e) => {
                        handleCheckboxChange(e.target, chkAll, otherCheckboxes);
                    });
                });
            }
        });

        function handleCheckboxChange(target, chkAll, checkboxes) {
            if (target === chkAll) {
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = chkAll.checked;
                });
            } else {
                const allChecked = checkboxes.every((checkbox) => checkbox.checked);
                chkAll.checked = allChecked;
            }
        }
    }
}