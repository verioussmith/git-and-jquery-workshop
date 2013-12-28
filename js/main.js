// console.log("main.js is loaded");
$(document).ready(function(){
	//Code here.
	
	$("img").on("dblclick", function(){
		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();

	})

	// $("img").click(function(){
	// 	//code here
	// 	$("img").width(200);
	// });

});