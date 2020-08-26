$('.signup').hide();
$('.fa-eye').hide();
$('.signin').show();

$('#sign').click(function(){
   $('.signup').show();
   $('.signin').hide();
});
$('#login').click(function(){
   $('.signup').hide();
   $('.signin').show();
});
$('.pwd').click(function(){
   $('.fa-eye').show();
});

$(".fa-eye").click(function() {
   $(this).toggleClass("fa-eye fa-eye-slash");
   // var input = $($(this).attr("toggle"));
   var input = $('.pwd');
   if (input.attr("type") == "password") {
     input.attr("type", "text");
   } else {
     input.attr("type", "password");
   }
 });