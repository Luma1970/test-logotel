window.onload = function () {

   const header = document.getElementById("header")

   window.onscroll = function (event) {
      if (window.scrollY > 1) {
         header.classList.add("header__scrolling")
      } else {
         header.classList.remove("header__scrolling")
      }
   }
} 





