// console.log("main.js is loaded");
$(document).ready(function(){
	//Code here.
	
	$("li").on("click", function(){

		if ($(this).hasClass("done")){
			$(this).removeClass("done");
		} else {
			$(this).addClass("done");
		}


		

	});



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
I was here.
