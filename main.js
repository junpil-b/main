// 소개
let about = document.querySelector(".about")

// 소개 게이지
let photo_bar = document.querySelector('.photo_bar > div');
let illust_bar = document.querySelector('.illust_bar > div');
let html_bar = document.querySelector('.html_bar > div');
let css_bar = document.querySelector('.css_bar > div');
let js_bar = document.querySelector('.js_bar > div');
let jq_bar = document.querySelector('.jq_bar > div');

// 파노라마
let portfolio_1_bg = document.querySelector(".portfolio_1_bg");
let portfolio_1_title = document.querySelector(".portfolio_1_title");
let portfolio_1_left = document.querySelector(".portfolio_1_left");
let portfolio_1_btn = document.querySelector(".portfolio_1_btn");
let portfolio_1_right = document.querySelector(".portfolio_1_right");

// 뷰티폼
let portfolio_2_bg = document.querySelector(".portfolio_2_bg");
let portfolio_2_title = document.querySelector(".portfolio_2_title");
let portfolio_2_left = document.querySelector(".portfolio_2_left");
let portfolio_2_btn = document.querySelector(".portfolio_2_btn");
let portfolio_2_right = document.querySelector(".portfolio_2_right");

// 베이드립
let portfolio_3_bg = document.querySelector(".portfolio_3_bg");
let portfolio_3_title = document.querySelector(".portfolio_3_title");
let portfolio_3_left = document.querySelector(".portfolio_3_left");
let portfolio_3_btn = document.querySelector(".portfolio_3_btn");
let portfolio_3_right = document.querySelector(".portfolio_3_right");

// etc
let etc_reveal = document.querySelector(".etc_reveal:last-of-type");
let etc_reveal2 = document.querySelector(".etc_reveal:last-of-type span");
let reveal_text = document.querySelector(".reveal_text");
let etc_border = document.querySelector(".etc_border");

// 아웃트로
let footer_box = document.querySelector(".footer_box");
let outro_des = document.querySelector(".outro_des");
let outro_text = document.querySelector(".outro_text > span");

// 스크롤에 따른 애니메이션
window.addEventListener('scroll', function () {

  let value = window.scrollY;

  console.log(value);

  // 소개, 소개 게이지
  if (value < 500) {
    about.style.animation = "disappear 1s ease-out forwards";
    photo_bar.style.animation = "disappear 1s ease-out forwards";
    illust_bar.style.animation = "disappear 1s ease-out forwards";
    html_bar.style.animation = "disappear 1s ease-out forwards";
    css_bar.style.animation = "disappear 1s ease-out forwards";
    js_bar.style.animation = "disappear 1s ease-out forwards";
    jq_bar.style.animation = "disappear 1s ease-out forwards";

  } else if (value > 1800) {
    about.style.animation = "disappear 1s ease-out forwards";
    photo_bar.style.animation = "disappear 1s ease-out forwards";
    illust_bar.style.animation = "disappear 1s ease-out forwards";
    html_bar.style.animation = "disappear 1s ease-out forwards";
    css_bar.style.animation = "disappear 1s ease-out forwards";
    js_bar.style.animation = "disappear 1s ease-out forwards";
    jq_bar.style.animation = "disappear 1s ease-out forwards";

  } else {
    about.style.animation = "appear2 1s ease-out";
    photo_bar.style.animation = "photo 1.5s ease-out";
    illust_bar.style.animation = "illust 1.5s ease-out forwards";
    html_bar.style.animation = "html 1.5s ease-out forwards";
    css_bar.style.animation = "css 1.5s ease-out forwards";
    js_bar.style.animation = "js 1.5s ease-out forwards";
    jq_bar.style.animation = "jq 1.5s ease-out forwards";
  }

  // 파노라마
  if (value < 1700) {
    portfolio_1_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_1_title.style.animation = "disappear2 1s ease-out forwards";

  } else if (value > 2800) {
    portfolio_1_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_1_title.style.animation = "disappear2 1s ease-out forwards";

  } else {
    portfolio_1_bg.style.animation = "fadein 1.5s ease-out forwards";
    portfolio_1_title.style.animation = "appear2 1s ease-out forwards";
  }

  // 파노라마 상세
  if (value < 3100) {
    portfolio_1_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_1_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_1_right.style.animation = "fadeout 1s ease-out forwards";

  } else if (value > 4100) {
    portfolio_1_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_1_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_1_right.style.animation = "fadeout 1s ease-out forwards";

  } else {
    portfolio_1_left.style.animation = "appear 1.5s ease-out forwards";
    portfolio_1_btn.style.animation = "appear 1.5s ease-out forwards";
    portfolio_1_right.style.animation = "fadein 5s ease-out forwards";
  }

  // 뷰티폼
  if (value < 3800) {
    portfolio_2_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_2_title.style.animation = "disappear2 1s ease-out forwards";

  } else if (value > 4800) {
    portfolio_2_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_2_title.style.animation = "disappear2 1s ease-out forwards";

  } else {
    portfolio_2_bg.style.animation = "fadein 1.5s ease-out forwards";
    portfolio_2_title.style.animation = "appear2 1.5s ease-out forwards";
  }

  // 뷰티폼 상세
  if (value < 5100) {
    portfolio_2_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_2_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_2_right.style.animation = "fadeout 1s ease-out forwards";

  } else if (value > 6100) {
    portfolio_2_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_2_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_2_right.style.animation = "fadeout 1s ease-out forwards";

  } else {
    portfolio_2_left.style.animation = "appear 1.5s ease-out forwards";
    portfolio_2_btn.style.animation = "appear 1.5s ease-out forwards";
    portfolio_2_right.style.animation = "fadein 5s ease-out forwards";
  }

  // 베이드립
  if (value < 6100) {
    portfolio_3_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_3_title.style.animation = "disappear2 1s ease-out forwards";

  } else if (value > 7100) {
    portfolio_3_bg.style.animation = "fadeout 1.5s ease-out forwards";
    portfolio_3_title.style.animation = "disappear2 1s ease-out forwards";

  } else {
    portfolio_3_bg.style.animation = "fadein 1.5s ease-out forwards";
    portfolio_3_title.style.animation = "appear2 1s ease-out forwards";
  }

  // 베이드립 상세
  if (value < 7300) {
    portfolio_3_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_3_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_3_right.style.animation = "fadeout 1s ease-out forwards";

  } else if (value > 8300) {
    portfolio_3_left.style.animation = "disappear 1s ease-out forwards";
    portfolio_3_btn.style.animation = "disappear 1s ease-out forwards";
    portfolio_3_right.style.animation = "fadeout 1s ease-out forwards";

  } else {
    portfolio_3_left.style.animation = "appear 1.5s ease-out forwards";
    portfolio_3_btn.style.animation = "appear 1.5s ease-out forwards";
    portfolio_3_right.style.animation = "fadein 5s ease-out forwards";
  }

  // ect
  if (value < 8200) {
    etc_reveal.style.animation = "disappear 1s ease-out forwards";
    etc_reveal2.style.animation = "disappear 1s ease-out forwards";
    reveal_text.style.animation = "disappear 1s ease-out forwards";
    etc_border.style.display = "none";

  } else if (value > 9500) {
    etc_reveal.style.animation = "disappear 1s ease-out forwards";
    etc_reveal2.style.animation = "disappear 1s ease-out forwards"
    reveal_text.style.animation = "disappear 1s ease-out forwards";
    etc_border.style.display = "none";

  } else {
    etc_reveal.style.animation = "reveal 7s forwards";
    etc_reveal2.style.animation = "slidein 7s forwards"
    reveal_text.style.animation = "reveal_text 0.5s ease-out forwards";
    reveal_text.style.animationDelay = "3s";
    etc_border.style.display = "block";
    etc_border.style.animation = "fadein 1s forwards";
    etc_border.style.animationDelay = "3.5s";
  }

  // 아웃트로
  if (value < 8900) {
    footer_box.style.animation = "fadeout 1s ease-out forwards";
    outro_des.style.animation = "fadeout 1s ease-out forwards";
    outro_text.style.animation = "fadeout 1s ease-out forwards";

  } else {
    footer_box.style.animation = "fadein 1.5s ease-out forwards";
    outro_des.style.animation = "fadein 1s ease-out forwards";
    outro_des.style.animationDelay = "3s";
    outro_text.style.animation = "textclip 3s linear forwards";
  }
})

// 포트폴리오 기획서 모달
var por1_modal = document.querySelector('.por1_modal');
var por2_modal = document.querySelector('.por2_modal');
var por3_modal = document.querySelector('.por3_modal');

// 파노라마 페이지 이동
function panorama() {
  location.href = "./panorama_main.html";
}

// 파노라마 기획서
function panorama_1() {
  por1_modal.style.display = "block";
}

function modal_x() {
  por1_modal.style.display = "none";
}

// 뷰티폼 페이지 이동
function beautyfoam() {
  location.href = "./beautyfoam.html";
}

// 뷰티폼 기획서
function beautyfoam_1() {
  por2_modal.style.display = "block";
}

function modal_x2() {
  por2_modal.style.display = "none";
}

// 베이드립 페이지 이동
function baydrip() {
  location.href = "./baydrip.html";
}

// 베이드립 기획서
function baydrip_1() {
  por3_modal.style.display = "block";
}

function modal_x3() {
  por3_modal.style.display = "none";
}


// 파노라마 기획서 슬라이드
const slides = document.querySelector('.por1_paper_slide');
const slideImg = document.querySelectorAll('.por1_paper_slide li');

let currentIdx = 0;
const slideCount = slideImg.length;
const slideWidth = 951;

const pol1_left = document.querySelector('.pol1_left');
const pol1_right = document.querySelector('.pol1_right');

slides.style.width = slideWidth * slideCount + 'px';

function moveSlide(num) {
  slides.style.left = -num * 951 + 'px';
  slides2.style.left = -num * 951 + 'px';
  currentIdx = num;
}

pol1_left.addEventListener('click', function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

pol1_right.addEventListener('click', function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});

// 뷰티폼 기획서 슬라이드
const slides2 = document.querySelector('.por2_paper_slide');
const slideImg2 = document.querySelectorAll('.por2_paper_slide li');

let currentIdx2 = 0;
const slideCount2 = slideImg2.length;
const slideWidth2 = 951;

const pol2_left = document.querySelector('.pol2_left');
const pol2_right = document.querySelector('.pol2_right');
slides2.style.width = slideWidth2 * slideCount2 + 'px';

function moveSlide2(num2) {
  slides2.style.left = -num2 * 951 + 'px';
  currentIdx2 = num2;
}

pol2_left.addEventListener('click', function () {
  if (currentIdx2 !== 0) moveSlide2(currentIdx2 - 1);
});

pol2_right.addEventListener('click', function () {
  if (currentIdx2 !== slideCount2 - 1) {
    moveSlide2(currentIdx2 + 1);
  }
});

// 베이드립 기획서 슬라이드
const slides3 = document.querySelector('.por3_paper_slide');
const slideImg3 = document.querySelectorAll('.por3_paper_slide li');

let currentIdx3 = 0;
const slideCount3 = slideImg3.length;
const slideWidth3 = 951;

const pol3_left = document.querySelector('.pol3_left');
const pol3_right = document.querySelector('.pol3_right');
slides3.style.width = slideWidth3 * slideCount3 + 'px';

function moveSlide3(num3) {
  slides3.style.left = -num3 * 951 + 'px';
  currentIdx3 = num3;
}

pol3_left.addEventListener('click', function () {
  if (currentIdx3 !== 0) moveSlide3(currentIdx3 - 1);
});

pol3_right.addEventListener('click', function () {
  if (currentIdx3 !== slideCount3 - 1) {
    moveSlide3(currentIdx3 + 1);
  }
});

// etc 자세히 보기, 상세 보기
var etc_modal = document.querySelector('.etc_modal');
var etc_modal2 = document.querySelector('.etc_modal2');
var etc_modal_x = document.querySelector('.etc_modal_x');
var etc_modal_x2 = document.querySelector('.etc_modal_x2');

var etc_img_1 = document.querySelector('#inner_img1');
var etc_img_2 = document.querySelector('#inner_img2');
var etc_img_3 = document.querySelector('#inner_img3');
var etc_img_11 = document.querySelector('.etc_img_1');
var etc_img_22 = document.querySelector('.etc_img_2');
var etc_img_33 = document.querySelector('.etc_img_3');

var etc_img_4 = document.querySelector('#inner_img4');
var etc_img_5 = document.querySelector('#inner_img5');
var etc_img_6 = document.querySelector('#inner_img6');
var etc_img_44 = document.querySelector('.etc_img_4');
var etc_img_55 = document.querySelector('.etc_img_5');
var etc_img_66 = document.querySelector('.etc_img_6');

etc_img_1.addEventListener('click', function () {
  etc_modal.style.display = "block";
  etc_img_11.style.display = "block";
  etc_modal_x.style.display = "block";
})

etc_img_2.addEventListener('click', function () {
  etc_modal.style.display = "block";
  etc_img_22.style.display = "block";
  etc_modal_x.style.display = "block";
})

etc_img_3.addEventListener('click', function () {
  etc_modal.style.display = "block";
  etc_img_33.style.display = "block";
  etc_modal_x.style.display = "block";
})

etc_img_4.addEventListener('click', function () {
  etc_modal2.style.display = "block";
  etc_img_44.style.display = "block";
  etc_modal_x2.style.display = "block";
})

etc_img_5.addEventListener('click', function () {
  etc_modal2.style.display = "block";
  etc_img_55.style.display = "block";
  etc_modal_x2.style.display = "block";
})

etc_img_6.addEventListener('click', function () {
  etc_modal2.style.display = "block";
  etc_img_66.style.display = "block";
  etc_modal_x2.style.display = "block";
})

etc_modal_x.addEventListener('click', function () {
  etc_modal.style.display = "none";
  etc_modal_x.style.display = "none";
  etc_img_11.style.display = "none";
  etc_img_22.style.display = "none";
  etc_img_33.style.display = "none";
})

etc_modal_x2.addEventListener('click', function () {
  etc_modal2.style.display = "none";
  etc_modal_x2.style.display = "none";
  etc_img_44.style.display = "none";
  etc_img_55.style.display = "none";
  etc_img_66.style.display = "none";
})


// 아웃트로 텍스트 효과
let target = document.querySelector("#etc_text");

function randomString() {

  let stringArr = ["WEB DESIGNER & WEB PUBLISHER"]
  let selectString = stringArr[0];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

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

// 타이핑 완료 후 리셋
function resetTyping() {
  target.textContent = "";
  headerTyping(randomString());
}