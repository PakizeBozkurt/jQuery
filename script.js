$("h1").addClass("big-title margin-50");

$("button").text("Touch!");


    $("button").click(function() {
        $("h1").css("color", "green");
    });

    $("input").keypress(function(event) {
       $("h1").text(event.key);
    });

    $("h1").on("mouseover", function() {
        $("h1").css("color", "aqua");
    });

    $("button").on("click", function() {
        $("button").slideToggle();
    })

    $("button").on("click", function() {
        $("h1").slideUp().slideDown().animate({opacity: 0.5});
    });
