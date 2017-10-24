$('#fadeInImage>img').hide();
$('#addClass>button').click(function(){
   $('#addClass>p').css("color", "red");
});
$('#slidePara>button').click(function(){
	$('#slidePara>p').slideToggle("slow");
});
$('#appendPara>button').click(function(){
	$('#appendPara>p').append("<b> Appended this</b>");
});
$('#hidePara>button').click(function(){
	$('#hidePara>p').hide();
});
$('#togglePara>button').click(function(){
	$('#togglePara>p').toggle();
});
$('#fadeInImage>button').click(function(){
	$('#fadeInImage>img').fadeIn();
});
$('#fadeOutImage>button').click(function(){
	$('#fadeOutImage>img').fadeOut();
});
$('#addBefore>button').click(function(){
	$('#addBefore>p').before("Newly added before");
});
$('#addAfter>button').click(function(){
	$('#addAfter>p').after("Newly added after");
});
$('#hover>button').hover(function(){
	$('#hover>p').text("Appear");
},function(){
	$('#hover>p').text();
}

);
$('#getHtml>button').click(function(){
	var htmlData = $('#getHtml').html();
	$('#getHtml>p').text(htmlData);
});
$('#showPara>p').style.visibility='hidden';
$('#showPara>button').click(function(){
	$('#showPara>p').show();
});




