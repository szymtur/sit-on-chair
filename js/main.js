$(document).ready(function () {
    sliderArrows();
    hideCaption();
    fixHover();
    menuShowHide();
    scrollTop();
    scrollBottom();
});


function sliderArrows(){
    $('.slick-slider').slick({
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
    });
    
    if (/iphone|ipod|ipad|blackberry|Android|webOS|IEMobile/i.test(navigator.userAgent)){
        $('.slick-arrow').css('display', 'none');
    }
}


function hideCaption(){
    let allFigures = $("#main-section").find("figure");
    
    allFigures.mouseenter(function(){
        $(this).find(".caption").fadeOut();
    });   
        
    allFigures.mouseleave(function(){
        $(this).find(".caption").fadeIn();
    });
}

function fixHover(){
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('blur');
    });
}


function menuShowHide(){
let allVisibleLi = document.querySelectorAll(".nav>ol>li");
    
    for (let i=0; i<allVisibleLi.length; i++){
        
        allVisibleLi[i].addEventListener("mouseover", showList);
        allVisibleLi[i].addEventListener("mouseout", hideList);
    }
    
    function showList(){
        if (this.querySelector("ul") != null){
            this.querySelector("ul").style.display = "block";
        }   
    }
    
    function hideList(){
        if (this.querySelector("ul") != null) {
            this.querySelector("ul").style.display = "none"; 
        }
    }
}


function scrollTop(){
    let buttonSubmit = $('#contact').find('input[type="submit"]');
    
    buttonSubmit.on('click', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 900, 'linear');
        return false;
    })
}


function scrollBottom(){
    let buttons = $('#main-header').find('.see-more-btn');
    
    buttons.on('click', function(){
        $('html, body').animate({scrollTop: $(document).height()}, 900, 'linear');
        return false;        
    })
}