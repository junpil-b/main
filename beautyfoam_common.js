// 페이지, 팝업창 이름, 사이즈, 위치
function login_pop() {
   window.open("beautyfoam_login.html", "", "width=500, height=500, top=100, left=1300");
}

// 로그인 팝업창에서 전달 받은 입력값 출력
loginId = document.getElementById("input_test");

// 로그인 키 유지 함수
function login_storage() {
   loginId.value = localStorage.getItem('id_key');

   if (loginId.value != "") {
      document.getElementById("login").style.display = "none";
      document.getElementById("join").style.display = "none";
      document.getElementById("my_page").style.display = "block";
      document.getElementById("delivery").style.display = "block";
   } else {
      document.getElementById("logout_btn").style.display = "none";
   }
}

login_storage();

// 로그아웃 
function logout() {
   loginId.value = "";

   document.getElementById("login").style.display = "";
   document.getElementById("join").style.display = "";
   document.getElementById("my_page").style.display = "none";
   document.getElementById("delivery").style.display = "none";
   document.getElementById("logout_btn").style.display = "none";

   localStorage.clear();
   alert('로그아웃 되었습니다.')
   location.href="beautyfoam.html";
}

// 회원가입 버튼 클릭 시 팝업창 생성
function join_pop() {
   window.open("beautyfoam_join.html", "", "width=500, height=540, top=100, left=1300");
}

// 인기 검색어
var keyword = function () {
   timer = setTimeout(function () {
      $('#keyword li:first').animate({ marginTop: '-30px'}, 500, function () {
         $(this).appendTo('ul#keyword').removeAttr("style");
      });
      keyword();
   }, 3000); 
};
keyword();

// 인기 검색어 클릭 시 인기 검색어 전체 창 보이기(숨기기)
$('#keyword_all_box').css('display', 'none');
$('#keyword_btn_up').css('display', 'none');

$(document).ready(function () {
   $("#keyword_btn_down").click(function () {
      $("#keyword_all_box").show()
      $("#keyword_btn_down").hide()
      $("#keyword_btn_up").show()
   })

   $("#keyword_btn_up").click(function () {
      $("#keyword_all_box").hide()
      $("#keyword_btn_down").show()
      $("#keyword_btn_up").hide()
   })
})

// 검색바
$('#search_list').css('display', 'none');

// $때문에 발생하는 충돌을 방지하기 위한 방법
jQuery(function ($) {
   $('.search_keyword').keyup(function() {
      var val = $(this).val(); // 유저가 직접 입력한 값
      if (val == "") {
         $('#search_list').css('display', 'none');
         $('#search_list li').hide();
      } else {
         $('#search_list').css('display', 'block');
         $('#search_list li').hide();
         $("#search_list li:contains('" + val + "')").show();
      }
   });
});

// 전체메뉴 클릭 드롭다운
$('#all_menu_drop').css('display', 'none');
$(document).ready(function () {
   $("#all_menu").click(function () {
      $("#all_menu_drop").slideToggle(500)
   })
})

// 쇼핑메뉴 클릭 드롭다운
$('#shop_menu_drop').css('display', 'none');
$(document).ready(function () {
   $("#shop_menu").click(function () {
      $("#shop_menu_drop").slideToggle(500)
   })
})