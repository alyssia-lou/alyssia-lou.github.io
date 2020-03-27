
    function colorChange() {
        $("#wrapper").css("background-color", "black");
        $("#wrapper a").css("color", "white");
        $("#wrapper a:hover").css("color", "white");
        $("#content-en, #content-ja").css("color", "white");
        $("#wrapper .modeChange a:hover").css("color", "white");
        $(".topMovieSmall").css("display", "none");
    }

    function revert() {
        $("#wrapper").css("background-color", "white");
        $("#wrapper a").css("color", "black");
        $("#content-en, #content-ja").css("color", "black");
        $("#wrapper .modeChange a:link").css("color", "black");
        $(".topMovieSmall").css("display", "block");
    }
