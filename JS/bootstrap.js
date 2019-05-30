document.addEventListener("DOMContentLoaded", function(){
  var slides = document.querySelectorAll(".d-block");
  var tabPane = document.querySelector(".tab-pane");
  var abCardTitle = document.querySelector(".ab_card-title");
  var abCardText = document.querySelector(".ab_card-text");;
  var ffCardText = document.querySelector(".ff_card-text");
  $("#nav-dutch").on("click", carousel_change);
  $("#nav-movie").on("click", carousel_change);
  $("#nav-family").on("click", carousel_change);
  $("#nav-salami").on("click", carousel_change);
  $("#nav-cheese").on("click", carousel_change);
  $("#nav-empty").on("click", carousel_change);
  $(".carousel-control-prev").on("click", card_change_delayed);
  $(".carousel-control-next").on("click", card_change_delayed);
  $("#nav-dutch").click();
  card_change();
  var delay = null;

  //function to delay card_change execution by 0.1s, otherwise
  //class "active" is read from the previous slide
  function card_change_delayed() {
    delay = setInterval(card_change, 100);
  }

  function carousel_change(e) {
    //taking the id bit after #nav-
    var tabName = $(e.target).attr("id").split("-")[1];
    //read href and assign it as id to tab_pane
    tabPane.setAttribute("id", $(e.target).attr("href"));

    //add appropriate class to each slide
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slide"+(i+1)) && slides[i].classList.length > 3) {
        slides[i].classList.remove(slides[i].className.split(" ").pop());
        slides[i].classList.add(tabName+(i+1));
      } else if (slides[i].classList.contains("slide"+(i+1))) {
        slides[i].classList.add(tabName+(i+1));
      }
    }
    card_change();
  }

  function card_change(e) {
    var activeSlide = document.querySelector("div.carousel-item.active");
    // var activeSlideClass = $("div.carousel-item.active").children().classList[3];
    var activeSlideClass = activeSlide.children[0].classList[3];
    abCardTitle.classList.remove(abCardTitle.classList[2]);
    abCardTitle.classList.add(activeSlideClass);
    abCardText.classList.remove(abCardText.classList[2]);
    abCardText.classList.add(activeSlideClass);
    ffCardText.classList.remove(ffCardText.classList[2]);
    ffCardText.classList.add(activeSlideClass);
  }

})
