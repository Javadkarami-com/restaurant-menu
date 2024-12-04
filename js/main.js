/*
 * show pass
 * image select
 * otp input
 * check radio
 * range slider
 * btnQuantity
 * press heart
 * Clear all
 * Clear Item History
 * Clear Checkbox
 * Suggestions
 * active Suggestions
 * fixed body popup
 * back Page
 * click sidebar
 * preloader
 */
(function ($) {
  "use strict";

  /* show pass
  ------------------------------------------------------------------------------------- */
  var showPass = function () {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field").attr("type") == "password") {
        $(".password-field").attr("type", "text");
      } else if ($(".password-field").attr("type") == "text") {
        $(".password-field").attr("type", "password");
      }
    });
    $(".show-pass2").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field2").attr("type") == "password") {
        $(".password-field2").attr("type", "text");
      } else if ($(".password-field2").attr("type") == "text") {
        $(".password-field2").attr("type", "password");
      }
    });
  };
  /* image select
  ------------------------------------------------------------------------------------- */
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };
  /* otp input
  ------------------------------------------------------------------------------------- */
  var otpInput = function () {
    if ($(".digit-group").length > 0) {
      $(".digit-group")
        .find("input")
        .each(function () {
          $(this).attr("maxlength", 1);
          $(this).on("keyup", function (e) {
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
              var prev = parent.find("input#" + $(this).data("previous"));

              if (prev.length) {
                $(prev).select();
              }
            } else if (
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 96 && e.keyCode <= 105) ||
              e.keyCode === 39
            ) {
              var next = parent.find("input#" + $(this).data("next"));

              if (next.length) {
                $(next).select();
              } else {
                if (parent.data("autosubmit")) {
                  parent.submit();
                }
              }
            }
          });
        });
    }
  };
  /* check radio
  ------------------------------------------------------------------------------------- */
  var checkRadio = function () {
    $(".check-ip-bg:checked").parent().addClass("check");
    $(".check-ip-bg").on("click", function () {
      $(".check-ip-bg:not(:checked)").parent().removeClass("check");
      $(".check-ip-bg:checked").parent().addClass("check");
    });
  };

  /* range slider
  ------------------------------------------------------------------------------------- */
  var rangeSlider = function () {
    if ($("#range-two-val").length > 0) {
      var rangeTwoSlider = document.getElementById("range-two-val");
      noUiSlider.create(rangeTwoSlider, {
        start: [17, 128],
        connect: true,
        tooltips: [true, true],
        range: {
          min: 0,
          max: 160,
        },
        format: {
          to: (v) => `${v | 0} تومان`,
          from: (v) => parseFloat(v.replace(' تومان', '')),
        },
      });
    }
  };
  
  /* btnQuantity
  ------------------------------------------------------------------------------------- */
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });
    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };
  /* press heart
  ------------------------------------------------------------------------------------- */
  var pressHeart = function () {
    $(".heart").on("click", function () {
      $(this).toggleClass("active");
    });
  };
  /* Clear all
  ------------------------------------------------------------------------------------- */
  var clearAll = function () {
    $(".clear-all").on("click", function () {
      $(".history").css("display", "none");
    });
  };
  /* Clear Item History
  ------------------------------------------------------------------------------------- */
  var clearItem = function () {
    $(".item-history").each(function (e) {
      var el = this.querySelector(".clear-item");
      el.addEventListener("click", function () {
        el.closest(".item-history").style.display = "none";
      });
    });
  };
  /* Clear Checkbox 
  ------------------------------------------------------------------------------------- */
  var clearCheckbox = function () {
    $(".clear-checkbox").on("click", function () {
      $(".group-checkbox").find("input").prop("checked", false);
    });

    $(".clear-checkbox").on("click", function (e) {
      e.preventDefault();
    });
  };

  /* Suggestions
  ------------------------------------------------------------------------------------- */
  var Suggest = function () {
    $(".suggest").on("click", function () {
      var val = $(this).text();
      $(".suggest_value").val(val);
    });
  };
  /* active Suggestions
  ------------------------------------------------------------------------------------- */
  var activeSuggest = function () {
    $(".rate-suggest").click(function () {
      $(".rate-suggest.active").removeClass("active");
      $(this).addClass("active");
    });
  };
  /* fixed body popup
  ------------------------------------------------------------------------------------- */
  var fixedBody = function () {
    $(".btn-sidebar").on("click", function () {
      $("body").addClass("fixed-body");
    });
    $(".clear-fixed").on("click", function () {
      $("body").removeClass("fixed-body");
    });
  };
  /* back Page
  ------------------------------------------------------------------------------------- */
  var backPage = function () {
    $(".back-btn").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      window.history.go(-1);
    });
  };
  /* click sidebar
  ------------------------------------------------------------------------------------- */
  const clickSideBar = function () {
    const modalNav = $(".menu-mobile-popup");
    if (modalNav.length) {
      const open = function () {
        modalNav.addClass("modal-menu--open");
      };
      const close = function () {
        modalNav.removeClass("modal-menu--open");
      };
      // open();
      $(".btn-sidebar, .btn-st2").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop").on("click", function () {
        close();
      });
    }
  };
  /* clear Text
  ------------------------------------------------------------------------------------- */
  const clearText = function () {
    $(".icon-close").on("click", function () {
      $(".ip-field").val("");
    });
  };
  /* preloader
  ------------------------------------------------------------------------------------- */
  const preloaderIndex = function () {
    setTimeout(function () {
      $(".preloadIndex").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 150);
  };

  /* preloader 2
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 100);
  };

  $(function () {
    showPass();
    selectImages();
    otpInput();
    checkRadio();
    rangeSlider();
    btnQuantity();
    pressHeart();
    clearAll();
    clearItem();
    clearCheckbox();
    Suggest();
    backPage();
    clearText();
    clickSideBar();
    activeSuggest();
    fixedBody();
    preloaderIndex();
    preloader();
  });
})(jQuery);




if(window.location.pathname.includes('index.html')) {
  var i = document.getElementById('a');
  console.log(i)
  if (i) {
    i.classList.add('active');
  }
}

if(window.location.pathname.includes('nearby.html')) {
  var i = document.getElementById('b');
  if (i) {
    i.classList.add('active');
  }
}

if(window.location.pathname.includes('cart.html')) {
  var i = document.getElementById('c');
  if (i) {
    i.classList.add('active');
  }
}

if(window.location.pathname.includes('favorite.html')) {
  var i = document.getElementById('d');
  if (i) {
    i.classList.add('active');
  }
}

if(window.location.pathname.includes('profile.html')) {
  var i = document.getElementById('e');
  if (i) {
    i.classList.add('active');
  }
}
