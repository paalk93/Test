window.addEventListener("resize", function(){
  var bigNav = document.getElementById("test1");
  var smallNav = document.getElementById("test2");
  if(window.innerWidth < 500){
    bigNav.style.display ="none";
    smallNav.style.display ="block";
     }
  else{
    smallNav.style.display ="none";
    bigNav.style.display ="block";
  }
})
