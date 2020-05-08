/* Alyssia Lou http://www.alyssialou.com */

/* ABOUT */

$("#about").click(function () {
    var about = $("#about").text();

    if (about == "Instructions") { // Landing page, with Instructions
        $("#about").text("Info");
        $("#intro").show();
        $("#content").show();
        $("#info").fadeOut();
        $("#share").show();

        $("#about").mouseover(function () {
            $("#intro").addClass("inactive");
            $("#content").addClass("inactive");
        });
        $("#about").mouseout(function () {
            $("#intro").removeClass("inactive");
            $("#content").removeClass("inactive");
        });
    } else {
        $("#about").text("Instructions"); // When About page shows
        $("#content").fadeOut();
        $("#intro").fadeOut();
        $("#share").fadeOut();
        $("#info").show();

        $("#about").mouseover(function () {
            $("#info").addClass("inactive");
            $("#info a").addClass("inactive");
        });
        $("#about").mouseout(function () {
            $("#info").removeClass("inactive");
            $("#info a").removeClass("inactive");
        });
    }
});

/* VIDEO PLAYER */

$("#play").click(function () {
    var play = $("#play").text();

    if (play == "Pause") { // When video is played
        $("#play").text("Play"); // text turns to Play 
        $("#play").show();
        $("#pause").fadeOut();
        $("#area").hide();
        $("#caption").fadeIn();
        $("#fullscreen").fadeOut();
        $("#right").fadeIn();

    } else { // Video is paused
        $("#play").text("Pause"); // text turns Pause
        $("#right").fadeOut(); // hide right corner side
        $("#area").show();
        $("#caption").fadeOut();
        $("#pause").fadeIn();
        $("#fullscreen").fadeIn();
        $("#play").fadeOut();

        $("#area").mouseover(function () {
            $("#fullscreen").hide();
            $("#pause").hide();
        });

        $("#area").mouseout(function () {
            $("#fullscreen").show();
            $("#pause").show();
        });

        $("#pause").click(function () {
            var pause = $("#pause").text();
            if (pause == "Pause") {
                $("#play").text("Play");
                $("#play").show();
                $("#pause").hide();
                $("#area").hide();
                $("#fullscreen").fadeOut();
                $("#caption").fadeIn();
                $("#right").fadeIn();
            } else {
                $("#play").text("Pause");
                $("#right").fadeOut();
                $("#pause").show();
                $("#caption").fadeOut();
                $("#area").show();
                $("#fullscreen").fadeIn();
                $("#play").hide();

            }
        });
    }
});


var vid = document.getElementById("player");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
var elem = document.getElementById("player");

/* SHARE */
$("#share").mouseover(function () {
    $(".share-more").show();
    $(".share-less").hide();
    $("#info").addClass("inactive");
    $("#intro").addClass("inactive");
    $("#content").addClass("inactive");
    $("#story").addClass("inactive");
    $("#story a").addClass("inactive");
    $("#website a").addClass("inactive");
});
$("#share").mouseout(function () {
    $(".share-more").hide();
    $(".share-less").show();
    $("#info").removeClass("inactive");
    $("#intro").removeClass("inactive");
    $("#content").removeClass("inactive");
    $("#story").removeClass("inactive");
    $("#story a").removeClass("inactive");
    $("#website a").removeClass("inactive");
});