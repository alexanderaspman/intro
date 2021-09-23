function checkForVisibility() {
    var headers = document.querySelectorAll(".delay");// deklarerar en variabel som sedan användas i functionen för att se om den är true
    var headers1 = document.querySelectorAll(".delaymore");
    headers.forEach(function(header) {

        
      if (isElementInViewport(header)) {// om header blir true byts cssen i .delay elementet ut till delay--enter
       return header.classList.add("delay--enter");
        
    }
       
    });
    headers1.forEach(function(header) {

        
      if (isElementInViewport(header)) {
       return header.classList.add("delay--enter");
        
    }
       
    });
  }

  
  
  function isElementInViewport(el) {               // känner efter ifall användarens skärm täcker bilden för att sedan användas i functionen ovanför trigga utbytet av css
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility, false);
  }
  