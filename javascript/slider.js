$(document).ready(function() {
  var sliderWidth = $(".slider-container").width();
  var imageCount = $(".slider-container .slide-annonce").length;
  var visibleImages = 3;
  var currentIndex = 0;

  $(".next").click(function() {
    if (currentIndex + visibleImages < imageCount) {
      currentIndex++;
      var translateValue = -currentIndex * (sliderWidth / visibleImages);
      $(".slider-container").css("transform", "translateX(" + translateValue + "px)");
      checkControls();
    }
  });

  $(".prev").click(function() {
    if (currentIndex > 0) {
      currentIndex--;
      var translateValue = -currentIndex * (sliderWidth / visibleImages);
      $(".slider-container").css("transform", "translateX(" + translateValue + "px)");
      checkControls();
    }
  });

  function checkControls() {
    if (currentIndex === 0) {
      $(".prev").addClass("disabled");
    } else {
      $(".prev").removeClass("disabled");
    }

    if (currentIndex + visibleImages >= imageCount) {
      $(".next").addClass("disabled");
    } else {
      $(".next").removeClass("disabled");
    }
  }
});


