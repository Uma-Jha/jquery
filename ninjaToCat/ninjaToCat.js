$(document).ready(function(){
	$('img').click(function(){
		$(this).css('visibility', 'hidden');
		var url = ["cat2.png","cat3.png","cat4.png","ninja0.png","ninja1.png"];
		var randInt = Math.floor(Math.random()*5);
		$(this).attr("src",url[randInt]);
		$(this).css('visibility', 'visible');
	});
});
