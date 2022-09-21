 // 회원가입 유효성, 아이콘
 function join() {
   let joinId = document.getElementById("join_id")
   let joinPw = document.getElementById("join_pw");
   let joinPw2 = document.getElementById("join_pw2");
   let joinName = document.getElementById("join_name");

   if (joinId.value == "") {
      alert("아이디를 입력해 주세요.");
      joinId.style.borderColor = "#f00";
      joinId.focus();
      return;

   } else if (joinId.value.length < 5) {
      alert('아이디는 5~10자로 입력해야 합니다.');
      joinId.style.borderColor = "#f00";
      joinId.focus();
      return;

   } else if (joinId.value.length > 10) {
      alert('아이디는 5~10자로 입력해야 합니다.');
      joinId.style.borderColor = "#f00";
      joinId.focus();
      return;

   } else if (joinPw.value == "") {
      joinId.style.borderColor = "#7dac26";
      alert("비밀번호를 입력해 주세요.");
      joinPw.style.borderColor = "#f00";
      joinPw.focus();
      return;

   } else if (joinPw.value.length < 5) {
      alert('비밀번호는 5~10자로 입력해야 합니다.');
      joinPw.style.borderColor = "#f00";
      joinPw.focus();
      return;

   } else if (joinPw.value.length > 10) {
      alert('비밀번호는 5~10자로 입력해야 합니다.');
      joinPw.style.borderColor = "#f00";
      joinPw.focus();
      return;

   } else if (joinPw2.value == "") {
      joinPw.style.borderColor = "#7dac26";
      alert('비밀번호를 다시 한 번 입력해 주세요.');
      joinPw2.style.borderColor = "#f00";
      joinPw2.focus();
      return;

   } else if (joinPw.value != joinPw2.value) {
      alert('비밀번호가 일치하지 않습니다.');
      joinPw2.style.borderColor = "#f00";
      joinPw2.focus();
      return;

   } else if (joinName.value == "") {
      joinPw2.style.borderColor = "#7dac26";
      alert("이름을 입력해 주세요.");
      joinName.style.borderColor = "#f00";
      joinName.focus();
      return;

   } else {
      alert('회원가입에 성공하였습니다.')
      joinId.style.borderColor = "#7dac26";
      joinPw.style.borderColor = "#7dac26";
      joinPw2.style.borderColor = "#7dac26";
      joinName.style.borderColor = "#7dac26";
   
      opener.location.href="beautyfoam.html"
      
      // 회원가입 성공 시 팝업창 닫기
      window.close();
     
   }
}
