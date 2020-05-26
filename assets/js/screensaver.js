var mousetimeout;
var screensaver_active = false;
var idletime = 10;
  
function show_screensaver() {
  $('#screensaver').show();
  $('#header').hide();
  // document.body.style.backgroundColor = "black";
  screensaver_active = true;
}
  
function stop_screensaver() {
  $('#screensaver').hide();
  $('#header').show();
  // document.body.style.backgroundColor = "white";
  // document.getElementById("header").style.color = "black";
  screensaver_active = false;
}
  
$(document).mousemove(function () {
  clearTimeout(mousetimeout);
  
  if (screensaver_active) {
    stop_screensaver();
  }
  
  mousetimeout = setTimeout(function () {
    show_screensaver();
  }, 1000 * idletime); // 5 secs			
});