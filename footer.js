 
   function toggleDesktopContainer() {
  
    const footerSunada = document.getElementById('footersunada');
  if (window.innerWidth <= 400) {
    
    footerSunada.style.height = '10vh';
    footerSunada.style.width = '60vw';

   } else{
    
    footerSunada.style.height = '6vw';
    footerSunada.style.width = '16vw';
  }
  }

  window.addEventListener('DOMContentLoaded', toggleDesktopContainer);
  window.addEventListener('resize', toggleDesktopContainer);
 