$(document).ready(function() {
  var fontsize = window.innerWidth/850;
  fontsize = String(fontsize) + "em";
  $("body").css("font-size", fontsize);
  DisplayTotals();
  checkCookie("CurrentAdults")
  checkCookie("CurrentChildren");
  checkCookie("CurrentReceived");
  checkCookie("CurrentTotal");
  checkCookie("CurrentDonations");
  checkCookie("TotalAdults");
  checkCookie("TotalChildren");
  checkCookie("TotalDonations");
  checkCookie("TotalTickets");
  checkCookie("TotalRevenue");
  checkCookie("Total");
  $("#totals").hide();
});

function DisplayTotals() {
  $("#cAdult").text(getCookie("CurrentAdults"));
  $("#cChild").text(getCookie("CurrentChildren"));
  $("#cTotal").text("$" + getCookie("CurrentTotal"));
  $("#totalA").text(getCookie("TotalAdults"));
  $("#totalC").text(getCookie("TotalChildren"));
  $("#totalT").text(getCookie("TotalTickets"));
  setCookie("TotalRevenue", ((+getCookie("TotalAdults")*6) + (+getCookie("TotalChildren")*4)), 1000);
  $("#totalD").text("$" + getCookie("TotalDonations"));
  $("#totalR").text("$" + getCookie("TotalRevenue"));
  $("#total").text("$" + (+getCookie("TotalRevenue") + +getCookie("TotalDonations")));
};
function setCookie(name,value,days) {
     if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+";";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function checkCookie(cname) {
    var value = getCookie(cname);
    if (value != "") {
        setCookie(cname, value, 1000);
    } else {
        setCookie(cname, 0, 1000);
    }
}
$("#Ap").click(function() {
  setCookie("CurrentAdults", (+getCookie("CurrentAdults")+1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")+1), 1000);
  setCookie("CurrentTotal", (+getCookie("CurrentTotal")+6), 1000);
  setCookie("TotalTickets", (+getCookie("TotalTickets")+1), 1000);
  DisplayTotals();
});
$("#Am").click(function() {
  setCookie("CurrentAdults", (+getCookie("CurrentAdults")-1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")-1), 1000);
  setCookie("CurrentTotal", (+getCookie("CurrentTotal")-6), 1000);
  setCookie("TotalTickets", (+getCookie("TotalTickets")-1), 1000);
  DisplayTotals();
});
$("#Cp").click(function() {
  setCookie("CurrentChildren", (+getCookie("CurrentChildren")+1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")+1), 1000);
  setCookie("CurrentTotal", (+getCookie("CurrentTotal")+4), 1000);
  setCookie("TotalTickets", (+getCookie("TotalTickets")+1), 1000);
  DisplayTotals();
});
$("#Cm").click(function() {
  setCookie("CurrentChildren", (+getCookie("CurrentChildren")-1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")-1), 1000);
  setCookie("CurrentTotal", (+getCookie("CurrentTotal")-4), 1000);
  setCookie("TotalTickets", (+getCookie("TotalTickets")-1), 1000);
  DisplayTotals();
});
$("#rButton").submit(function(e) {
  e.preventDefault();
  setCookie("CurrentReceived", $("#received").val(), 1000);
  $("#received").val("");
  $("#cTotal").text("$" + (+getCookie("CurrentTotal")-getCookie("CurrentReceived")));
});
$("#Keep").click(function() {
  setCookie("TotalDonations", +getCookie("TotalDonations") + (+getCookie("CurrentReceived") - +getCookie("CurrentTotal")), 1000);
  setCookie("CurrentAdults", 0, 1000);
  setCookie("CurrentChildren", 0, 1000);
  $("#received").val('0');
  setCookie("CurrentReceived", 0, 1000);
  setCookie("CurrentTotal", 0, 1000);
  DisplayTotals();
});
$("#clear").click(function() {
  setCookie("CurrentAdults", 0, 1000);
  setCookie("CurrentChildren", 0, 1000);
  $("#received").val('0');
  setCookie("CurrentReceived", 0, 1000);
  setCookie("CurrentTotal", 0, 1000);
  DisplayTotals();
});
$("#dButton").submit(function(e) {
  e.preventDefault();
  setCookie("CurrentDonations", $("#donations").val(), 1000);
  setCookie("TotalDonations", (+getCookie("TotalDonations") + +getCookie("CurrentDonations")), 1000);
  $("#donations").val('0');
  DisplayTotals();
});
$("#donations").focusin(function() {
  $(this).val(" ");
});
$("#received").focusin(function() {
  $(this).val(" ");
});
$("#hide").click(function() {
  $("#totals").hide();
});
$("#show").click(function() {
  $("#totals").show();
});
$("#ccookies").click(function() {
  var clear = prompt("Do you want to clear all values permanently? (Y/N)", "N");
  if (clear == "y" || clear == "Y") {
    setCookie("CurrentAdults", 0, 1000);
    setCookie("CurrentChildren", 0, 1000);
    setCookie("CurrentReceived", 0, 1000);
    setCookie("CurrentTotal", 0, 1000);
    setCookie("CurrentDonations", 0, 1000);
    setCookie("TotalAdults", 0, 1000);
    setCookie("TotalChildren", 0, 1000);
    setCookie("TotalDonations", 0, 1000);
    setCookie("TotalTickets", 0, 1000);
    setCookie("TotalRevenue", 0, 1000);
    setCookie("Total", 0, 1000);
    DisplayTotals();
    alert("All totals have been reset to 0");
  }
});
