//user interface
$(document).ready(function() {
 $("form#userInput").submit(function (event) {
   $("#output ul").empty();
   var aNumber = parseInt($("input").val());


//business logic
 for(var i = 1; i<= aNumber; i += 1) {
   if (i%15===0) {
     $("#result ul").append('<li>' + "pingPong" + '</li>');
   }
else if (i%5===0) {
      $("#result ul").append('<li>' + "pong" + '</li)');
   }
else if (i%3===0){
      $("#result ul").append('<li>' + "ping" + '</li>');
 }
  else{
       $("#result ul" ).append('<li>' + i + '</li>');
  }
}
$("form#userInput")[0].reset();

event.preventDefault();
});
