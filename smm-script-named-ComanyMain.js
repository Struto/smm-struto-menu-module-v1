    /*    
      sssssss     MM       MM       MM       MM        
    ss           MM  MM  MM MM     MM  MM  MM MM
    ss           MM    MM   MM     MM    MM   MM
      ssss       MM         MM     MM         MM
          ss     MM         MM     MM         MM
           ss    MM         MM     MM         MM
          ss     MM         MM     MM         MM
    ssssss       MM         MM     MM         MM
     
    THIS IS CompanyMain.js for SMM STRUTO MENU MODULE
    */
    
    /** 
     * Mobile Nav
     * 
     * Hubspot Standard Toggle Menu
     */

function loadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("smm-transport").innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.open("GET","http://struto-co.hs-sites.com/smm-test-editor",true);
    xmlhttp.send();
}

function menuOnRizeResponse() {
    
    var widthLogoWrap = 300;
    var MenuWrap = 1068;
    var MenuAndLogo = 0;
    var winSize = 0;
        
    MenuAndLogo = widthLogoWrap + MenuWrap;
    firstWinSize = MenuAndLogo;
    secondWinSize = firstWinSize - 100;
    thirdWinSize = secondWinSize - 100;
    fourthWinSize = thirdWinSize - 100;
    fifthWinSize = fourthWinSize - 100;
    
    var firstLastItem = window.matchMedia("(max-width: " + firstWinSize + "px)");
                if (firstLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(2)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-a");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(2)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(2)").show();
                    $("li.smm-inner-menu-item-a").remove();
                }
            
    var secondLastItem = window.matchMedia("(max-width: " + secondWinSize + "px)");
                if (secondLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(3)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-b");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(3)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(3)").show();
                    $("li.smm-inner-menu-item-b").remove();
                }
                
    var thirdLastItem = window.matchMedia("(max-width: " + thirdWinSize + "px)");
                if (thirdLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(4)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-c");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(4)").hide();
                
                    
                } else {
                    $(".smm-target-menu-item:nth-last-child(4)").show();
                    $("li.smm-inner-menu-item-c").remove();
                }
            
    var fourthLastItem = window.matchMedia("(max-width: " + fourthWinSize + "px)");
                if (fourthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(5)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-d");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(5)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(5)").show();
                    $("li.smm-inner-menu-item-d").remove();
                }
    
    var fifthLastItem = window.matchMedia("(max-width: " + fifthWinSize + "px)");
                if (fifthLastItem.matches){
    
                    //Append Menu while window resizing
                   $(".smm-target-menu-item:nth-last-child(6)").clone().prependTo(".smm-bucket");
                   $("ul.smm-bucket > li").removeClass("hs-menu-depth-1 smm-target-menu-item");
                   $("ul.smm-bucket > li:first-child").addClass("hs-menu-depth-2 smm-inner-menu-item-e");
                   
                //Hide cloned menu item on ul level 1
                $(".smm-target-menu-item:nth-last-child(6)").hide();
                   
                } else {
                    $(".smm-target-menu-item:nth-last-child(6)").show();
                    $("li.smm-inner-menu-item-e").remove();
                } 
        
}
         
 
    
$(function() {
    
    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><span></span><i></i></a>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after('<a class="child-trigger"><span></span></a>');
    $('a.mobile-trigger').click(function() {
        $(this).next('.custom-menu-primary .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
    });

    $('a.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    
     //Add classes for ease manupulation of menu mecanism    
    $(".smm-desktop-menu .hs-menu-wrapper.hs-menu-flow-horizontal>ul").addClass("smm-target-menu");
    $("ul.smm-target-menu > li.hs-menu-depth-1").addClass("smm-target-menu-item");
    $(".smm-target-menu-item:last > ul").addClass("smm-bucket");


    //Onload menu
    menuOnRizeResponse();
    
    //Every thing desktop otherwise mobile
    $(window).on('load resize', function () {
        
        //Resize menu
        menuOnRizeResponse();
       
    });
     
    setTimeout(function() { $(".smm-master-header").show(); }, 500 );
    loadXMLDoc();
      
    $(window).on('load resize', function () {      
        //Auto height on mobile menu dropdown 
        var wHeight = $(window).height();
        wHeight -= 60;
        $('.smm-mobile-menu .hs-menu-wrapper ul:first-child').css({
            'height' : wHeight + 'px'    
        });
    });
    
    $('<li class="hs-menu-item hs-menu-depth-1 smm-item-close"><a href="javascript:;">EXIT X</a></li>').appendTo('.smm-mobile-menu .hs-menu-wrapper ul:first-child');
        
    $('.smm-item-close > a, .smm-mobile-menu .hs-menu-wrapper ul:first-child').click(function() { 
        $(".custom-menu-primary .hs-menu-wrapper").slideToggle(250);  
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        
        return false;
    });
    
    var autoDropScreen = window.matchMedia("(min-width: 768px)");
            if (autoDropScreen.matches){
                //Fall Back Auto Drop
                var widthLogoWrap = $(".smm-logo-wrapper").width();                
                    widthLogoWrap += 20;     
                var totalWidth = 0;
                    $('.smm-target-menu-item').each(function(index) {
                        totalWidth += parseInt($(this).width(), 10);
                    });  
                var MenuWrap = totalWidth + $(".smm-right-corner").width();
                
                /***** Hide Header on on scroll down *******************************************************/
                /*******************************************************************************************/
                var didScroll;
                var lastScrollTop = 0;
                var delta = 5;
                var navbarHeight = $('.smm-master-header').outerHeight();
                
                $(window).scroll(function(event){
                    didScroll = true;
                });
                
                setInterval(function() {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                }, 250);
                
                function hasScrolled() {
                    var st = $(this).scrollTop();
                    
                    // Make sure they scroll more than delta
                    if(Math.abs(lastScrollTop - st) <= delta)
                        return;
                    
                    // If they scrolled down and are past the navbar, add class .nav-up.
                    // This is necessary so you never see what is "behind" the navbar.
                    if (st > lastScrollTop && st > navbarHeight){
                        // Scroll Down
                       // $('.smm-master-header').slideUp(200);
                        $('.smm-master-header').removeClass("nav-down").addClass("nav-up");             
                    } else {
                        // Scroll Up
                        if(st + $(window).height() < $(document).height()) {
                           
                            $('.smm-master-header').addClass("nav-down").removeClass("nav-up");
                           //$('.smm-master-header').slideDown();
                        }
                    }
                    
                    lastScrollTop = st;
                }
            }
         
    
    $(".smm-footer-script").parentsUntil(".footer-container").hide();
       
});
