$('a.prev').click(function() {
    prevSlide($(this).parents('.slideshow').find('.slides'));
});
//clicking image goes to next slide
$('a.next, .slideshow img').click(function() {
    nextSlide($(this).parents('.slideshow').find('.slides'));
});

//initialize show
iniShow();

function iniShow() {
    //show first image
    $('.slideshow').each(function() {
        $(this).find('img:first').fadeIn(0);
    })
}

function prevSlide($slides) {
    $slides.find('img:last').prependTo($slides);
    showSlide($slides);
}

function nextSlide($slides) {
    $slides.find('img:first').appendTo($slides);
    showSlide($slides);
}

function showSlide($slides) {
    //hide (reset) all slides
    $slides.find('img').hide();
    //fade in next slide
    $slides.find('img:first').fadeIn(0);
}