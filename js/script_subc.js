//price(right_option) class는 가장 아래 있음
$(function(){
  class Header{
    constructor(menu, navi){
      this.menu = menu;
      this.navi = navi;
    }
    naviMethod(){
      let naviBox = [];
      const naviName = ["파워트래인", "외장 디자인", "내장 디자인", "옵션&패키지", "견적완료"];
      let i=0;
      while(i<naviName.length){
        naviBox += `<li id="li${i}"><a href="#">${naviName[i]}</a></li>`+
        `<span><i class="fas fa-angle-right"></i></span>`;
        i++;
      }
      this.navi.html(naviBox);
    }//navi 부분
  }
  const menu = $("#menu");
  const navi = $("#navi");
  const headerLeft = new Header(menu, navi);
  headerLeft.naviMethod();
class Box1{
  constructor(box1_con, right_option1){
    this.box1_con = box1_con;
    this.right_option1 = right_option1;
  }
  method(){
    const box_info= (box1_con) =>{
      let id = ['box1_info0','box1_info1','box1_info2'];
      let box1_info = [];
      let i=0;
      while(i<id.length){
        box1_info += 
        `<div id="${id[i]}" class="${id[i]} box1_info "></div>`;
        i++;
      }
      box1_con.html(box1_info);
    }
    box_info(this.box1_con);
    //첫번째 틀
    const imgUl = () =>{
      let engine=["engine0","engine1","engine2"];
      let lis=["<h1>2497</h1>", "<h1>3497</h1>", "<h1>4497</h1>"];
      let imgUl = [];
      let i=0;
      while(i<engine.length){
        imgUl += 
          `<img src="img/sub/box1/engine${i}.png" alt="engine${i}">`;
          $(`#box1_info${i}`).html(imgUl+`<ul></ul>`);
          imgUl = '';
        i++;
      }
    }
    imgUl();
    //두번째 틀 사진올리는 곳
    function lis() {
      let lis=[];
      let title = ["<p>배기량</p>","<p>최고속도</p>","<p>제로백</p>"];
      let detalil = [
        ["<h1>2497cc</h1>","<h1>280km</h1>","<h1>14초</h1>"],
        ["<h1>3497cc</h1>","<h1>380km</h1>","<h1>12초</h1>"],
        ["<h1>4497cc</h1>","<h1>480km</h1>","<h1>9초</h1>"]
      ]
      let i=0;
      while(i<3){
        let j=0;
        while(j<3){
          lis += 
          `<li class="infoLi${i}">${title[j]}${detalil[i][j]}</li>`;
          j++;
        }
        $(`#box1_info${i} ul`).html(lis);
        lis = '';
        i++;
      }
    }lis();
    //세번째 틀
    let optionBox = [];
    function rightOption(right_option1) {
       optionBox = 
      `<div id="box_right1" class="box1_right1 ">`+
          `<h3>파워트레인</h3>`+
          `<h2>1.엔진타입</h2>`+
        `</div>`+
      `<div id="box_right2" class="box1_right2 box1_right box1_effect">`+
          `<p>가솔린 2.5T</p>`+
          `<span data-price="0">+0원</span>`+
      `</div>`+
      `<div id="box_right3" class="box1_right3 box1_right">`+
          `<p>디젤 2.2T</p>`+
          `<span data-price="2500000">+2,500,000원</span>`+
      `</div>`+
      `<div id="box_right4" class="box1_right4 box1_right">`+
          `<p>가솔린 3.5T</p>`+
          `<span data-price="8500000">+8,500,000원</span>`+
      `</div>`;
      right_option1.html(optionBox);
    }rightOption(this.right_option1);
    //오른쪽 박스
    function boxeffect() {
      let box1Rights = document.querySelectorAll('.box1_right');
      let box1Son = document.querySelectorAll('#box1_con .box1_info');
      $("#box1_info0").addClass("son_effect")
      box1Rights.forEach((el,i) => {
        box1Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box1Rights.length; i++){
            box1Rights[i].classList.remove('box1_effect');
          }
        });
        box1Rights[i].addEventListener('click',()=>{
          box1Rights[i].classList.add('box1_effect')
        });
        box1Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box1Rights.length; i++){
            box1Son[i].classList.remove('son_effect');
          }
        });
        box1Rights[i].addEventListener('click',()=>{
          box1Son[i].classList.add('son_effect')
        });
      });
    }boxeffect();
    //효과
    //계산
}
}
const right_option1 = $("#right_option1");
const box1_con =  $("#box1_con");
const box1class  =  new Box1(box1_con, right_option1);
box1class.method();
// -------------------------------------- box1class end

class Box2{
  constructor(box2_con, right_option2){
    this.box2_con = box2_con;
    this.right_option2 = right_option2;
    let box2Numer = 0;
  }
  method(){
    function box_info(box1_con) {
      let id = ['box2_info0','box2_info1','box2_info2'];
      let box2_info = [];
      let i=0;
      while(i<id.length){
        box2_info += 
        `<div id="${id[i]}" class="${id[i]} box2_info "></div>`;
        i++;
      }
      box2_con.html(box2_info);
    }box_info(this.box2_con);
    //첫번째 틀
    function imgUl() {
      let ex=["ex0","ex1","ex2"];
      let imgUl = [];
      let i=0;
      while(i<ex.length){
        imgUl += 
          `<img src="img/sub/box2/ex${i}.jpg" alt="ex${i}">`;
          $(`#box2_info${i}`).html(imgUl+`<ul></ul>`);
          imgUl = '';
        i++;
      }
    }imgUl();
    //두번째 틀 사진올리는 곳
    function lis() {
      let lis=[];
      let title = ["<p>색상</p>"];

      let detalil = [
        "<h1>Bianco White</h1>",
        "<h1>Rosso Folgore</h1>",
        "<h1>Blu Emozione</h1>"
      ]
      let i=0;
      while(i<3){
          lis = 
          `<li class="infoLi${i}">${title[0]}${detalil[i]}</li>`;
        $(`#box2_info${i} ul`).html(lis);
        lis = '';
        i++;
      }
    }lis();
    //세번째 틀
    let optionBox = [];
    function rightOption(right_option2) {
       optionBox = 
      `<div id="box2_right1" class="box2_right1 ">`+
          `<h3>외장디자인</h3>`+
          `<h2>2.외장색상</h2>`+
        `</div>`+
      `<div id="box2_right2" class="box2_right2 box2_right box2_effect">`+
          `<p>Bianco White</p>`+
          `<span data-price="0">+0원</span>`+
      `</div>`+
      `<div id="box2_right3" class="box2_right3 box2_right">`+
          `<p>Rosso Folgore</p>`+
          `<span data-price="5500000">+5,500,000원</span>`+
      `</div>`+
      `<div id="box2_right4" class="box2_right4 box2_right">`+
          `<p>Blu Emozione</p>`+
          `<span data-price="5900000">+5,900,000원</span>`+
      `</div>`;
      right_option2.html(optionBox);
    }rightOption(this.right_option2);
    //오른쪽 박스
    function boxeffect() {
      let box2Rights = document.querySelectorAll('.box2_right');
      let box2Son = document.querySelectorAll('#box2_con .box2_info');
      $("#box2_info0").addClass("son_effect")

      box2Rights.forEach((el,i) => {
        box2Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box2Rights.length; i++){
            box2Rights[i].classList.remove('box2_effect');
          }
        });
        box2Rights[i].addEventListener('click',()=>{
          box2Rights[i].classList.add('box2_effect')
          // console.log(box2Num)
        });
        box2Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box2Rights.length; i++){
            box2Son[i].classList.remove('son_effect');
          }
        });
        box2Rights[i].addEventListener('click',()=>{
          box2Son[i].classList.add('son_effect')
        });
      });
    }
    boxeffect()
    //효과
    //계산
  }
}
const right_option2 = $("#right_option2");
const box2_con =  $("#box2_con");
const box2class  =  new Box2(box2_con, right_option2);
box2class.method();
class Box3{
  constructor(box3_con, right_option3){
    this.box3_con = box3_con;
    this.right_option3 = right_option3;
  }
  method(){
    function box_info(box3_con) {
      let id = ['box3_info0','box3_info1','box3_info2'];
      let box3_info = [];
      let i=0;
      while(i<id.length){
        box3_info += 
        `<div id="${id[i]}" class="${id[i]} box3_info "></div>`;
        i++;
      }
      box3_con.html(box3_info);
    }box_info(this.box3_con);
    //첫번째 틀
    function imgUl() {
      let ex=["in0","in1","in2"];
      let imgUl = [];
      let i=0;
      while(i<ex.length){
        imgUl += 
          `<img src="img/sub/box3/in${i}.jpg" alt="in${i}">`;
          $(`#box3_info${i}`).html(imgUl+`<ul></ul>`);
          imgUl = '';
        i++;
      }
    }imgUl();
    //두번째 틀 사진올리는 곳
    function lis() {
      let lis=[];
      let title = ["<p>색상</p>"];

      let detalil = [
        "<h1>Md Beige</h1>",
        "<h1>Gr Black</h1>",
        "<h1>It oriental</h1>"
      ]
      let i=0;
      while(i<3){
          lis = 
          `<li class="infoLi${i}">${title[0]}${detalil[i]}</li>`;
        $(`#box3_info${i} ul`).html(lis);
        lis = '';
        i++;
      }
    }lis();
    //세번째 틀
    let optionBox = [];
    function rightOption(right_option3) {
       optionBox = 
      `<div id="box3_right1" class="box3_right1 ">`+
          `<h3>내장디자인</h3>`+
          `<h2>3.실내색상</h2>`+
        `</div>`+
      `<div id="box3_right2" class="box3_right2 box3_right box3_effect">`+
          `<p>Md Beige</p>`+
          `<span data-price="0">+0원</span>`+
      `</div>`+
      `<div id="box3_right3" class="box3_right3 box3_right">`+
          `<p>Gr Black</p>`+
          `<span data-price="5500000">+5,500,000원</span>`+
      `</div>`+
      `<div id="box3_right4" class="box3_right4 box3_right">`+
          `<p>It oriental</p>`+
          `<span data-price="5900000">+5,900,000원</span>`+
      `</div>`;
      right_option3.html(optionBox);
    }rightOption(this.right_option3);
    //오른쪽 박스
    function boxeffect() {
      let box3Rights = document.querySelectorAll('.box3_right');
      let box3Son = document.querySelectorAll('#box3_con .box3_info');
      $("#box3_info0").addClass("son_effect")

      box3Rights.forEach((el,i) => {
        box3Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box3Rights.length; i++){
            box3Rights[i].classList.remove('box3_effect');
          }
        });
        box3Rights[i].addEventListener('click',()=>{
          box3Rights[i].classList.add('box3_effect')
        });
        box3Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box3Rights.length; i++){
            box3Son[i].classList.remove('son_effect');
          }
        });
        box3Rights[i].addEventListener('click',()=>{
          box3Son[i].classList.add('son_effect')
        });
      });
    }boxeffect();
    //효과

    //계산
  }
}
const right_option3 = $("#right_option3");
const box3_con =  $("#box3_con");
const box3class  =  new Box3(box3_con, right_option3);
box3class.method();
class Box4{
  constructor(box4_con, right_option4){
    this.box4_con = box4_con;
    this.right_option4 = right_option4;
  }
  method(){
    function box_info(box4_con) {
      let id = ['box4_info0','box4_info1','box4_info2'];
      let box4_info = [];
      let i=0;
      while(i<id.length){
        box4_info += 
        `<div id="${id[i]}" class="${id[i]} box4_info "></div>`;
        i++;
      }
      box4_con.html(box4_info);
    }box_info(this.box4_con);
    //첫번째 틀
    function imgUl() {
      let ex=["package0","package1","package2"];
      let imgUl = [];
      let i=0;
      while(i<ex.length){
        imgUl += 
          `<img src="img/sub/box4/package${i}.jpg" alt="package${i}">`;
          $(`#box4_info${i}`).html(imgUl+`<ul></ul>`);
          imgUl = '';
        i++;
      }
    }imgUl();
    //두번째 틀 사진올리는 곳
    function lis() {
      let lis=[];
      let title = ["<p>색상</p>"];

      let detalil = [
        "<h1>Bianco White</h1>",
        "<h1>Rosso Folgore</h1>",
        "<h1>Blu Emozione</h1>"
      ]
      let i=0;
      while(i<3){
          lis = 
          `<li class="infoLi${i}">${title[0]}${detalil[i]}</li>`;
        $(`#box4_info${i} ul`).html(lis);
        lis = '';
        i++;
      }
    }lis();
    //세번째 틀
    let optionBox = [];
    function rightOption(right_option4) {
       optionBox = 
      `<div id="box4_right1" class="box4_right1 ">`+
          `<h3>패키지시스템</h3>`+
          `<h2>4.세부사항</h2>`+
        `</div>`+
      `<div id="box4_right2" class="box4_right2 box4_right box4_effect">`+
          `<p>스마트컨트롤</p>`+
          `<span data-price="1500000">+1,500,000원</span>`+
      `</div>`+
      `<div id="box4_right3" class="box4_right3 box4_right">`+
          `<p>Rosso Folgore</p>`+
          `<span data-price="5500000">+5,500,000원</span>`+
      `</div>`+
      `<div id="box4_right4" class="box4_right4 box4_right">`+
          `<p>Blu Emozione</p>`+
          `<span data-price="5900000">+5,900,000원</span>`+
      `</div>`;
      right_option4.html(optionBox);
    }rightOption(this.right_option4);
    //오른쪽 박스
    function boxeffect() {
      let box4Rights = document.querySelectorAll('.box4_right');
      let box4Son = document.querySelectorAll('#box4_con .box4_info');
      $("#box4_info0").addClass("son_effect")

      box4Rights.forEach((el,i) => {
        box4Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box4Rights.length; i++){
            box4Rights[i].classList.remove('box4_effect');
          }
        });
        box4Rights[i].addEventListener('click',()=>{
          box4Rights[i].classList.add('box4_effect')
        });
        box4Rights[i].addEventListener('click',()=>{
          for(var i=0; i<box4Rights.length; i++){
            box4Son[i].classList.remove('son_effect');
          }
        });
        box4Rights[i].addEventListener('click',()=>{
          box4Son[i].classList.add('son_effect')
        });
      });
    }boxeffect();
    //효과

    //계산
  }

}
const right_option4 = $("#right_option4");
const box4_con =  $("#box4_con");
const box4class  =  new Box4(box4_con, right_option4);
box4class.method();

class Box5{
  constructor(){
  }
  box5Method(){
    let box2Select = $(".box2_right")
    let box5Img = $("#box5Img");
    box5Img.css("background-image","url('../img/sub//box6/ex0.jpg')")
    $.each(box2Select,function (i,el) {
      box2Select.eq(i).on("click",function(){
        box5Img.css("background-image","url('../img/sub//box6/ex"+i+".jpg')")
      })
    })
  }
}
const box5Class = new Box5()
box5Class.box5Method();

  let navi_lis = document.querySelectorAll('#navi li');
  navi_lis.forEach((el,i) => {
    let body_boxes = document.querySelectorAll('body .box');

    navi_lis[i].addEventListener('click',()=>{
      let count = 0;
      while(count<navi_lis.length){
      body_boxes[count].style.display = 'none';
      count++;
      }
    });
    navi_lis[i].addEventListener('click',()=>{
      body_boxes[i].style.display = 'flex';
    });
  });

  const cal= () => {
    let boxprice = [0,0,0,1500000];
    let boxOption = ["가솔린 2.5T","Bianco White",'Md Beige','스마트컨트롤'];
    $("#right_option1>.box1_right").on("click",function (){
      let a= $(this).find("span").attr("data-price");
      boxOption[0] = $(this).find("p").html();
      boxprice[0] = Number(a);
    })
    $("#right_option2>.box2_right").on("click",function (){
      let a= $(this).find("span").attr("data-price");
      boxOption[1] = $(this).find("p").html();
      boxprice[1] = Number(a);
    })
    $("#right_option3>.box3_right").on("click",function (){
      let a= $(this).find("span").attr("data-price");
      boxOption[2] = $(this).find("p").html();
      boxprice[2] = Number(a);
    })
    $("#right_option4>.box4_right").on("click",function (){
      let a= $(this).find("span").attr("data-price");
      boxOption[3] = $(this).find("p").html();
      boxprice[3] = Number(a);
    })

    $(window).on("click",function(e) {
      let totalPrice =52500000+ boxprice[0]+boxprice[1]+boxprice[2]+boxprice[3];
      $("#totalPrice").html(totalPrice.toLocaleString())
        const quotation = () => {
          let quotationBox = [];
          quotationBox +=
          `
          <li>
              <h4>파워트래인 : 1.엔진타입</h4>
              <h4>${boxOption[0]} : ${boxprice[0].toLocaleString()}원</h4>
          </li>
          <li>
            <h4>외장디자인 : 2.색상</h4>
            <h4>${boxOption[1]} : ${boxprice[1].toLocaleString()}원</h4>
          </li>
          <li>
            <h4>내장디자인 : 3.실내색상</h4>
            <h4>${boxOption[2]} : ${boxprice[2].toLocaleString()}원</h4>
          </li>
          <li>
            <h4>옵션&패키지 : 4.세부사항</h4>
            <h4>${boxOption[3]} : ${boxprice[3].toLocaleString()}원</h4>
          </li>
          `;
          return quotationBox;
        }
      $("#box5").find("ul").html(quotation());
      $("#popup").find("ul").html(quotation());
      $("#popup h2").find("span").html(totalPrice.toLocaleString());
      if(e.target.parentNode==total_next){
        $("#popup").removeClass("popnone"); 
      }//견적보기 팝업 띄우기
      if(e.target.parentNode==total_prev || e.target.className=="close"){
        $("#popup").addClass("popnone"); 
      }//견적보기 팝업 없애기
     })
  }
  cal();
});//마지막
