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

      var clock;
      // Set dates.
      var futureDate  = new Date("Fri, 07 Jun 2019 09:00:00 +0300");
      var currentDate = new Date();
      // Calculate the difference in seconds between the future and current date
      var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
      // Calculate day difference and apply class to .clock for extra digit styling.
      function dayDiff(first, second) {
          return (second-first)/(1000*60*60*24);
      }
      if (dayDiff(currentDate, futureDate) < 100) {
          $('#actionTimer').addClass('twoDayDigits');
      } else {
          $('#actionTimer').addClass('threeDayDigits');
      }
      if(diff < 0) {
          diff = 0;
      }
      // Instantiate a countdown FlipClock
      clock = $('#actionTimer').FlipClock(diff, {
          clockFace: 'DailyCounter',
          countdown: true,
          language: 'english'
      });

      var fFrameResize = function(){
        var parentBody = parent.document.body
        var iframe = $('#ticket_timer_frame', parentBody);
        if (iframe.length){
          var iHeight = $(document.body).width() > 700 ? 141 : 121;
          iframe.css({
            'height': iHeight,
            'min-height':iHeight
          });
        }
      };
      fFrameResize();
      $(window).on('resize', function(){
         fFrameResize();
      });

})
