// 로그인 유효성
function login() {
   var login_id = document.getElementById("loginId");
   var login_pw = document.getElementById("loginPw");

   if (login_id.value == "") {
      alert("아이디를 입력해 주세요.");
      return;

   } else if (login_id.value.length < 5) {
      alert('아이디는 5~10자로 입력해야 합니다.');
      return;

   } else if (login_id.value.length > 10) {
      alert('아이디는 5~10자로 입력해야 합니다.');
      return;

   } else if (login_pw.value == "") {
      alert("비밀번호를 입력해 주세요.");
      return;

   } else if (login_pw.value.length < 5) {
      alert('비밀번호는 5~10자로 입력해야 합니다.');
      return;

   } else if (login_pw.value.length > 10) {
      alert('비밀번호는 5~10자로 입력해야 합니다.');
      return;
   } else {
      alert("로그인에 성공하였습니다.");
   }

   // 로그인 창에서 입력한 값을 상위 페이지의 #input_test 박스로 전달
   var login_id = document.getElementById("loginId").value;
   window.opener.document.getElementById("input_test").value = login_id;

   // 로그인 성공 시 요소들 display 처리 
   opener.document.getElementById("login").style.display = "none";
   opener.document.getElementById("join").style.display = "none";
   opener.document.getElementById("logout_btn").style.display = "block";
   opener.document.getElementById("my_page").style.display = "block";
   opener.document.getElementById("delivery").style.display = "block";

   // 로그인 버튼 클릭 시 팝업창 닫기
   window.close();
}

// common.js와 연결
// 로그인 정보 키 값 저장, 로그인 유지
function login_key() {
   login_id = document.getElementById("loginId");

   // 입력한 아이디의 키 값을 브라우저에 저장
   login_id.addEventListener('keyup', () => {
      localStorage.setItem('id_key', login_id.value)
   })
}

// 로그인 키 유지 함수 실행
login_key();