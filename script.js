$(document).ready(function(){
    function resize(){   
        var calculatePadding = parseInt($('.header').css("height"));
        
            $(".body-content").css({
                "padding-top": calculatePadding + "px"
            });
        
    }

    resize(); 
    $(window).resize(function(){ 
        resize();
    });
});

//lesure
$('document').ready(function(){
    var options=$('.options');
    var firstOption=options.first();
    var firstOptionContent=$('#'+firstOption.data('tab'))

    firstOption.addClass('active');
    firstOptionContent.addClass('active');
    options.on('click',function(){
        $('.options.active, .owl-container.active').removeClass('active');
        $(this).addClass('active');
        $('#'+$(this).data('tab')).addClass('active');
    })

})

//-------------lesure
$(function(){
    $('#owl-culture').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.1
                    }, 
                    
                    480:{
                        items: 2.2
                    },
                    768:{
                        items: 3.1
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-nature').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.1
                    }, 
                    
                    480:{
                        items: 2.2
                    },
                    768:{
                        items: 3.1
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-food').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.1
                    }, 
                    
                    480:{
                        items: 2.2
                    },
                    768:{
                        items: 3.1
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-sports').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 1.1
                    }, 
                    
                    480:{
                        items: 2.2
                    },
                    768:{
                        items: 3.1
                    },
                    992:{
                        items: 4.1
                    },
                    1200:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-rated').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    576:{
                        items: 3.2
                    },
                    768:{
                        items: 3.8
                    },
                    992:{
                        items: 4.2
                    },
                   
                }
    })
})
$(function(){
    $('#owl-dest').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                // autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    576:{
                        items: 3
                    },
                    768:{
                        items: 4.1
                    },
                    992:{
                        items: 5
                    },
                   
                }
    })
})
$(function(){
    $('#owl-news').owlCarousel({
                ltr: true,
                loop: true,
                margin: 10,
                nav:false,
                // autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive:{
                    0:{
                        items: 2
                    },
                    576:{
                        items: 3
                    },
                    768:{
                        items: 4.1
                    },
                    992:{
                        items: 4.2
                    },
                   
                }
    })
})
$('.owl-prev').click(function() {
    $('#owl-culture').trigger('prev.owl.carousel');
    $('#owl-nature').trigger('prev.owl.carousel');
    $('#owl-food').trigger('prev.owl.carousel');
    $('#owl-sports').trigger('prev.owl.carousel');
    $('#owl-rated').trigger('prev.owl.carousel');
    $('#owl-dest').trigger('prev.owl.carousel');
    $('#owl-news').trigger('prev.owl.carousel');
});

$('.owl-next').click(function() {
    $('#owl-culture').trigger('next.owl.carousel');
    $('#owl-nature').trigger('next.owl.carousel');
    $('#owl-food').trigger('next.owl.carousel');
    $('#owl-sports').trigger('next.owl.carousel');
    $('#owl-rated').trigger('next.owl.carousel');
    $('#owl-dest').trigger('next.owl.carousel');
    $('#owl-news').trigger('next.owl.carousel');

});
$(document).ready(function() {
    $('.destination-header').on('mouseover', function() {
        $('.destination-mega-menu').addClass('show');
    });

    $('.destination-header, .destination-mega-menu').on('mouseleave', function(e) {
        setTimeout(function() {
            if (!$('.destination-header').is(':hover') && !$('.destination-mega-menu').is(':hover')) {
                $('.destination-mega-menu').removeClass('show');
            }
        }, 100);
    });
    $('.ways-header').on('mouseover', function() {
        $('.ways-mega-menu').addClass('show');
    });

    $('.ways-header, .ways-mega-menu').on('mouseleave', function(e) {
        setTimeout(function() {
            if (!$('.ways-header').is(':hover') && !$('.ways-mega-menu').is(':hover')) {
                $('.ways-mega-menu').removeClass('show');
            }
        }, 100);
    });
});
