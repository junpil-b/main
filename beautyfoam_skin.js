// 전체 ~ 올인원
// 카테고리별로 상품 보여주기, 관련 상품 카운트
$(document).ready(function () {
   $(".skin_category a").click(function () {

      var category = $(this).attr("title"); 
      var count_all = $("#skin_item_all li").length; 
      var count = $("#skin_item_all li[class*=" + category + "]").length;

      $("#skin_item_all li").hide();

      if (category === "all") {
         $("#skin_item_all li").show();
         $('#item_count').val(count_all + '개의 상품이 있습니다.');

      } else {
         $("#skin_item_all li[class*=" + category + "]").show();
         $('#item_count').val(count + '개의 상품이 있습니다.');
      }
   });
});

// 클릭된 카테고리에만 테두리 효과
let skin_text = document.querySelector('.skin_category a');
function skin_btn(str) {
   if (str == "btn_1") {
      document.getElementById('skin_btn_1').style.border = "2px solid #7dac26";
      document.getElementById('skin_btn_2').style.border = "";
      document.getElementById('skin_btn_3').style.border = "";
      document.getElementById('skin_btn_4').style.border = "";
   } else if (str == "btn_2") {
      document.getElementById('skin_btn_1').style.border = "";
      document.getElementById('skin_btn_2').style.border = "2px solid #7dac26";
      document.getElementById('skin_btn_3').style.border = "";
      document.getElementById('skin_btn_4').style.border = "";
   } else if (str == "btn_3") {
      document.getElementById('skin_btn_1').style.border = "";
      document.getElementById('skin_btn_2').style.border = "";
      document.getElementById('skin_btn_3').style.border = "2px solid #7dac26";
      document.getElementById('skin_btn_4').style.border = "";
   } else {
      document.getElementById('skin_btn_1').style.border = "";
      document.getElementById('skin_btn_2').style.border = "";
      document.getElementById('skin_btn_3').style.border = "";
      document.getElementById('skin_btn_4').style.border = "2px solid #7dac26";
   }


}