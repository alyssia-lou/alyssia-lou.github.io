$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var headerToDisplay = false;
    $('.slideshow[data-visible-range]').each(function () {
        var range = $(this).data('visible-range').split('-');
            range[0] = range[0] ? parseInt(range[0], 10) : 0;
            range[1] = range[1] ? parseInt(range[1], 10) : $(document).height();
            if (scrollTop >= range[0] && scrollTop <= range[1]) {
                headerToDisplay = $(this);
                return false;
            }
        });
        if (headerToDisplay && !headerToDisplay.is(':visible')) {
            $('.slideshow[data-visible-range]').hide();
            headerToDisplay.show();
        }
    });