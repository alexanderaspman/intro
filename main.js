function checkForVisibility() {
    var headers = document.querySelectorAll(".delay");// deklarerar en variabel som sedan användas i functionen för att se om den är true
    var headers1 = document.querySelectorAll(".delaymore");
    headers.forEach(function(header) {  //ger header värdet i functionen som ska skickas tillbaka lopar functionen och tittar på ifall false ändras till true

        
      if (isElementInViewport(header)) {// anropar isElementInViewport om header blir true byts cssen i .delay elementet ut till delay--enter    
       return header.classList.add("delay--enter"); // skickar tillbaka header värdet till variablen headers och ger den ett nytt värde
        
    }
       
    });
    headers1.forEach(function(header) { //

        
      if (isElementInViewport(header)) {
       return header.classList.add("delay--enter");
        
    }
       
    });
  }

  
  
  function isElementInViewport(el) {               // känner efter ifall användarens skärm täcker bilden över elementet för att sedan användas i functionen ovanför trigga utbytet av css
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 && //tiitar att det är noll pixlar om elementet är centrerat och var toppen borde vara  på skärmen 
      rect.left >= 0 &&  //-ll-
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
  }
  
  if (window.addEventListener) { // är en callback function
    addEventListener('DOMContentLoaded', checkForVisibility, false);  //säger att vid första load är det just nu  false men ifall true triggas foreach functionen
    addEventListener('load', checkForVisibility, false); //vid refresh ska scriptet titta ifall detta är sant
    addEventListener('scroll', checkForVisibility, false); //vid varje scroll triggas ett måste att titta ifall det är false
  }
  