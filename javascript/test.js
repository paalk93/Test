function openDrop(){
  var myTest = document.getElementsByClassName("dropdown-content")[0];
  if(myTest.style.display == "none"){
  myTest.style.display = "block";
}
else {
  myTest.style.display ="none";
}
}


window.addEventListener("resize", function(){
  var bigNav = document.getElementById("test1");
  var smallNav = document.getElementById("test2");
  if(window.innerWidth < 400){
    bigNav.style.display ="none";
    smallNav.style.display ="block";
     }
  else{
    smallNav.style.display ="none";
    bigNav.style.display ="block";
  }
})
