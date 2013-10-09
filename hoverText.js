$(document).ready(function () {
	  $(".race_logo").mouseenter(function(e) {
		e.preventDefault();
		$(this).find(".wrapper_toggle").css("display","block");
		$(this).find(".text_description").css("display","block");
	  }), $(".race_logo").mouseleave(function() {
		$(this).find(".wrapper_toggle").css("display","none");
		$(this).find(".text_description").css("display","none");
	  });
});