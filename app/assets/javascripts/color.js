
$( document ).on( "mousemove", function( event ) {
    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var $pageX = parseInt(event.pageX / $width,10);
    var $pageY = parseInt(event.pageY / $height,10);
  $( ".color" ).text( "pageX: " + $pageX + ", pageY: " + $pageY );
  $(".color").css("background-color", "rgb("+$pageX+","+$pageY+","+$pageX+")");
  $(".color").css("background", 'url('bike-wheel.png')');
});