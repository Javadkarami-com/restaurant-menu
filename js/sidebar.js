window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();
  $(document).ready(function () {
    var e =
      '<div class="menu-mobile-popup">' +
      '<div class="modal-menu__backdrop clear-fixed"></div> ' +
      '<div class="widget-filter">' +
      '<div class="header-ct-center menu-moblie">' +
      '<div class="sidebar-logo">' +
      '<img src="images/logo/logomenu.png">' +
      "<h2>رستوران امیر</h2>" +
      "</div> " +
      '<ul id="menu-primary-menu" class="menu">' +
      '<li>' +
      '<a href="/" class="item-menu">خانه</a>' +
      "</li>" +
      '<li>' +
      '<a href="/#items" class="item-menu">منو غذا و نوشیدنی</a>' +
      "</li>" +
      '<li>' +
      '<a href="/location.html" class="item-menu">ادرس</a>' +
      "</li>" +
      "</ul>" +
      "</div>" +
      "</div>" +
      "</div>";
    $("body").append(e);
  
    switchAnimate.btnmenu();
  });
  

var switchAnimate = {
  btnmenu: function () {
    $(document).on("click", ".menu-item-has-children-mobile", function () {
      var args = { duration: 600 };
      if ($(this).hasClass("active")) {
        $(this).children(".sub-menu-mobile").slideUp(args);
        $(this).removeClass("active");
      } else {
        $(".sub-menu-mobile").slideUp(args);
        $(this).children(".sub-menu-mobile").slideDown(args);
        $(".menu-item-has-children-mobile").removeClass("active");
        $(this).addClass("active");
      }
    });
  },
};
