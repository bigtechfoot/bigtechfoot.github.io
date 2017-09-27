$(document).ready(function () {
  SetSize();
});

$(window).resize(function () {
  SetSize();
});

function SetSize() {
  var fontsize = window.innerWidth/750;
  fontsize = String(fontsize) + "em";
  $("body").css("font-size", fontsize);
}