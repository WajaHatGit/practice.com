let ul = document.querySelector(".navigation ul")
function toggle(){
      ul.classList.toggle("show")
   ul.addEventListener("click",function(e){
      if(e.target.tagName=="A"){
         ul.classList.remove("show")
      }
   })
 

}
