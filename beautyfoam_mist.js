// 전체 ~ 페이스오일
// 카테고리별로 상품 보여주기, 관련 상품 카운트
$(document).ready(function () {
   $(".mist_category a").click(function () {

      var category = $(this).attr("title"); 
      var count_all = $("#mist_item_all li").length; 
      var count = $("#mist_item_all li[class*=" + category + "]").length;

      $("#mist_item_all li").hide();

      if (category === "all") {
         $("#mist_item_all li").show();
         $('#item_count').val(count_all + '개의 상품이 있습니다.');

      } else {
         $("#mist_item_all li[class*=" + category + "]").show();
         $('#item_count').val(count + '개의 상품이 있습니다.');
      }
   });
});

// 클릭된 카테고리에만 테두리 효과
let skin_text = document.querySelector('.cream_category a');
function cream_btn(str) {
   if (str == "btn_1") {
      document.getElementById('cream_btn_1').style.border = "2px solid #7dac26";
      document.getElementById('cream_btn_2').style.border = "";
      document.getElementById('cream_btn_3').style.border = "";
      document.getElementById('cream_btn_4').style.border = "";
   } else if (str == "btn_2") {
      document.getElementById('cream_btn_1').style.border = "";
      document.getElementById('cream_btn_2').style.border = "2px solid #7dac26";
      document.getElementById('cream_btn_3').style.border = "";
      document.getElementById('cream_btn_4').style.border = "";
   } else if (str == "btn_3") {
      document.getElementById('cream_btn_1').style.border = "";
      document.getElementById('cream_btn_2').style.border = "";
      document.getElementById('cream_btn_3').style.border = "2px solid #7dac26";
      document.getElementById('cream_btn_4').style.border = "";
   } else {
      document.getElementById('cream_btn_1').style.border = "";
      document.getElementById('cream_btn_2').style.border = "";
      document.getElementById('cream_btn_3').style.border = "";
      document.getElementById('cream_btn_4').style.border = "2px solid #7dac26";
   }
}