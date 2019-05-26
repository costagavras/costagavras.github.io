document.addEventListener("DOMContentLoaded", function(){
  var cube = document.querySelector('.cube');
  var radioGroup = document.querySelector('.radio-group');
  var moai_on = document.getElementById("moai_switcher")
  var currentClass = '';
  radioGroup.addEventListener('change', function(){
    setTimeout(changeSide,300)});
  moai_on.addEventListener('change', stopIdol);

  function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    if (checkedRadio) {
      var showClass = 'show-' + checkedRadio.value;
      if (currentClass) {
        cube.classList.remove(currentClass);
      }
      cube.classList.add(showClass);
      currentClass = showClass;
      var checkedMoai = moai_on.checked;
      if (!checkedMoai) {
        nextMoai();
      }
    }
  }

// set initial side
  changeSide();

  var currentMoai = 0;
  var moai = document.querySelectorAll(".idol");
  var intervalMoaiShow;

  //First function called
  function stopIdol(){
    var checkedMoai = moai_on.checked;
    if (checkedMoai) {
      setIntervalShowMoai();
    } else {
      clearInterval(intervalMoaiShow);
    }
  }

 //Second function called
  function setIntervalShowMoai() {
      intervalMoaiShow = setInterval(function(){
      nextMoai();
    },100);
  };

  //Third function called
  function nextMoai() {
      previousMoai = currentMoai;
    if(moai.length === currentMoai + 1) {
      currentMoai = 0;
    } else {
      currentMoai++;
    }
    showOneMoai(previousMoai,currentMoai);
  }

  //Fourth function called
  function showOneMoai(moai2hide,moai2show) {
    moai[moai2hide].classList.remove("show-moai");
    moai[moai2show].classList.add("show-moai");
  }

  //called on load, corresponds to switcher on
  showIdol();

  function showIdol() {
    // moai[3].style.visibility = "hidden";
    // var checkedMoai = moai_on.checked;
    // if (checkedMoai) {
      showOneMoai(moai.length-1,0);
        setIntervalShowMoai();
  //   } else {
  //     clearInterval(intervalMoaiShow);
  //   }
  }

})
