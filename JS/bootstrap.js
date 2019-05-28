document.addEventListener("DOMContentLoaded", function(){
  var carousel_items = document.querySelectorAll(".carousel-item");
  var slides = document.querySelectorAll(".d-block");
  var tab_pane = document.querySelector(".tab-pane");
  // moai_on.addEventListener('change', changeSide);

  $("#nav-dutch").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-dutch").attr("href"));
    //read href and assign it as id to tab_pane
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.add("dutch"+(i+1));
      }
    }
  })
  $("#nav-movie").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-movie").attr("href"));
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.remove(slides[i].className.split(" ").pop());
      slides[i].classList.add("movie"+(i+1));
      }
    }
  })
  $("#nav-family").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-family").attr("href"));
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.remove(slides[i].className.split(" ").pop());
      slides[i].classList.add("family"+(i+1));
      }
    }
  })
  $("#nav-salami").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-salami").attr("href"));
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.remove(slides[i].className.split(" ").pop());
      slides[i].classList.add("salami"+(i+1));
      }
    }
  })
  $("#nav-cheese").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-cheese").attr("href"));
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.remove(slides[i].className.split(" ").pop());
      slides[i].classList.add("cheese"+(i+1));
      }
    }
  })
  $("#nav-empty").on('click', function (e) {
    e.preventDefault();
    tab_pane.setAttribute("id", $("#nav-empty").attr("href"));
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1))) {
      slides[i].classList.remove(slides[i].className.split(" ").pop());
      slides[i].classList.add("empty"+(i+1));
      }
    }
  })
})
