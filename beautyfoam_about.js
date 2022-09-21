// 메인 이미지, 텍스트
let introduce_img = document.querySelector(".intro_img")
let introduce_text1 = document.querySelector(".about_text li:first-child")
let introduce_text2 = document.querySelector(".about_text li:nth-child(2)")
let introduce_text3 = document.querySelector(".about_text li:nth-child(3)")
let introduce_text4 = document.querySelector(".about_text li:nth-child(4)")

window.addEventListener('scroll', function () {
   let value = window.scrollY
   console.log(value);

   if (value > 500) {
      introduce_img.style.animation = "disappear 3s ease-out forwards";
      introduce_text1.style.animation = "disappear 3s ease-out forwards";
      introduce_text2.style.animation = "disappear 3s ease-out forwards";
      introduce_text3.style.animation = "disappear 3s ease-out forwards";
      introduce_text4.style.animation = "disappear 3s ease-out forwards";
   } else {
      introduce_img.style.animation = "fadein 3s";
      introduce_text1.style.animation = "text_up 1s";
      introduce_text2.style.animation = "text_up 1.5s";
      introduce_text3.style.animation = "text_up 2s";
      introduce_text4.style.animation = "text_up 2.5s";
   }
})

// 비전 이미지, 텍스트
let intro_bg = document.querySelector(".intro_bg")

let introduce_text5 = document.querySelector(".about_text2 li:first-child")
let introduce_text6 = document.querySelector(".about_text2 li:nth-child(2)")
window.addEventListener('scroll', function () {
   let value = window.scrollY

   if (value < 333) {
      intro_bg.style.animation = "disappear 3s ease-out forwards";
      introduce_text5.style.animation = "disappear 3s ease-out forwards";
      introduce_text6.style.animation = "disappear 3s ease-out forwards";

   } else if (value > 1000) {
      intro_bg.style.animation = "disappear 3s ease-out forwards";
      introduce_text5.style.animation = "disappear 3s ease-out forwards";
      introduce_text6.style.animation = "disappear 3s ease-out forwards";

   } else {
      intro_bg.style.animation = "fadein 3s";
      introduce_text5.style.animation = "text_up2 1s";
      introduce_text6.style.animation = "text_down2 1s";
   }
})