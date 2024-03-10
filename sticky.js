let plusbtn = document.querySelector(".plus");
let Mlist = document.querySelector(".Pnote");

function creatediv() {
   console.log("start");
   const bList = document.createElement("div");
   bList.classList.add("blist");
   Mlist.appendChild(bList);

   let Pnav = document.createElement("div");
   Pnav.classList.add("Pnav");
   Pnav.style.height = "15%";
   bList.appendChild(Pnav);

   //   its work to add notes
   let Pnavadd = document.createElement("div");
   Pnavadd.classList.add("Pnavadd");
   Pnavadd.innerHTML = '<i class="ri-add-line"></i>';
   Pnav.appendChild(Pnavadd);
   // let Pnavadd1 = document.querySelector(".Pnavadd");

   // its work to remove notes
   let pnavIcons = document.createElement("div");
   pnavIcons.classList.add("Picons");
   pnavIcons.innerHTML = '<i class="ri-close-line"></i>';
   Pnav.appendChild(pnavIcons);
   // const Picons = document.querySelector(".Picons");

   // its work for create Notes
   let List = document.createElement("p");
   List.classList.add("list");
   List.setAttribute("contenteditable", "true");
   bList.appendChild(List);

   Pnavadd.addEventListener("click", function () {
      creatediv();
   });
   pnavIcons.addEventListener("click", function () {
      // console.log("remove");
      bList.remove();
   });
}
plusbtn.addEventListener("click", function () {
   creatediv();
});
// creatediv();
