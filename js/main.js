$(document).ready(function () {
    sliderArrows();
    hideCaption();
    menuShowHide();
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
    let allFigures = document.querySelectorAll("#main-section figure");
        
    for (let i=0; i<allFigures.length; i++){
        allFigures[i].addEventListener("mouseover", show);
        allFigures[i].addEventListener("mouseout", hide);
    }
    
    function show(){        
        this.querySelector(".caption").style.visibility = "hidden";
    }
    
    function hide(){
        this.querySelector(".caption").style.visibility = "visible";
    }
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
