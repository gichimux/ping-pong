//user interface
$(document).ready(function(){
 $("form#userInput").submit(function(event){
   event.preventDefault();
   var pingpong= $("#result").val();
   var result= userInput(pingpong);
 result.forEach(function(element){
   $("#reslut").append("<li>"+element);
 })
 });
});
//business logic
function userInput(pingpong){
 var result=[];
 for(i=1; i<=pingpong;i++){
   if (i%15===0){
     result.push("ping pong");
   }
else if (i%5===0){
   result.push("pong");
 }else if (i%3===0){
   result.push("ping");
 }
  else{
    result.push(i);
  }
}
return result;
}
