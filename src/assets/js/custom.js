
$(function () {

  "use strict";


  setTimeout(function () {
    $('.loader_bg').fadeToggle();
  }, 1500);


  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });


  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass('overlay');
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass('overlay');
    });
  });


  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });

  $('#blogCarousel').carousel({
    interval: 5000
  });


});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


(function ($) {
  
  function doAnimations(elems) {
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
    .find(".carousel-item:first")
    .find("[data-animation ^= 'animated']");

  
  $myCarousel.carousel();
  doAnimations($firstAnimatingElems);

  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);

function getURL() { window.location.href; } var protocol = location.protocol;



$(document).ready(function () {


  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});

function onChangeCallback(ctr) {
  console.log("The country was changed: " + ctr);

}

$(document).ready(function () {
  $(".niceCountryInputSelector").each(function (i, e) {
    new NiceCountryInput(e).init();
  });
});


$(document).ready(function () {
  $('#seluser').niceSelect();

});

$(function () {
  $("#my_date_picker").datepicker({
    defaultDate: "09/22/2019"
  });
});