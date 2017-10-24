$(document).ready(function() {
 $('img').click(function(){
 	//$(this).hide();
 	$(this).css('visibility', 'hidden');
 });
 $('button').click(function(){
 	$('img').css('visibility', 'visible');
 });
});