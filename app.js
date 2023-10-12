function btnOF() {
   let boxMenu = document.querySelector(".header_container");
   let boxSearch = document.querySelector(".main_box_sub");

   let btnSearch = document.querySelector(
      ".header_container .header_service .fa-magnifying-glass"
   );
   let btnClose = document.querySelector(
      ".main_box_sub .sigle-search .sigle_close .fa-xmark"
   );
   let boxSmain = document.querySelector("#header .box-search-main");
   let iconSearch = document.querySelector("#header .iconSerach");
   btnSearch.addEventListener("click", () => {
      boxMenu.style.transform = "translateY(-100%)";
      boxMenu.style.visibility = "hidden";

      setTimeout(() => {
         boxSearch.style.transform = "translateY(0)";
         boxSearch.style.visibility = "visible";
      }, 200);
   });
   btnClose.addEventListener("click", () => {
      boxSearch.style.transform = "translateY(-100%)";
      boxSearch.style.visibility = "hidden";

      setTimeout(() => {
         boxMenu.style.transform = "translateY(0)";
         boxMenu.style.visibility = "visible";
      }, 200);
   });
   boxSmain.addEventListener("input", (e) => {
      let NmChaG = e.target.value;
      // e.focus();
      if (NmChaG.length > 5) {
         iconSearch.classList.add("box-allow");
      } else {
         iconSearch.classList.remove("box-allow");
      }
   });
}
btnOF();

function btnOPMD() {
   const conTenAll = document.querySelectorAll("#header .nav_item .nav_link");
   const boxAll = document.querySelectorAll(".box_sv");
   const closeBTN = document.querySelectorAll(".box_sv .fa-xmark");
   const ListItem = document.querySelectorAll("#header .nav_item::before");
   conTenAll.forEach((e) => {
      e.addEventListener("click", () => {
         const ContenItem = e.textContent.toLowerCase().trim();

         e.nextElementSibling.classList.add("under_line_click");
         e.querySelector(".fa-chevron-down")
            ? e.querySelector(".fa-chevron-down").classList.add("box-subnavl")
            : null;
         console.log(e.querySelector(".fa-chevron-down"));
         boxAll.forEach((e) => {
            e.style = "none";
            e.classList.remove("help_animation1");
            if (e.classList[1] === ContenItem) {
               e.classList.add("help_animation1");
            }
         });
      });
   });
   closeBTN.forEach((e) => {
      e.addEventListener("click", () => {
         boxAll.forEach((e) => {
            if (e.classList[2] === "help_animation1") {
               setTimeout(() => {
                  e.classList.remove("help_animation1");
                  e.style.transform = "translateX(-100%)";
               }, 100);
            }
         });
         conTenAll.forEach((e) => {
            let DownBtn =
               e.querySelector(".fa-chevron-down") === null
                  ? false
                  : e.querySelector(".fa-chevron-down");
            e.nextElementSibling.classList.contains("under_line_click")
               ? e.nextElementSibling.classList.remove("under_line_click")
               : null;

            if (DownBtn && DownBtn.classList.contains("box-subnavl")) {
               DownBtn.classList.remove("box-subnavl");
            } else {
               return;
            }
         });
      });
   });
}
btnOPMD();
