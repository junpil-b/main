// 헤더 타이핑
let target = document.querySelector("#header_text");

function randomString() {

   let stringArr = ["The best way to be pretty"] 
   let selectString = stringArr[0]; 
   let selectStringArr = selectString.split("");

   return selectStringArr;
}

// 문자열을 한 글자 씩 출력하는 함수
function headerTyping(randomArr) { 
   if (randomArr.length > 0) {
      target.textContent += randomArr.shift();

      setTimeout(function () {
         headerTyping(randomArr);
      }, 100); 

   } else {
      setTimeout(resetTyping, 5000);
   }
}


headerTyping(randomString());

// 텍스트 출력 완료 후 커서 깜빡임 효과
function blink() {
   target.classList.toggle('active');
}
setInterval(blink, 500);


// 타이핑 후 리셋시키는 함수
function resetTyping() {
   target.textContent = "";

   headerTyping(randomString());
}

//  슬라이드
const SHOWING_CLASS = "showing"; 
const firstSlide = document.querySelector(".slide_item:first-child");

function slide() {

   const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

   if (currentSlide) { // 
      currentSlide.classList.remove(SHOWING_CLASS); 

      const nextSlide = currentSlide.nextElementSibling; 

      if (nextSlide) { 
         nextSlide.classList.add(SHOWING_CLASS);

      } else { 
         firstSlide.classList.add(SHOWING_CLASS); 
      }

   } else {
      firstSlide.classList.add(SHOWING_CLASS);
   }
}

slide();
setInterval(slide, 3000);

// 신제품 왼쪽 텍스트
let currentText = 0; 
let positionText = 0; 
const TEXT_WIDTH = 280; 
const textDes = document.querySelector('.new_item_box');

// 신제품 오른쪽 이미지
let currentImg = 0; 
let positionImg = 0; 
const IMG_WIDTH = 500; 
const imgDes = document.querySelector('.new_item_img');

const leftBtn = document.querySelector('.text_btn_left');
const rightBtn = document.querySelector('.text_btn_right');

// 다음 텍스트
function next() {
   if (currentText < 2) { 
      positionText -= TEXT_WIDTH;
      textDes.style.transform = `translateX(${positionText}px)`;
      currentText += 1;
   }
}

function prev() {
   if (currentText > 0) {
      positionText += TEXT_WIDTH;
      textDes.style.transform = `translateX(${positionText}px)`;
      currentText -= 1;
   }
}

// 다음 이미지
function next_img() {
   if (currentImg < 2) {
      positionImg -= IMG_WIDTH;
      imgDes.style.transform = `translateX(${positionImg}px)`;
      currentImg += 1;
   }
}

function prev_img() {
   if (currentImg > 0) {
      positionImg += IMG_WIDTH;
      imgDes.style.transform = `translateX(${positionImg}px)`;
      currentImg -= 1;
   }
}

// 초기화 함수, 첫 번째 상태
function init_box() {
   rightBtn.addEventListener("click", next);
   rightBtn.addEventListener("click", next_img);
   leftBtn.addEventListener("click", prev);
   leftBtn.addEventListener("click", prev_img);
}
init_box();

// 추천 상품
document.getElementById('rec_item_2').style.display = "none";
document.getElementById('rec_item_3').style.display = "none";
document.getElementById('rec_item_4').style.display = "none";
document.getElementById('rec_item_5').style.display = "none";

function rec_item(str) {
   if (str == 'item_2') {
      document.getElementById('rec_item_1').style.display = "none";
      document.getElementById('rec_item_2').style.display = "";
      document.getElementById('rec_item_3').style.display = "none";
      document.getElementById('rec_item_4').style.display = "none";
      document.getElementById('rec_item_5').style.display = "none";
      document.getElementById('rec_btn_2').style.background = "#7dac26";
      document.getElementById('rec_btn_2').style.color = "white";
      document.getElementById('rec_btn_1').style.background = "";
      document.getElementById('rec_btn_1').style.color = "";
      document.getElementById('rec_btn_3').style.background = "";
      document.getElementById('rec_btn_3').style.color = "";
      document.getElementById('rec_btn_4').style.background = "";
      document.getElementById('rec_btn_4').style.color = "";
      document.getElementById('rec_btn_5').style.background = "";
      document.getElementById('rec_btn_5').style.color = "";

   } else if (str == 'item_3') {
      document.getElementById('rec_item_1').style.display = "none";
      document.getElementById('rec_item_2').style.display = "none";
      document.getElementById('rec_item_3').style.display = "";
      document.getElementById('rec_item_4').style.display = "none";
      document.getElementById('rec_item_5').style.display = "none";
      document.getElementById('rec_btn_3').style.background = "#7dac26";
      document.getElementById('rec_btn_3').style.color = "white";
      document.getElementById('rec_btn_1').style.background = "";
      document.getElementById('rec_btn_1').style.color = "";
      document.getElementById('rec_btn_2').style.background = "";
      document.getElementById('rec_btn_2').style.color = "";
      document.getElementById('rec_btn_4').style.background = "";
      document.getElementById('rec_btn_4').style.color = "";
      document.getElementById('rec_btn_5').style.background = "";
      document.getElementById('rec_btn_5').style.color = "";

   } else if (str == 'item_4') {
      document.getElementById('rec_item_1').style.display = "none";
      document.getElementById('rec_item_2').style.display = "none";
      document.getElementById('rec_item_3').style.display = "none";
      document.getElementById('rec_item_4').style.display = "";
      document.getElementById('rec_item_5').style.display = "none";
      document.getElementById('rec_btn_4').style.background = "#7dac26";
      document.getElementById('rec_btn_4').style.color = "white";
      document.getElementById('rec_btn_1').style.background = "";
      document.getElementById('rec_btn_1').style.color = "";
      document.getElementById('rec_btn_2').style.background = "";
      document.getElementById('rec_btn_2').style.color = "";
      document.getElementById('rec_btn_3').style.background = "";
      document.getElementById('rec_btn_3').style.color = "";
      document.getElementById('rec_btn_5').style.background = "";
      document.getElementById('rec_btn_5').style.color = "";

   } else if (str == 'item_5') {
      document.getElementById('rec_item_1').style.display = "none";
      document.getElementById('rec_item_2').style.display = "none";
      document.getElementById('rec_item_3').style.display = "none";
      document.getElementById('rec_item_4').style.display = "none";
      document.getElementById('rec_item_5').style.display = "";
      document.getElementById('rec_btn_5').style.background = "#7dac26";
      document.getElementById('rec_btn_5').style.color = "white";
      document.getElementById('rec_btn_1').style.background = "";
      document.getElementById('rec_btn_1').style.color = "";
      document.getElementById('rec_btn_2').style.background = "";
      document.getElementById('rec_btn_2').style.color = "";
      document.getElementById('rec_btn_3').style.background = "";
      document.getElementById('rec_btn_3').style.color = "";
      document.getElementById('rec_btn_4').style.background = "";
      document.getElementById('rec_btn_4').style.color = "";

   } else {
      document.getElementById('rec_item_1').style.display = "";
      document.getElementById('rec_item_2').style.display = "none";
      document.getElementById('rec_item_3').style.display = "none";
      document.getElementById('rec_item_4').style.display = "none";
      document.getElementById('rec_item_5').style.display = "none";
      document.getElementById('rec_btn_1').style.background = "#7dac26";
      document.getElementById('rec_btn_1').style.color = "white";
      document.getElementById('rec_btn_2').style.background = "";
      document.getElementById('rec_btn_2').style.color = "";
      document.getElementById('rec_btn_3').style.background = "";
      document.getElementById('rec_btn_3').style.color = "";
      document.getElementById('rec_btn_4').style.background = "";
      document.getElementById('rec_btn_4').style.color = "";
      document.getElementById('rec_btn_5').style.background = "";
      document.getElementById('rec_btn_5').style.color = "";
   }
}

// 메인화면 사이드 바 로그인 안 하면 마이페이지 이동 X
function my_page() {
   if (document.getElementById('input_test').value == "") {
      alert('로그인 후 사용 가능합니다.')
      return;

   } else if (document.getElementById('input_test').value != "") {
      location.href = "beautyfoam_my.html";
   }
}

// 리뷰 슬라이드
$(document).ready(function () {
   $(".review_slide").not(".active").hide();

   setInterval(nextSlide, 5000);
});

//이전 슬라이드
function prevSlide() {
   $(".review_slide").hide(); 
   var allSlide = $(".review_slide"); 
   var currentIndex = 0; 

   //반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
   $(".review_slide").each(function (index, item) {

      if ($(this).hasClass("active")) {
         currentIndex = index;
      }
   });

   //새롭게 나타낼 div의 index
   var newIndex = 0;

   if (currentIndex <= 0) {
      newIndex = allSlide.length - 1;

   } else {
      newIndex = currentIndex - 1;
   }

   // 모든 div에서 active 클래스 제거
   $(".review_slide").removeClass("active");
   $(".review_slide").eq(newIndex).addClass("active");
   $(".review_slide").eq(newIndex).show();
}

//다음 슬라이드
function nextSlide() {
   $(".review_slide").hide();
   var allSlide = $(".review_slide");
   var currentIndex = 0;

   $(".review_slide").each(function (index, item) {
      if ($(this).hasClass("active")) {
         currentIndex = index;
      }
   });

   var newIndex = 0;

   if (currentIndex >= allSlide.length - 1) {
      newIndex = 0;
   } else {
      newIndex = currentIndex + 1;
   }

   $(".review_slide").removeClass("active");
   
   $(".review_slide").eq(newIndex).addClass("active");
   $(".review_slide").eq(newIndex).show();

}