let newwbut=document.querySelector("#menu1");
    let i=0;
    let buttonn=document.querySelector(".menu");
    newwbut.addEventListener("click",()=>{
        if(i===0)
            {
                buttonn.classList.add("width");
                i=1;
            }
        else
        {
            buttonn.classList.remove("width");
            i=0;
        }    
    })

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3500); // Change image every 2 seconds
    }