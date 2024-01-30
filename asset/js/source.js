/*
// slide giải mã, đỉnh cao cuộc đời, dự báo thời vận
const $sliderMobileOnly = $(".slider-mobile-only");
$sliderMobileOnly.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: false,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="asset/images/icon/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="asset/images/icon/arrow-right.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        }
    ]
})
    .init(function() {
        var currentSlide = $sliderMobileOnly.slick('getSlick').getCurrent()
        var slideCount = $sliderMobileOnly.slick("getSlick").getDotCount()
        $sliderMobileOnly.append('<div class="slick-counter">'+ parseInt(currentSlide + 1, 10) +' / '+ (Number(slideCount) + 1) +'</div>')
    })

$sliderMobileOnly.on("afterChange", function(){
    var currentSlide = $sliderMobileOnly.slick('getSlick').getCurrent()
    var slideCount = $sliderMobileOnly.slick("getSlick").getDotCount()
    $sliderMobileOnly.find('.slick-counter').html(currentSlide + 1 +' / '+ (Number(slideCount) + 1));
});*/







// slide blog
$('#brands').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false
});
// slide blog
$('#brands-mobile').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false
});
$('#fb-kh').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 3,
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,

                centerPadding:'0px',
                // centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,

                centerPadding:'0px',
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


// scroll to top
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

$(".btn-copy").click(function() {
    const txt = $(this).data('text')
    navigator.clipboard.writeText(txt)
})

$('#slide-feedback').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToScroll: 3,
    slidesToShow: 3,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>',
    autoplay:true,
    autoplaySpeed:1500,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>',

                centerPadding:'0px',
                // centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fas fa-chevron-left"></i><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>',

                centerPadding:'0px',
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

var shrinkHeader = 300;
$(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
        $('#header-app').addClass('shrink');
    }
    else {
        $('#header-app').removeClass('shrink');
    }
});
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
