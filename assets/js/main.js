/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $("#nav a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });
})(jQuery);

// Contact-me Function
function sendEmail(event) {
  event.preventDefault();
  let message = document.querySelector("#message").value;
  let name = document.querySelector(`#name`).value;
  let email = document.querySelector(`#email`).value;
  console.log(name);
  let body = `${message}, <br> - ${name} - ${email}`;
  window.open(`mailto:julietacash@gmail.com?subject=WebSite&body=${body}`);
}

let sendEmailButton = document.querySelector("#send-email");
sendEmailButton.addEventListener("click", sendEmail);
