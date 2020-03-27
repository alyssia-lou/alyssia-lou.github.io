
$(function(){
	$(".enOn").click(function(){
		$(this).hide();
		$(".jaOn").show();

		$("h1 .en").hide();
		$("h1 .ja").show();

		$(".enMode").hide();
		$(".jpMode").show();

		$("#enFooter").hide();
		$("#jpFooter").show();
        
	});

    
	$(".jaOn").click(function(){
		$(this).hide();
		$(".enOn").show();

		$("h1 .ja").hide();
		$("h1 .en").show();

		$(".jpMode").hide();
		$(".enMode").show();

		$("#jpFooter").hide();
		$("#enFooter").show();
    
	});

	$("#topMovie").click(function(){
		$(this).toggleClass("topMovieSmall");
		$(this).toggleClass("topMovieBig");
	});
});

$(function(){
//PC用TOP Movie
var video = document.getElementById("topMovie");
	video.muted = true;
	function changeMute(){
	if(video.muted){
        		video.muted = false;
    	}else{
        	video.muted = true;
    	}
}

var videonum = Math.floor(Math.random() * videolist.length);    
video.src = videolist[videonum];
video.load();

function moviePlay(){
	video.play();
}

});