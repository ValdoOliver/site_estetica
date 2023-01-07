window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
   if(document.querySelector(".menu nav ul").style.display == 'none'){
    document.querySelector(".menu nav ul").style.display = 'flex';
   } else {
      document.querySelector(".menu nav ul").style.display ='none';
   }
});
};
