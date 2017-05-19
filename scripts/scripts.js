$(document).ready(function() {
  if (document.cookie.match('keytip=true')) {
    $('#keyboardTip').remove();
  }

  // Google Map iframe size
  $("a.iframe").fancybox({
    width: 900,
    height: 600
  });

  $("#keyboardTip").find(".close").first().click(function() {
    $("#keyboardTip").remove();

    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 30);

    document.cookie = "keytip=true;expires=" + exdate.toGMTString();
  });

  // Keyboard navigation
  combos = [
    {
      "keys": "k",
      "is_exclusive": true,
      "on_keyup": function() {
        var nextPage = $("#nav").find(".active").first().next().find("a").first();
        window.location.href = typeof(nextPage.attr("href")) !== "undefined" ? nextPage.attr("href") : "/";
      }
    },
    {
      "keys": "j",
      "is_exclusive": true,
      "on_keyup": function() {
        var previousPage = $("#nav").find(".active").first().prev().find("a").first();
        window.location.href = typeof(previousPage.attr("href")) !== "undefined" ? previousPage.attr("href") : "contact";
      }
    }
  ];
  keypress.register_many(combos);
});
