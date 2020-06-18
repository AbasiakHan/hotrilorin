// magnific popup gmaps
$(document).ready(function () {
  //Google map
  $(".popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  // magnific popup image
  $(".image-link").magnificPopup({
    type: "image",
    // other options
  });
  // mfp end

  // open modal
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
  // open modal end

  $("h1").click(function () {
    $(this).css("background-color", "#ff0000");
  });

  // Sticky
  $(".js--setman-container").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  $(".tooltip").tooltipster();

  /* MOBILE NAVIGATION */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav-wrapper");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
