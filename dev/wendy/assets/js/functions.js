$(document).ready(function () {

    var header =
        '<header class="bkp header">' +
            '<div class="ct" class="fade-in"></div>' +
        '</header>' +
        '<div id="nav"><div id="prev"></div><div id="next"></div></div>' +
        '<!--<div id="loading">Wendy Huynh, based between London and Paris<br>Founder/Editor of Arcades Magazine.</div>-->';

    var fancyboxOpts = {
        padding: 0,
        margin: 0,
        arrows: false,
        prevClick: false,
        closeClick: false,
        nextClick: false,
        closeBtn: false,
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        scrolling: 'no',
        keys: {
            next: {
                13: 'left', // enter
                34: 'left',   // page down
                39: 'left', // right arrow
                40: 'left'    // down arrow
            },
            prev: {
                8: 'right',  // backspace
                33: 'right',   // page up
                37: 'right',  // left arrow
                38: 'right'    // up arrow
            }
        },

        beforeShow: function () {
            var id = this.element.attr("id");
            if (id.length > 0) {
                window.location.hash = id;
            }
        },

        afterShow: function () {
            var bg_class = $(this.element).attr('data-style');

            $('.fancybox-overlay').css('background-color', '');

            if ($('.fancybox-overlay .header').length) {
               $('.fancybox-overlay .header').remove(); 
            }
            
            if ($('.fancybox-overlay #loading').length) {
               $('.fancybox-overlay #loading').remove(); 
            }
            
            if ($('.fancybox-overlay #nav').length) {
               $('.fancybox-overlay #nav').remove(); 
            }

            if (jQuery.fancybox.opts.bgClass !== '') {
                $('.fancybox-overlay').removeClass(jQuery.fancybox.opts.bgClass);
            }

            if (bg_class !== '' && bg_class !== undefined) {
                $('.fancybox-overlay').addClass(bg_class);
                jQuery.fancybox.opts.bgClass = bg_class;
            }
            else jQuery.fancybox.opts.bgClass = '';

            $('.fancybox-overlay').append(header);

            $('.fancybox-overlay #nav #prev').click(function () {
                jQuery.fancybox.prev();
            });

            $('.fancybox-overlay #nav #next').click(function () {
                jQuery.fancybox.next();
            });

            $('.ct').html($(this.element).attr('data-ct'));
            
            var divContainerId = '#c' + $(this.element).data('pnum');
            
            $('#pcaption').html($(divContainerId).html());

            var elem = $('#loading');
            var i = 0;
            var color = elem.css('color');
            var bcolor = $('.fancybox-overlay').css('background-color');

            setInterval(function() {
                i = (i + 1)%2
                if (i === 0) {
                    elem.css('color', color);
                }
                else {
                    elem.css('color', bcolor);
                }
            }, 1500);
        },

        helpers: {
            title: {
                type: 'outside'
            },
            overlay: {
                css: {
                    'background': 'rgba(255,255,255,1)'
                }
            }
        },

        beforeClose: function () {
            if (history.pushState) {
                history.pushState("", document.title, window.location.pathname);
            }
        }

    };

    $('.slideshow').fancybox(fancyboxOpts);

    // Permalink
    if (window.location.hash) {
        $(window.location.hash).click();
    }

    $('body').swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            event.preventDefault()
            if (distance < 20) {
                jQuery.fancybox.next();
            }
            else {
                if ( direction === 'left' ) {
                    jQuery.fancybox.next();
                }
                else if ( direction === 'right' ) {
                    jQuery.fancybox.prev();
                }
            }  
        },
        threshold: 0
    });
});