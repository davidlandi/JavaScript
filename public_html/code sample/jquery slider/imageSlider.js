/* 
 * Developed by david landi 2014
 * this is a image slider that fades images 
 */


sliderFirst = 1;
sliderNext = 2;

$(document).ready(function(){
    $("#slider > img#1").fadeIn(800);
    startSlider();
});

function startSlider(){
    count = $("#slider > img").size();
    
    loop = setInterval(function(){
        if(sliderNext > count){
            sliderNext = 1;
            sliderInt = 1;
        }
        $("#slider > img").fadeOut(800);
        $("#slider > img#" + sliderNext).fadeIn(800);
        
        sliderFirst = sliderNext;
        sliderNext = sliderNext + 1;
    },5000);

}