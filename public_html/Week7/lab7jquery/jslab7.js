/* 
 * Created by David Landi 2014
 */

// function for buttons, when hover change color to blue and drop down 
$("a").mouseover(function(){
        $(this).css('color', 'red').css('background-color', 'blue').css('margin-top', '5px');
}).mouseout(function(){
        $(this).css('color', 'black').css('background-color', 'transparent').css('margin-top', '-5px');
});
// loading the different navs when clicked
$(window).load(function(){
    $("#nav1,#nav2,#nav3,#nav4").addClass('contentBox').hide();
});
// btn 1 display nav 1 hide the rest 
$('.button-color-1 a').click(function(){
    $("#nav2,#nav3,#nav4").hide(500);
    $("#nav1").show("fast");
});
// btn 2 display nav 2 hide the rest
$('.button-color-2 a').click(function(){
    $("#nav1,#nav3,#nav4").hide(500);
    $("#nav2").show("fast");
});
// btn 3 display nav 3 hide the rest
$('.button-color-3 a').click(function(){
    $("#nav1,#nav2,#nav4").hide(500);
    $("#nav3").show("fast");
});
// btn 4 display nav 4 hide the rest
$('.button-color-4 a').click(function(){
    $("#nav1,#nav2,#nav3").hide(500);
    $("#nav4").show("fast");
});
//showing all the navs 
$('.button-color-5 a').click(function(){
    $("#nav1,#nav2,#nav3,#nav4").hide()=== false;
    $("#nav1,#nav2,#nav3,#nav4").show(1000);
});

