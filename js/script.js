// var 

var speed = "500";
var action = "click";

$(document).ready(function(){
    $('li.q').on(action ,function(){
        $(this).next()
            .slideToggle(speed)
                .siblings('li.a').slideUp();
        
        
        // find active class
        var current = $(this).children('i');
        
        $('i').not(current).removeClass('active');
        
        current.toggleClass('active');
        
    });
});