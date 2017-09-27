$(document).ready(function() {
  SetSize();
  DisplayTotals();
  $("#totals").hide();
  checkCookie("AdultsDineIn");
  checkCookie("AdultsDineOut");
  checkCookie("ChildrenDineIn");
  checkCookie("ChildrenDineOut");
  checkCookie("TotalAdults");
  checkCookie("TotalChildren");
  checkCookie("TotalDineIn");
  checkCookie("TotalDineOut");
  checkCookie("TotalTotal");
});

$(window).resize(function () {
  SetSize();
});

function SetSize() {
  var fontsize = window.innerWidth/750;
  fontsize = String(fontsize) + "em";
  $("body").css("font-size", fontsize);
  $("#back").css("height", window.innerWidth*11/8.5);
  $("#top-bar").css("padding-bottom", "14%");
}

function DisplayTotals() {
  $("#inA").text(getCookie("AdultsDineIn"));
  $("#outA").text(getCookie("AdultsDineOut"));
  $("#inC").text(getCookie("ChildrenDineIn"));
  $("#outC").text(getCookie("ChildrenDineOut"));
  $("#totalA").text(getCookie("TotalAdults"));
  $("#totalC").text(getCookie("TotalChildren"));
  $("#totalI").text(getCookie("TotalDineIn"));
  $("#totalO").text(getCookie("TotalDineOut"));
  $("#total").text(getCookie("TotalTotal"));
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

$("#inAp").click(function() {
  setCookie("AdultsDineIn", (+getCookie("AdultsDineIn")+1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")+1), 1000);
  setCookie("TotalDineIn", (+getCookie("TotalDineIn")+1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")+1), 1000);
  DisplayTotals();
});
$("#inA-").click(function() {
  setCookie("AdultsDineIn", (+getCookie("AdultsDineIn")-1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")-1), 1000);
  setCookie("TotalDineIn", (+getCookie("TotalDineIn")-1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")-1), 1000);
  DisplayTotals();
});
$("#outA+").click(function() {
  setCookie("AdultsDineOut", (+getCookie("AdultsDineOut")+1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")+1), 1000);
  setCookie("TotalDineOut", (+getCookie("TotalDineOut")+1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")+1), 1000);
  DisplayTotals();
});
$("#outA-").click(function() {
  setCookie("AdultsDineOut", (+getCookie("AdultsDineOut")-1), 1000);
  setCookie("TotalAdults", (+getCookie("TotalAdults")-1), 1000);
  setCookie("TotalDineOut", (+getCookie("TotalDineOut")-1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")-1), 1000);
  DisplayTotals();
});
$("#inC+").click(function() {
  setCookie("ChildrenDineIn", (+getCookie("ChildrenDineIn")+1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")+1), 1000);
  setCookie("TotalDineIn", (+getCookie("TotalDineIn")+1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")+1), 1000);
  DisplayTotals();
});
$("#inC-").click(function() {
  setCookie("ChildrenDineIn", (+getCookie("ChildrenDineIn")-1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")-1), 1000);
  setCookie("TotalDineIn", (+getCookie("TotalDineIn")-1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")-1), 1000);
  DisplayTotals();
});
$("#outC+").click(function() {
  setCookie("ChildrenDineOut", (+getCookie("ChildrenDineOut")+1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")+1), 1000);
  setCookie("TotalDineOut", (+getCookie("TotalDineOut")+1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")+1), 1000);
  DisplayTotals();
});
$("#outC-").click(function() {
  setCookie("ChildrenDineOut", (+getCookie("ChildrenDineOut")-1), 1000);
  setCookie("TotalChildren", (+getCookie("TotalChildren")-1), 1000);
  setCookie("TotalDineOut", (+getCookie("TotalDineOut")-1), 1000);
  setCookie("TotalTotal", (+getCookie("TotalTotal")-1), 1000);
  DisplayTotals();
});
$("#hide").click(function() {
  $("#totals").hide();
});
$("#show").click(function() {
  $("#totals").show();
});
$("#scookies").click(function() {
  alert(document.cookie)
});
$("#ccookies").click(function() {
  var clear = prompt("Do you want to clear all values permanently? (Y/N)", "N");
  if (clear == "y" || clear == "Y") {
    setCookie("AdultsDineIn", 0, 1000);
    setCookie("AdultsDineOut", 0, 1000);
    setCookie("ChildrenDineIn", 0, 1000);
    setCookie("ChildrenDineOut", 0, 1000);
    setCookie("TotalAdults", 0, 1000);
    setCookie("TotalChildren", 0, 1000);
    setCookie("TotalDineIn", 0, 1000);
    setCookie("TotalDineOut", 0, 1000);
    setCookie("TotalTotal", 0, 1000);
    DisplayTotals();
    alert("All totals have been reset to 0");
  }
});
