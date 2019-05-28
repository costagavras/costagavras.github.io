document.addEventListener("DOMContentLoaded", function(){
  var slides = document.querySelectorAll(".d-block");
  var tab_pane = document.querySelector(".tab-pane");
  $("#nav-dutch").on("click", carousel_change);
  $("#nav-movie").on("click", carousel_change);
  $("#nav-family").on("click", carousel_change);
  $("#nav-salami").on("click", carousel_change);
  $("#nav-cheese").on("click", carousel_change);
  $("#nav-empty").on("click", carousel_change);

  function carousel_change(e) {
    var tab_name = $(e.target).attr("id").split("-")[1];
    tab_pane.setAttribute("id", $(e.target).attr("href"));
    //read href and assign it as id to tab_pane
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1)) && slides[i].classList.length > 3) {
        slides[i].classList.remove(slides[i].className.split(" ").pop());
        slides[i].classList.add(tab_name+(i+1));
      } else if (slides[i].classList.contains("slide"+(i+1))) {
        slides[i].classList.add(tab_name+(i+1));
      }
    }
  }

})
