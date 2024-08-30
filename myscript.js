$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("#p1").click(function() {
		$(".disappear").toggle();
	});
	$("#texttoggler").hover(function() {
		$("#thistext").toggle();
	});
});
