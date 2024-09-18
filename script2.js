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

    function func() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }


let k=0;
const ul=document.getElementById('myUL');
input = document.getElementById('myInput');
input.addEventListener("click",()=>
{
  if(k===0)
    {
      ul.classList.remove("unseen");
      k=1;
    }
    else{
      ul.classList.add("unseen");
      k=0;
    }
})