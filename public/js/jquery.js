$(document).ready(function(){
    $("#new-camp-btn").click(function(){
        $("#new-camp").slideToggle("slow");
    });

    $("#camp-btn").click(function(){
        $("#data").slideToggle("slow");
    });

    $( "#camp-icon" ).click(function() {
        $( "#new-camp-btn" ).scroll(function() {
            $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
        });
    });
});
