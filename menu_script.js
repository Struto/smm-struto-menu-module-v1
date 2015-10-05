$(function() {
    
    //Every thing desktop otherwise mobile
    $(window).on('load resize', function () {
            
        var largeScreenMenu = window.matchMedia("(min-width: 992px)");
            if (largeScreenMenu.matches){

                //MENU Top Header remove top strip on scroll
                $(window).scroll(function () { 
                    if ($(this).scrollTop() < 300) {
                       
                        $('.top-header-contact').slideUp();
                        $('.top-header-menu').removeClass("st-header-home");
                        
                    }
                });
                
            } 
    
    });
      
    
  
    $(window).bind("load", function() {
        $(".mobile-trigger > i").after("<span>MENU</span>");
        
        //Execute on menu open and menu close
        var isShowing = true;
        $(".custom-menu-primary .hs-menu-wrapper > ul").after("<div class='st-body-mobile'></div>");
        $('.mobile-trigger, .st-body-mobile').click(function () { 
            if (isShowing) {
              $(".st-body-mobile").show();

                isShowing = false;
            }
            else {
                $(".st-body-mobile").hide();
                
                isShowing = true;  
            }  
        });
            
            $(".st-body-mobile").click(function () {
                    $(this).hide();
                    $(".custom-menu-primary .hs-menu-wrapper").hide();
            });
      
        $('.header-container .top-header-menu').slideDown(500);
        
        
        //Landing page append logo inside header banner
        $(".st-landing-template").find(".w-container.hp-banner-container").append("<div class='landing-page-logo'></div>");
        
        //Thank you append read more inside post listing module
        $(".st-thank-post-filter .hs_cos_wrapper_type_post_listing ul li a").append(". - <em class='challenges-read-more-link'>Read More</em>");
        
        //Wrap two columns to balance two column height
        $(".st-how-we-help span .hp-who-we-work-with-column").parent().addClass("st-wrap-who-help");
        $(".st-how-we-help span .st-wrap-who-help:even").wrapAll("<div class='w-row hp-who-we-work-with-row'></div>");
        
            
        //Resources Download
        $(".resource-downloads-row a.cta_button:contains('Download Now')").contents().filter(function(){
            return this.nodeType === 3;
        }).wrap("<span></span>");
        
        var st_rest_this = $(".st-resources-wrap .hs_cos_wrapper_type_custom_widget");
        $(st_rest_this).hover(
           function(){
               $(this).find(".resource-downloads-text-block-for-download").css({"color": "#333132", "text-shadow": "none"});
               $(this).find(".resource-downloads-link-block").css("background", "#7a6841");
           },
           function(){
               $(this).find(".resource-downloads-text-block-for-download").css({"color": "#bfcd31", "text-shadow": "rgba(0,0,0,0.49) 1px 1px 1px"});
               $(this).find(".resource-downloads-link-block").css("background", "#b4975a");
           }
        );
        
        $( st_rest_this).each(function() {
          $(this).fadeIn("slow").fadeOut("slow").fadeIn("slow");
        });
        
    });
    
   
       
 
    //ST Team Member Custom Module
    $('.st-team-wrap').unwrap();
    var st_team = $('.about-team-section span > div.st-team-wrap');
           
    $(st_team).each(function(i) {
        $(this).addClass("st-item-"+(i+1));
        var itemClass = ".st-item-"+(i+1);
       $(itemClass + " .about-employee-pagination-next").mousedown(function(){
           $(itemClass).find("div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "none", "top": "0px"});
           $(itemClass).next().find("div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "block", "top": "0px"});
       });
       $(itemClass + " .about-employee-pagination-back").mousedown(function(){
           $(itemClass).find("div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "none", "top": "0px"});
           $(itemClass).prev().find("div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "block", "top": "0px"});
       });
    });
    
    $(".st-team-wrap:last-child .about-employee-pagination-next").mousedown(function(){
        $(".st-team-wrap:last-child div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "none", "top": "0px"});
        $(".st-team-wrap.st-item-1 div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "block", "top": "0px"});
    });
    
    $(".st-team-wrap.st-item-1 .about-employee-pagination-back").mousedown(function(){
       $(".st-team-wrap.st-item-1 div.st-about-employee-pop-up").hide();
       $(".st-team-wrap:last-child div.st-about-employee-pop-up").css({"transition": "all 0s ease 0s", "display": "block", "top": "0px"});
    })
    
    $(st_team).each(function(){ 
        $(this).click(function(){
            $(this).find(".st-about-employee-pop-up").show();
            $(this).find(".st-about-employee-pop-up").css("top", 0);   
        }); 
    });

    $('.about-employee-overlay-exit-icon').mousedown(function(){ 
      $(".st-about-employee-pop-up").hide();
    });
     
    //ST Team Pop Up Text unwrap
    $("div.about-employee-p p:contains('')").contents().filter(function(){
        return this.nodeType === 3;
    }).unwrap("<span></span>"); 
    

   
    /***************************** Plugin Call *******************************/
 
     
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
    
    //Drop the Signin into the drop down menu on modile device 
    var signin = '<li class="hs-menu-item hs-menu-depth-1 st-signin"><a href="https://app.bitstocks.com/login/">Sign In</a></li>';
    $(".hs-menu-flow-horizontal").find("ul > li:eq(0)").before(signin);
  
    
    //Overriding the email placeholder of HubSpot to a custom one
    setTimeout(function () { 
        $('.widget-type-blog_subscribe .input :input[type="email"]').attr("placeholder", "Enter Your Email").attr('style', 'text-align:left;');
	}, 9000);
    
    
    //Blog Recent Post limit to one
     $('.st-blist-header-section').find(".post-listing > div.st-post-item-blist:first-child").show();
     
     
    //Footer border equalizer
    $(window).on('load resize', function () {
            
        var smallScreen = window.matchMedia("(min-width: 768px)");
        if (smallScreen.matches){
        
            var st_span = ".footer-top-container .span3";
            var st_footer = ".footer-top-container";
    
            var h_span = $(st_span).height();
            var h_footer = $(st_footer).height();
    
            $(st_span).height(h_footer);
            
              //Enforce justify on text
            $('.text-justify p').css("text-align", "justify");
            $('.text-justify h2').css("text-align", "left");

        } else {
            
             $('.text-justify p').css("text-align", "left");
             $('.text-justify h2').css("text-align", "left"); 
        }
             
    
    });



    //Wrap every unwrapped text within the blog 
    $(".st-blog-single .post-body .hs_cos_wrapper_type_rich_text:contains('')").contents().filter(function(){
        return this.nodeType === 3;
    }).wrap("<span></span>");
    $(".st-blog-single .blog-post-wrapper").show();
      
    //  Fix menu disappearing on desktop after toggling mobile menu 
    $(".hs-item-has-children").mouseenter(function() { $(".hs-menu-children-wrapper").addClass("st-dp-menu-show"); });
            
  
    // by default hide
    $(".hs-menu-children-wrapper").hide();
  
    // Make Dropdown Menu clickable on the iPad
    $(".hs-item-has-children > a").click(function() {
        $(".hs-menu-children-wrapper").removeClass("st-dp-menu-show");
        $(".hs-menu-children-wrapper").addClass("st-show");
        $(".hs-menu-children-wrapper").toggle();
    });
    
    
    //Wrap every unwrapped text within the .why-block 
    $(".why-block .hs_cos_wrapper_type_rich_text > span:contains('')").contents().filter(function(){
        return this.nodeType === 3;
    }).wrap("<p></p>");
    
    
    //Search bar mouse enter change icon color
    $("input.seach-input").hover( 
        function() { $(".search-container span.fa").css("color","white"); },
        function() { $(".search-container span.fa").css("color","#505050"); }
    );
    
   
    //Prepend line to the middle of the block
    $(".why-block").prepend("<span class='why-block-line'></span>");
    $(".custom-menu-primary ul:first-child").addClass("st-menu-scroll");
    
    
    //Other scripts here...
    
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
   var serv = ".serv-text-1, .serv-text-2, .serv-text-3, .serv-text-4";
   var img = ".serv-img-2 img, .serv-img-3 img, .serv-img-4 img";
    

  $(window).on('load resize', function () {
        var h_serv = $(serv).height();
        var h_img = $(img).height();
            
        h_serv = h_img;
        $(serv).height(h_serv);
   });
                  
        
   $(serv).hide();
   
   $("#serv-box-1").mouseenter(function(){ $(".serv-text-1").show(); $(".serv-img-1, .serv-footer-1").hide(); });
   $("#serv-box-2").mouseenter(function(){ $(".serv-text-2").show(); $(".serv-img-2, .serv-footer-2").hide(); });
   $("#serv-box-3").mouseenter(function(){ $(".serv-text-3").show(); $(".serv-img-3, .serv-footer-3").hide(); });
   $("#serv-box-4").mouseenter(function(){ $(".serv-text-4").show(); $(".serv-img-4, .serv-footer-4").hide(); });
   
   $("#serv-box-1").mouseleave(function(){ $(".serv-text-1").hide();  $(".serv-img-1, .serv-footer-1").show(); });
   $("#serv-box-2").mouseleave(function(){ $(".serv-text-2").hide();  $(".serv-img-2, .serv-footer-2").show(); });
   $("#serv-box-3").mouseleave(function(){ $(".serv-text-3").hide();  $(".serv-img-3, .serv-footer-3").show(); });
   $("#serv-box-4").mouseleave(function(){ $(".serv-text-4").hide();  $(".serv-img-4, .serv-footer-4").show(); });
   
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
       
    //Every thing desktop otherwise mobile
    $(window).on('load resize', function () {
            
        var smallScreen = window.matchMedia("(min-width: 768px)");
            if (smallScreen.matches){
                // Make div same height Office
                var maxHeight = 0;
                    $(".offices-div-wrap").each(function(){ if ($(this).height() > maxHeight) { maxHeight = $(this).height(); } });
                    $(".offices-div-wrap").height(maxHeight);    
            } else { 
                    $(".offices-div-wrap").css("height","auto");
            }
    });

    
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
    
    //Overriding the email placeholder of HubSpot to a custom one
    setTimeout(function () { 
    
     $('.widget-type-blog_subscribe .input :input[type="email"]').attr("placeholder", "Enter Your Email").attr('style', 'text-align:left;');
	
	}, 9000);
     
    //Blog Recent Post limit to one
     $('.st-blist-header-section').find(".post-listing > div.st-post-item-blist:first-child").show();
     
   //Wrap every unwrapped text within the blog 
    $(".st-blog-single .post-body .hs_cos_wrapper_type_rich_text:contains('')").contents().filter(function(){
        return this.nodeType === 3;
    }).wrap("<span></span>");
    $(".st-blog-single .blog-post-wrapper").show();
      
    //  Fix menu disappearing on desktop after toggling mobile menu 
    $(".hs-item-has-children").mouseenter(function() { $(".hs-menu-children-wrapper").addClass("st-dp-menu-show"); });
            
     // Make Dropdown Menu clickable on the iPad
    $(".hs-item-has-children > a").click(function() {
        $(".hs-menu-children-wrapper").removeClass("st-dp-menu-show");
        $(".hs-menu-children-wrapper").addClass("st-show");
        $(".hs-menu-children-wrapper").toggle();
    });
    
     //Wrap every unwrapped text within the .why-block 
    $(".why-block .hs_cos_wrapper_type_rich_text > span:contains('')").contents().filter(function(){
        return this.nodeType === 3;
    }).wrap("<p></p>");
    
    //Search bar mouse enter change icon color
    $("input.seach-input").hover(
        
        function() { $(".search-container span.fa").css("color","white"); },
        function() { $(".search-container span.fa").css("color","#505050"); }
        
    );
   
   //Prepend line to the middle of the block
   $(".why-block").prepend("<span class='why-block-line'></span>");

    $(".custom-menu-primary ul:first-child").addClass("st-menu-scroll");
    
    
    $("[href='//cdn2.hubspot.net/hub/183406/hub_generated/style_manager/1432639335842/custom/shared/css/custom-style.min.css']").remove();
    
    //Body slide: please set display none on the body
    $("body").fadeIn("slow").css("overflow","initial");
    
    //Prepend a header in blog comment form
    setTimeout(function () { 
        
        $("<h3>Add a comment</h3>").prependTo(".blist-comment-form form");
        $('.blist-comment-form input[type="submit"]').attr("value", "Post Comment..."); 
        $(".blist-comment-form .hs-form-booleancheckbox-display:contains('Subscribe to follow-up comments for this post')").contents().filter(function(){
        return this.nodeType === 3;
        }).replaceWith("Receive follow comments");

    }, 4000);
    
    var myImg = $("#hs_cos_wrapper_post_body>img").attr('src');
    $(".tn-post-banner-image").css({'backgroundImage' : 'url('+myImg+')'});

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$(function() {
    
        
    //This is bottom footer sticker menu
    $(".footer-link-block-text").clone().prependTo(".footer-link-block-text").addClass("footer-sticker");  
    
    //Every thing desktop otherwise mobile
    $(window).on('load resize', function () {
            
        var smallScreen = window.matchMedia("(min-width: 768px)");
            if (smallScreen.matches){
                // Make div same height Office
                var maxHeight = 0;
                    $(".offices-div-wrap").each(function(){ if ($(this).height() > maxHeight) { maxHeight = $(this).height(); } });
                    $(".offices-div-wrap").height(maxHeight);    
            } else { 
                    $(".offices-div-wrap").css("height","auto");
            }
          
        var smallScreenMobile = window.matchMedia("(min-width: 480px)");
            if (smallScreenMobile.matches){
                // Make div same height Library 
                var maxHeightLib = 0;
                    $(".library-description").each(function(){ if ($(this).height() > maxHeightLib) { maxHeightLib = $(this).height(); } });
                    $(".library-description").height(maxHeightLib);
            } else { 
                    $(".library-description").css("height","auto");
            } 
            
        var largeScreenMenu = window.matchMedia("(min-width: 992px)");
            if (largeScreenMenu.matches){
                //MENU HEADER
                $('.top-header-menu').height($(".desktop-menu").height());
                
                $('.desktop-menu').affix({
                    offset: { top: $('.desktop-menu').offset().top }
                });
            }
        
    });
    
    $('.header-container').show();
    $(window).bind("load", function() {
         
        //Execute on menu open and menu close
        var isShowing = true;
        $('.mobile-trigger').click(function () {
            if (isShowing) {
                $('.cta-dropdown').show();
                isShowing = false;
            }
            else {
                $('.cta-dropdown').hide();
                isShowing = true;
            }
        })
    });
    
    //Homepage Ebook Slider 
    setTimeout(function () { 
        //Icon
        $('.st-home-pension-slide a.slick-slide img').after('<div class="st-pen-hover st-icon-pension"><span class="fa fa-download"></span><br><span class="st-pens-d">Download Now</span></div>');
        
        //Increment class ids in each item for hover efferct
        $('.st-home-pension-slide a.slick-slide').each(function(i) {
            i = i+1;
            var item = 'st-pen-slide-' + i;
            var itemSlide = '.st-home-pension-slide a.' + item;
            var itemHover = '.' + item + ' .st-icon-pension';
        
            $(this).addClass(item); 
    
            $(itemSlide).hover( 
                function() { $(itemHover).show(); }, 
                function() { $(itemHover).hide(); }
            );       
        });
        
    }, 3000);
    
    //Export Image to different location
    var myImg = $(".st-blog-post #hs_cos_wrapper_post_body img").attr('src');
    $(".st-blog-post-image").css({'backgroundImage' : 'url('+myImg+')'});
    
        //Prepend a header in blog comment form
    setTimeout(function () { $("<h6>Add a comment</h6>").prependTo(".st-blog-post .blog-comment-form form");}, 4000);
    
    //Add line
    $('.st-home-why').find(".secondary-header").after("<hr>");
    
    //Remove three dot at the end of summary
    $('.st-rss-listing').find(".hs-rss-description p:contains('...')").contents().filter(function(){
        return this.nodeType === 3;
    }).remove();
    
   //Video Pop UP Career
    $(".st-video-modal .st-video-icon").click(function() {
         $('.header-container-wrapper').hide();
    });
    $(".st-video-modal .close").click(function() {
         $('.header-container-wrapper').show();
    });
   
    //About us page last append  
    $('.st-about-team .hs_cos_wrapper_type_custom_widget:last-child').append('<a href="st-careers" class="col-xs-6 col-sm-3 col-md-3 team-column join-team">Join Our Team</a>');
    
    
});




