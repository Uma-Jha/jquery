function attachHandlers(about){
	$('#showdata a').on('click', function(){
		var path = $(this).parent();
		$(this).remove();
		path.find('p').text(about);
	});
}
$(document).ready(function(){
	$('form').on("submit", function(){
		var fname = $("input[name='fname']").val();
		var lname = $('input[name="lname"]').val();
		var about = $('textarea[name="describe"]').val();
		$('#showdata').append("<div class='cards'><p>"+fname+" "+lname+"</p><a target='#'>Click for description!</a></div>");
		attachHandlers(about);
		return false
	});

	$("#reset").on('click', function(){
		$("input[name='fname']").val("");
		$('input[name="lname"]').val("");
		$('textarea[name="describe"]').val("");
	});

});