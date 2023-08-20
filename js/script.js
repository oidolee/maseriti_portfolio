$(function(){
//   ---------------------------------------nav menu 효과 start ---
    const header = document.querySelector("header")
    const nav_menu = document.querySelector('nav .menu'),
        menu_li = document.querySelectorAll('.menu>li'),
        header_bg = document.querySelector('.header_bg');
        $(menu_li).on("mouseover",function(){
            $(this).find('.sub').stop().slideDown();
         }).on("mouseout",function(){
            $(this).find('.sub').stop().slideUp();
         })
    // -----스크롤 100초과면 headerd에 background-color 나타남---
    window.addEventListener('scroll',header_pop)
    function header_pop(e){
        if(window.scrollY > 100 ){
            header.classList.add('header_bgcolor');
            nav_menu.classList.add('menu_effect');
        }else{
            header.classList.remove('header_bgcolor'); 
            nav_menu.classList.remove('menu_effect'); 
        }
    }
                // ---- 가로 468px일때 반응형
    let menu_icon = document.querySelector('header p'),
        menu = document.querySelector('.menu');
        // bg_color = document.querySelector('.backColor');
    
    menu_icon.addEventListener('click',function(){
        $(header_bg).stop().slideToggle(300);
            menu.classList.toggle('new_menu');
    });
//   ---------------------------------------nav menu 효과 end ---
//   ----------------slider fadeIn/Out 효과 시작---
    let slides = document.querySelectorAll('.slider_box li'),
        slidesCount = slides.length;
    let i =0;
    function slide(){
        i++;
        if(i>slidesCount-1){
            i = 0;
        }
        $('.slider_box li').eq(i).stop().fadeIn(1000);//해당 슬라이드 화면구현
        $('.slider_box li').eq(i-1).stop().fadeOut(1000);//이전 슬라이드 사라짐
        $(".check_box li").eq(i).addClass("checkEffect");//하단 버튼 화면구현 
        $(".check_box li").eq(i-1).removeClass("checkEffect");//이전 버튼 사라짐
        $(".check_box>li").on("click",function(){
            clearInterval(move_slider)
        })//하단 버튼 클릭시 -> 자동슬라이드 정지
    }
        let move_slider = setInterval(slide,2000);
        //자동슬라이드 구현
    $("#play").on("click",function(){
        let move_slider = setInterval(slide,2000);
        $("#pause, #next, #prev").on("click",function(){
            clearInterval(move_slider)
        })
    })
    $("#pause").on("click",function(){
        clearInterval(move_slider)
    })
    $('.check_box li').each(function(index){
        $(this).click(function(){
            $('.slider_box li').stop().fadeOut();
            $('.slider_box li').eq(index).stop().fadeIn();
            $(".check_box li").removeClass("checkEffect");
            $(".check_box li").eq(index).addClass("checkEffect");

        })
    });
    $(window).on("click",function(e){
        switch(e.target.id){
            case 'next' :
                clearInterval(move_slider)
                i++;
                if(i>slidesCount-1){
                    i = 0;
                }
                $('.slider_box li').eq(i).stop().fadeIn(1000);
                $(".check_box li").eq(i).addClass("checkEffect");
                $('.slider_box li').eq(i-1).stop().fadeOut(1000);
                $(".check_box li").eq(i-1).removeClass("checkEffect");
            break;
            case 'prev' : 
                clearInterval(move_slider)
                i--;
                if(i<-1){
                    i = 1;
                }
                $('.slider_box li').eq(i).stop().fadeIn(1000);
                $(".check_box li").eq(i).addClass("checkEffect");
                $('.slider_box li').eq(i+1).stop().fadeOut(1000);
                $(".check_box li").eq(i+1).removeClass("checkEffect");
            break;
        }
    })//슬라이드 좌우 버튼 부분 마무리 
//   ----------------slider fadeIn/Out 효과 끝 ---

    // -------------.box2 start---------------
    class Box2Right{
        constructor(version_box){
            this.version_box = version_box;
        }
        right_effect(){
            let i=0;
            let arr = [];
            const title = ["Levante", "Levante-s", "Quattroporte", "Quattroporte-trofeo"];
            while(i<4){
                arr += `<li id="myversion${i}" class="myversion${i} myversion">`+
                                `<div id="version_middle${i}" class="version_middle${i} version_middle">`+
                                    `<div id="version_img${i}" class="version_img${i} version_img"></div>`+
                                `</div>`+
                                `<div id="version_top${i}" class="version_top${i} version_top">`+
                                    `<h1>${title[i]}</h1>`+
                                 `</div>`+

                                `<div id="version_bottom${i}" class="version_bottom${i} version_bottom">`+
                                    `<div id="left_specifics${i}" class="left_specifics${i} car_specifics">`+
                                        `<a href=index.html><img src="img/main/box2/makeMycar.svg" alt="makeMycar"></a>`+
                                        `<p>내 차량 만들기</p>`+
                                    `</div>`+
                                    `<div id="middle_specifics${i}" class="middle_specifics${i} car_specifics">`+
                                        `<a href=index.html><img src="img/main/box2/testCar.svg" alt="testCar"></a>`+
                                        `<p>시승신청</p>`+
                                    `</div>`+
                                    `<div id="right_specifics${i}" class="right_specifics${i} car_specifics">`+
                                        `<a href=index.html><img src="img/main/box2/placeCar.svg" alt="placeCar"></a>`+
                                        `<p>매장위치</p>`+
                                    `</div>`+
                                `</div>`+
                        `</li>`
                i++;
            }
            this.version_box.html(arr);
        }
    }
    const right_box = $("#version_box")
    const box2Right_Class = new Box2Right(right_box);
    box2Right_Class.right_effect();
    class Box2Left{
        constructor(box2, lis, index, click_prev, click_next, right_box ){
            this.box2 = box2;
            this.lis = lis;
            this.index = index;
            this.click_prev = click_prev;
            this.click_next = click_next;
            this.right_box = right_box;
        }
        box2Effect(){
            let data_value = 1;
            const right_li = $("#version_box li")//오른쪽 li 박스들
            $.each(this.lis, (i,el)=>{
                this.lis.eq(i).on("click",()=>{
                    let i=0;
                    while(i<this.lis.length){
                            this.lis.eq(i).removeClass("version_effect");
                            right_li.eq(i).hide();
                        i++;
                    }
                })//전체 삭제

                this.lis.eq(i).on("click",()=>{
                    this.lis.eq(i).addClass("version_effect");
                    this.index  = Number(this.lis.eq(i).attr("data-version"));
                    right_li.eq(i).show();
                })//원하는 클릭 띄우기
            })//클릭 반복문 마무리
        }
        box2Prev(){
            const right_li = $("#version_box li")//오른쪽 li 박스들
            this.click_prev.on("click",()=>{
                let i=0;
                while(i<this.lis.length){
                    this.lis.eq(i).removeClass("version_effect")
                    right_li.eq(i).hide();
                    i++;
                }//클릭 시 전체 클래스 값 지우기

                if(this.index<0){
                    this.index = 4;
                }//this.index 값을 if문으로 다시 올려둠
                this.lis.eq(--this.index).addClass("version_effect");
                right_li.eq(this.index).show();
            })
        }//이전 버튼 클릭 시 효과
        box2Next(){
            const right_li = $("#version_box li")//오른쪽 li 박스들
            this.click_next.on("click",()=>{
                let i=0;
                while(i<this.lis.length){
                    this.lis.eq(i).removeClass("version_effect")
                    right_li.eq(i).hide();
                    i++;
                }//클릭 시 전체 클래스 값 지우기

                if(this.index>2){
                    this.index = -1;
                }//this.index 값을 if문으로 다시 올려둠
                this.lis.eq(++this.index).addClass("version_effect");
                right_li.eq(this.index).show();
            })
        }//이전 버튼 클릭 시 효과
    }
    const box2 = $("#box2");
    const lis = $("#select_box li");
    const index = 0;
    const version_prev = $("#version_prev");
    const version_next = $("#version_next");
    const box2Left_Class = new Box2Left(box2, lis, index, version_prev, version_next);
    box2Left_Class.box2Effect()
    box2Left_Class.box2Prev();
    box2Left_Class.box2Next();
            // --------.box2 end------------
    // -------------.box3 start---------------
            $('.box3').mouseover(function(){
                $('.box3_top p').stop().fadeIn(1500);
            });
            $('.box3_bottom li').mouseover(function(){
                $(this).find('p').removeClass('box3_p_effect');
                $(this).find('p').addClass('box3_change');
            }).mouseout(function(){
                $(this).find('p').addClass('box3_p_effect');
                $(this).find('p').removeClass('box3_change');             
            });
            $('.box3_bottom li').mouseover(function(){
                $(this).find('div').removeClass('box_info');
                $(this).find('div').addClass('box_info_change');
            }).mouseout(function(){
                $(this).find('div').addClass('box_info');
                $(this).find('div').removeClass('box_info_change');
            });
            // --------.box3 end------------
            // -----------.box4 start---
            const box4_arr = document.querySelectorAll('.box4_bottom>div'),
                  box4_bg = document.querySelectorAll('.box4_box_bg');
                  box4_iconbox = document.querySelectorAll('.box4_iconbox'),
                  box4_arr.forEach(function(item,i){
                    box4_arr[i].addEventListener("mouseover",function(){
                        box4_bg[i].style.display = "block";
                        box4_iconbox[i].style.display = "block";
                    });
                    box4_arr[i].addEventListener("mouseout",function(){
                        box4_bg[i].style.display = "none";
                        box4_iconbox[i].style.display = "none";
                    });
                });
                const box4_bottom = document.querySelector('.box4_bottom'),
                      box4_box = document.querySelectorAll('.box4_box');

                box4_bottom.addEventListener('mouseover',function(){
                    box4_box.forEach(function(item,i){
                        box4_box[i].classList.remove('box4_box_effect');
                    });
                });
                const box4 = $('.box4');
                const box4OST = $(box4).offset().top;
                $(window).scroll(function(){
                    if($(this).scrollTop() > box4OST-300){
                        $('.box4_list1').addClass('box4_img1');
                        $('.box4_list2').addClass('box4_img2');
                        $('.box4_list3').addClass('box4_img3');
                    }
                });
                // -----------------------------------.box4 end---
            // -----------.box5 start---
                const box5 = $('#box5');
                const box5OST = $(box5).offset().top;
                console.log(box5OST);

                $(window).scroll(function(){
                    if($(this).scrollTop()>box5OST-400){
                        $('#box5>#box5_box').stop().fadeIn();
                    }
                });
            // -----------------------------------.box5 end---
        // --------.box6 start---
                const box6 = document.querySelector('#box6'),
                        box6offset =  box6.offsetTop;
                window.addEventListener('scroll',function(){
                    if(box6offset<(window.scrollY+100)){
                        // $('.box6_standard').removeClass('box6_effet');
                        $('.box6_standard').eq(0).addClass('box6_move0');
                        $('.box6_standard').eq(1).addClass('box6_move1');
                        $('.box6_standard').eq(2).addClass('box6_move2');
                    }
                });
            // -----------------------------------.box6 end---
            // --------.box7효과 시작 ------------
            const box7 = document.querySelector('#box7'),
            box7offset =  box7.offsetTop;

            window.addEventListener('scroll',function(){
                if(box7offset<(window.scrollY+100)){
                    function start_car(){
                        let start_engine_red = document.querySelector('.start_engine_red'),
                        light_car = document.querySelector('.box7_2');
                            start_engine_red.classList.remove('disappear');
                            light_car.classList.remove('disappear');
                    }
                    start_car()
                }
            });
// ---------------------------.box7효과 끝 ------------
   
});