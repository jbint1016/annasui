$(document).ready(function(){
    carouselSlider(".decorCarousel",565,130,5,1);
    carouselSlider(".reviewCarousel",345,20,5,1);
    carouselSlider(".collectionCarousel",565,20,3,1);
    popupControl();
    menuControl();
    sortPopup();
    cartPanel();
    forgetContainer();
    justToggle("footer > div div:nth-of-type(2) h2");
});
function popupControl(){
    var currentPanel = null;
    $(".openBtn").click(function(){
        currentPanel = "#" + $(this).attr("data-popup");
        $("[id$='Popup']").removeClass("active");
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(this).closest("div").removeClass("active");
    });
}
function menuControl(){
    var currentMenu = null;
    var currentStat = false;
    $("header nav > button").click(function(){
        currentStat = !currentStat;
        if(currentStat == true){
            $(this).text("close");
            $("#menuPopup").addClass("active");
        }else{
            $(this).text("menu");
            $("#menuPopup").removeClass("active");
        }
    });
    
    $("header nav > div:first-of-type ul > li").click(function(){
        currentMenu = "#" + $(this).attr("data-menu");
        $(".gnbPanel").removeClass("active");
        $(".gnbPanel").parent().addClass("active");
        $(currentMenu).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(".gnbPanel").parent().removeClass("active");
        $(currentMenu).removeClass("active");
    });
}
function sortPopup(){
    var currentVal = '';
    $("#sortPopup div label").click(function(){
        currentVal = $(this).text();
        $(".listContainer div div:first-of-type input[type='button']").val(currentVal);
    });
}
function carouselSlider(target,slideW,slideM,maxVal,minVal){
    $(target).bxSlider({
        maxSlides: maxVal,
        minSlides: minVal,
        slideWidth: slideW,
        slideMargin: slideM,
        moveSlides: 1,
        mode: 'horizontal',
        speed: 750,
        startSlide: 0,
        randomStart: false,
        infiniteLoop: true,
        hideControlOnEnd: false,
        controls:true
    });
}
function cartPanel(){
    $(".removeBtn").click(function(){
        $("#haveBox").removeClass("active");
        $("#emptyBox").addClass("active");
    });
}

function forgetContainer(){
    $(".removeBtn").click(function(){
        $("#stayBox").removeClass("active");
        $("#resetBox").addClass("active");
    });
}
function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    })
}


