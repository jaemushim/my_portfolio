// niceScroll
$('html').niceScroll();

$(window).on('load', function () {
    $('.loader-wrapper').delay('1000').fadeOut();

    new Typed('.type', {
        strings: ['안녕하세요:) <br> 웹 퍼블리셔 심재무입니다.'],
        typeSpeed: 100,
        backSpeed: 60,
        smartBackspace: true, // this is a default
        loop: false,
        startDelay: 1200,
    });
});

$(document).ready(function () {
    $('.navbar').sticky({ topSpacing: 0 });

    AOS.init();

    $('.on').click();

    // Scrolling Improved
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate(
                        {
                            scrollTop: target.offset().top,
                        },
                        400,
                        function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(':focus')) {
                                // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        }
                    );
                }
            }
        });

    /* button */
    $('.top_btn').click(function () {
        var $header = $('header');
        var $body = $('body');
        if ($header.hasClass('open')) {
            $header.removeClass('open');
        } else {
            $header.addClass('open');
        }
    });

    $('.modal_nav .about').click(function () {
        $('.modal_nav .top_btn').click();
    });
    $('.portfolio_btn').click(function () {
        $('.modal_nav .top_btn').click();
    });

    /* portfolio - tab */
    $(function () {
        $('.tab_con .con').find('.list li:lt(8)').addClass('active');

        $('.tab_menu li').click(function () {
            show = $(this).attr('data-active');

            $('.tab_menu li').removeClass('active');
            $(this).addClass('active');

            $('.tab_con .con').removeClass('active');
            $('.tab_con .con' + show).addClass('active');
        });

        $('.tab_con .more_btn').click(function () {
            moreData(this);
        });
    });
});
