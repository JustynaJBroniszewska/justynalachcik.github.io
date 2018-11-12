$(document).ready(function(){
    $("#show_more_btn").click(function(){
        $("#my_opinion").slideToggle("slow", function() {});
    }).delay(500);
});


$(document).ready(function(){
    $("#read_more_btn").click(function(){
        $(".my_opinion").slideToggle("slow", function() {});
    }).delay(500);
});
