$(document).ready(function () {

	// $('.ajax-feedback').append('<input type="hidden" name="key" value="2ea4577">');

	$("#slider").owlCarousel({

		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		smartSpeed: 2000,

		responsive:{
				0:{
					items:1,
					dots:false
				},
				768:{
					items:1
				}
			}
	});

	//PhotoSwipe Gallery
	$('.photoswipe-gallery img').each(function () {
		$(this).wrap('<a href="' + $(this).attr('src').replace('_thumb', '') + '" data-size="' + $(this).data('size') + '"></a>')
	});
	$('.photoswipe-gallery').each(function () {
		var $gallery = $(this),
			getItems = function () {
				var items = [];

				$gallery.find('a').each(function () {
					var $href = $(this).attr('href'),
						$size = $(this).data('size').split('x'),
						$width = $size[0],
						$height = $size[1],
						item = {
							src: $href,
							w: $width,
							h: $height
						}

					items.push(item);
				});

				return items;
			},
			items = getItems(),
			$pswp = $('.pswp')[0];

		$gallery.on('click', 'a', function (e) {
			e.preventDefault();

			var $index = $(this).parent().index(),
				options = {
					bgOpacity: 0.7,
					index: $index,
					shareEl: false,
					showHideOpacity: true
				},
				photoswipe = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);

			photoswipe.init();
		});
	});

	let sliderCheeses = $('.slider-cheeses').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        appendArrows: $('#sliderCheesesArrows'),
        prevArrow: '<button class="button-sl-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="button-sl-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });

    sliderCheeses.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('#sliderCheesesArrows .current-slide').text($(this).slick('slickCurrentSlide')+1);
    });

	let sliderReview = $('.slider-review').slick({
        infinite: false,
		slidesToShow: 3,
        appendArrows: $('#sliderReviewArrows'),
        prevArrow: '<button><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    });

	let sliderProd = $('.slider-prod').slick({
        infinite: false,
		slidesToShow: 3,
        appendArrows: $('#sliderProdArrows'),
        prevArrow: '<button><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    });


	// sliderReview.on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     $('#sliderReviewArrows .current-slide').text($(this).slick('slickCurrentSlide')+1);
    // });


    let sliderFilter = $('.slider-filter').slick({
        infinite: false,
        slidesToShow: 3,
        appendArrows: $('#sliderFilterArrows'),
        prevArrow: '<button><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '40px',
                }
            }
        ]
    });

    //let filtered = false;
    $('.filter-all').on('click', function(){
        $(this).parent().find('button.active').removeClass('active');
        $(this).addClass('active');
        sliderFilter.slick('slickUnfilter');
    });

    $('.filter-new').on('click', function(){
        $(this).parent().find('button.active').removeClass('active');
        $(this).addClass('active');
        sliderFilter.slick('slickUnfilter');
        sliderFilter.slick('slickFilter', '.new');
    });

    $('.filter-recipes').on('click', function(){
        $(this).parent().find('button.active').removeClass('active');
        $(this).addClass('active');
        sliderFilter.slick('slickUnfilter');
        sliderFilter.slick('slickFilter', '.recipe');
    });

    $('.filter-events').on('click', function(){
        $(this).parent().find('button.active').removeClass('active');
        $(this).addClass('active');
        sliderFilter.slick('slickUnfilter');
        sliderFilter.slick('slickFilter', '.event');
    });
});

function toggleTotop() {
	var height = $(this).scrollTop(),
		totop = $('#totop');

	if (height > 0) {
		totop.css('display', 'block');
		totop.animate({
			opacity: 0.8
		}, {
			duration: 320,
			queue: false
		});
	} else if (height === 0) {
		totop.animate({
			opacity: 0
		}, {
			duration: 320,
			queue: false,
			complete: function () {
				totop.css('display', 'none');
			}
		});
	}
}
$('#totop').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 320);

	return false;
});
toggleTotop();
$(window).scroll(function () {
	toggleTotop();
});

//Slick Gallery
$('.slider2').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	  speed: 1000,
	 arrows: false,
	 rtl: false,
	 // fade: true,
	 draggable:false,
	 asNavFor: '.slider1'
});

$('.slider1').slick({
	  infinite: true,
	  speed: 1000,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  arrows: false,
	  asNavFor: '.slider2',
	  dots: false,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: false,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
  ]
});

$('.ft-gallery').slick({
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  appendArrows: $('.ft-gallery-arrow'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button id="next" type="button" class="btn btn-juliet"> <i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$("#reviews").owlCarousel({

		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		appendArrows: $('#sliderCheesesArrows'),
        prevArrow: '<button><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
	});


var fActive='';
function filterColor(color){
if(fActive!=color){
	$('.sort').filter('.'+color).slideDown();
	$('.sort').filter(':not(.'+color+')').slideUp();fActive=color;}
}
	$('.f-all').click(function(){$('.sort').slideDown();fActive='all';});
	$('.f-new').click(function(){filterColor('new');});
	$('.f-recipes').click(function(){filterColor('recipes');});
	$('.f-events').click(function(){filterColor('events');});

function footerToBottom() {
var browserHeight = $(window).height(),
footerOuterHeight = $('#footer').outerHeight(true),
mainHeightMarginPaddingBorder = $('#main').outerHeight(true) - $('#main').height();
$('#main').css({
'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
});
};
footerToBottom();
$(window).resize(function () {
footerToBottom();
});

let currentTab = 1;
$('#tabsArrows button').click(function(){

    $('.main-tabs li.active').removeClass('active');

	if ($(this).hasClass('prev') && currentTab != 1){
		currentTab--;
    }else if($(this).hasClass('next') && currentTab != 7){
        currentTab++;
	}

	if ($(this).hasClass('prevto') && currentTab != 1){
		currentTab--;
    }else if($(this).hasClass('nextto') && currentTab != 6){
        currentTab++;
	}

    let tab = $('.main-tabs li[data-number="'+currentTab+'"]');
    tab.addClass('active');

    $('.tabs-with-arrows>.tab-content>.tab-pane.active').removeClass('active in');
    $(tab.find('a').attr('href')).addClass('active in');

    $(this).parents('.arrows-with-counts').find('.current-slide').text(currentTab);
});

$('.tabs-with-arrows .main-tabs li').click(function(){
	currentTab = $(this).data('number');
    $(this).parents('.tabs-with-arrows').find('.arrows-with-counts .current-slide').text(currentTab);
});

$('.inner-tabs a').click(function(){
	let parent = $(this).parents('.tab-pane');
	parent.find('.tab-big-img.active').removeClass('active');
	parent.find('.tab-big-img.'+$(this).attr('href').slice(1)).addClass('active');
});



if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) 
{document.write('<style>.slider{position:absolute;} .ie350{padding-top:500px;}</style>')}


$('.main-tabs a').click( function(e){
    e.preventDefault();

    $(this).parents('.tabs-with-arrows').find('.tab-pane.animated.active').removeClass('active');
    $(this).parents('.main-tabs').find('li.active').removeClass('active');

    $(this).parent().addClass('active');
    $($(this).attr('href')).addClass('active');

    let t = 700,
		d = $(this).parents('.main-tabs').parent();

    if ($(d).offset().top != $(window).scrollTop()){
        $('html,body').animate({ scrollTop: $(d).offset().top }, t);
	}
});

$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    if ($(this).parents('.main-tabs').length == 0){
        e.preventDefault();
        var t = 700;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');

        $('html,body').animate({ scrollTop: $(d).offset().top }, t);
	}
});

$('.close').click(function() {
 $("#if").remove() 
 }) 
 
 
var sliderOptions = {
    centerPadding: '60px',
    slidesToShow: 4,
    variableWidth: true,
    loop: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

var tagsSlider = $('.tags__slider_js').slick(sliderOptions);

$('body').on('click', '.tags__btn_js_toggle', function(){
    if ($(this).hasClass('active')){
        $(this).text('Показать все');
        tagsSlider.slick(sliderOptions);
    }else{
        $(this).text('Скрыть');
        tagsSlider.slick('unslick');
    }

    $(this).toggleClass('active');
});

if ($(window).width() < 991){
    $('.tabs-mobile-content_js').find('.fade').removeClass('fade');
    $('.tabs-mobile-nav_js a').click(function(){
        var scrollingDistance = $('.tabs-mobile-content_js').offset().top - 20;
        $("html, body").animate({scrollTop: scrollingDistance}, 800);
    });
}