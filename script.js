$("img").hide();
$(".reset").hide();

$(".stay").click(function() {
    $(".movie").slideDown();
    $(".bed").slideDown();
    $(".pick").text("Yay to staying in! Now, would you rather watch a movie or go to bed? *Click the image*");
    $(".concert").hide();
    $(".stay").hide();
    $("body").css("background-color", "orange");
    $(".reset").show();



});
$(".concert").click(function() {
    $(".kehlani").show();
    $(".jessie").show();
    $(".pick").text("Yay to concerts! Which concert would you like to attend? Kehlani or Jessie Reyez? *Click the image*");
    $(".stay").hide();
    $(".concert").hide();
    $("body").css("background-color", "lightpink");
    $(".reset").show();

});
$(".kehlani").click(function() {
    $(".jessie").hide();
    $(".pick").text("Enjoy the concert!");
    $(".reset").show();


});

$(".jessie").click(function() {
    $(".kehlani").hide();
    $(".pick").text("Enjoy the concert!");
    $(".reset").show();
});


$(".movie").click(function() {
    $(".bed").hide();
    $(".pick").text("Have fun watching the movie and staying in!");
    $(".reset").show();
});

$(".bed").click(function() {
    $(".movie").hide();
    $(".pick").text("Have a good night!");
    $(".reset").show();
});

$(".reset").click(function() {
    $(".stay").slideDown();
    $(".concert").slideDown();
    $("img").hide();
    $(".reset").hide();
    $("body").css("background-color", "lightblue");


});