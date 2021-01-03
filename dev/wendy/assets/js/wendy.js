
$("#view").click(function () {
  $(".overall").fadeIn();
  $("#view").fadeOut();
  $("#view-images").fadeIn();
  $("#footer").fadeIn();
  $(".post").fadeOut();
  $(".prev").fadeOut();
  $(".next").fadeOut();
  
  
});


$("#view-images").click(function () {
  $(".overall").fadeOut();
  $("#view").fadeIn();
  $("#view-images").fadeOut();
  $("#footer").fadeOut();
  $(".post").show();
  $(".prev").show();
  $(".next").show();
});


/* SHARE
$(".caption-right").mouseover(function () {
  $(".caption-image").show();

});

$(".caption-right").mouseout(function () {
  $(".caption-image").hide();
});


$("#story").click(function () {
  $(".share-more").hide();

}); */
