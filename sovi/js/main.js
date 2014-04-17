$(function() {
    $('.skills span').on('click', function(){
		$(this).siblings('.cover').fadeIn(300);
		$(this).parent('li').addClass('active');
	});
	$('.skills .cover .content .close').on('click', function(){
		$('.skills li').removeClass('active');
		$('.cover').fadeOut(300);
	});
    
    var win = $(window);
    var header = $('header');
    
    win.on("scroll", function(e){
        
        if(win.scrollTop() > 300 && true){
            header.addClass('rect');
            if(header.find('.hidden-menu').length){
                return false;
            }
            $('<div class = "hidden-menu"><ul id = "hidden-bars"><li class = "menu-bar"></li><li class = "menu-bar"></li><li class = "menu-bar"></li></ul></div></div>').appendTo(header);
            if(header.hasClass('rect')){
                header.on('mouseover', function(){
                    $(".logo").stop().animate({
                        paddingLeft: "15px"
                    })
                    $("#hidden-bars").css({
                        "display": "block"
                    });
                    $('.hidden-menu').stop().animate({
                        right: "-80px",
                        width: "80px",
                        display: "block"
                    }, function(){
                        header.on('mouseout', function(){
                            $(".logo").stop().animate({
                                paddingLeft: "0px"
                            });
                            $("#hidden-bars").css({
                                "display": "none"
                            });
                            $('.hidden-menu').stop().animate({
                                right: "0px",
                                width: "0px"
                            }); 
                        });
                    });
                });
            }
             $("#hidden-bars").on("click", function(){
                    $(".rect").animate({
                        width: "100%"
                    }, 150);
                    $(".rect ul").fadeIn(1000);
                    header.on("mouseover", function(){
                        $(this).animate({
                            paddingLeft: "0px !importan"
                        })
                    })
                })
        }
        else{
            header.removeClass('rect');
                $('.hidden-menu').remove();
        }
    });   
});


