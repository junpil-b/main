// 구매수량, 합계 계산
var amount = 1;
var amount_total = document.getElementById('amount');
var price = document.getElementById('price');
var price_total = document.getElementById('price_total'); // hidden

// 구매수량 + 클릭 시
function plus() {
   amount++; // 1씩 증가
   amount_total.value = amount; // 클릭된 수만큼 증가된 수치
   price.value = price_total.value * amount_total.value;
   price.style.display = "none"; // 기본 가격인 25,900원 숨기기

   // 가격 콤마 표시
   const comma = price.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
   document.getElementById('price_text').innerHTML = comma; // 가격 콤마 표시 후 화면 출력
}

// 구매수량 - 클릭 시
function minus() {
   if (amount > 1) {
      amount--;
      amount_total.value = amount;
      price.value = price.value - price_total.value; //추가  
      price.style.display = "none";

      // 가격 콤마 표시
      const comma = price.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
      document.getElementById('price_text').innerHTML = comma; // 가격 콤마 표시 후 화면 출력
   }
}

// 하단 작은 이미지 클릭 시 큰 이미지 교체
function img1() {
   document.getElementById("left_img").src = "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0016/A00000016223220ko.jpg?l=ko";
}

function img2() {
   document.getElementById("left_img").src = "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0016/A00000016223221ko.jpg?l=ko";
}

function img3() {
   document.getElementById("left_img").src = "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0016/A00000016223222ko.jpg?l=ko";
}