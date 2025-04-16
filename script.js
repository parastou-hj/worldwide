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
                autoplay:true,
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
    $('#owl-all').trigger('prev.owl.carousel');
    $('#owl-xmas').trigger('prev.owl.carousel');
    $('#owl-nowrouz').trigger('prev.owl.carousel');
});

$('.owl-next').click(function() {
    $('#owl-all').trigger('next.owl.carousel');
    $('#owl-xmas').trigger('next.owl.carousel');
    $('#owl-nowrouz').trigger('next.owl.carousel');

});

