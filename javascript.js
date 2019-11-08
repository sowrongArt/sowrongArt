(function (window) {
    $.fn.stopAtTop = function () {
        var $this = this,
            $window = $(window),
            thisPos = $this.offset().top,
            //thisPreservedTop = $this.css("top"),
            setPosition,
            under,
            over;

        under = function () {
            if ($window.scrollTop() < thisPos) {
                $this.css({
                    position: 'absolute',
                    top: ""
                });
                setPosition = over;
            }
        };

        over = function () {
            if (!($window.scrollTop() < thisPos)) {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
                setPosition = under;
            }
        };

        setPosition = over;

        $window.resize(function () {
            bumperPos = pos.offset().top;
            thisHeight = $this.outerHeight();
            setPosition();
        });

        $window.scroll(function () {
            setPosition();

            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = $('.panels-4').offset().top - 33;

            if (y_scroll_pos >= scroll_pos_test) {
                $('.logo').addClass('logo-black');
                $('body > .menu-button').removeClass('menu-button-white');
            } else {
                $('.logo').removeClass('logo-black');
                $('body > .menu-button').addClass('menu-button-white');
            }

        });
        setPosition();


    };
})(window);

$("#arrow").on("click", function () {
    $("html,#content1").animate({
        scrollTop: $("#content2").offset().top
    }, 1200)
})

$(document).ready(function () {

    $('.panels-1').stopAtTop();
    $('.panels-2').stopAtTop();
    $('.panels-3').stopAtTop();
    $('.panels-4').stopAtTop();
    $('.panels-5').stopAtTop();
    $('.panels-6').stopAtTop();

    // removeVideoOnMobile();

    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

});


