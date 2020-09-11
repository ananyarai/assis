$(document).ready(function(){
   $('#signup_btn').click(function(){
      $('.main').animate({left: '22.5%'},500);
      $('.main').animate({left: '30%'},500);
      $('.loginform').css("visibility","hidden");
      $('.loginform').animate({left: '40%'},1000);

      
      $('.signupform').css("visibility","visible");
      
      $('.signupform').animate({left:'38.5%'},500);
      $('.signupform').animate({left:'44%'},500);
      
   }); 
   $('#login_btn').click(function(){
       $('.main').animate({left: '78%'},500);
       $('.main').animate({left: '70.5%'},500);
       $('.loginform').css("visibility","visible");

       $('.loginform').animate({left: '82%'},500);
       $('.loginform').animate({left: '71.5%'},500);
       
       $('.signupform').css("visibility","hidden");
       $('.signupform').animate({left: "73%"},500);
       
   });
});

 