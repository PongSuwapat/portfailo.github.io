let slideIndex = 0;

autoSlides();


function autoSlides()
{
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlides,5000);
}
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex);
  }
  
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";


}
