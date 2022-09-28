const modal_container = document.getElementById("modal_container");  
 const btn1 = document.getElementById("open");  
 const btn2 = document.getElementById("close");  
 btn1.addEventListener("click", function () {  
  modal_container.classList.add("show");  
 });  
 btn2.addEventListener("click", function () {  
  modal_container.classList.remove("show");  
 });  