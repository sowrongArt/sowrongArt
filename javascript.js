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

        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $('.panels-4').offset().top - 33;

        if (y_scroll_pos >= scroll_pos_test) {
            $('.logo').addClass('logo-black');
            $('body > .menu-button').removeClass('menu-button-white');
        } else {
            $('.logo').removeClass('logo-black');
            $('body > .menu-button').addClass('menu-button-white');
        }

    };
})(window);

$("#arrow").on("click", function () {
    $("html,#content1").animate({
        scrollTop: $("#content2").offset().top
    }, 1200)
})

/*
  REMOVE VIDEO SOURCES ON MOBILE
*/
function removeVideoOnMobile() {

    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (isMobile.matches) {
        $('video').remove();
    } else {
        $('video').each(function () {
            $(this).get(0).play();
        });
    }

}

$(document).ready(function () {

    $('.panels-1').stopAtTop();
    $('.panels-2').stopAtTop();
    $('.panels-3').stopAtTop();
    $('.panels-4').stopAtTop();
    $('.panels-5').stopAtTop();
    $('.panels-6').stopAtTop();

    removeVideoOnMobile();

    $(".gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

});

/*fotki*/
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("myContainer");
//     if (n > x.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = x.length
//     };
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
// }

