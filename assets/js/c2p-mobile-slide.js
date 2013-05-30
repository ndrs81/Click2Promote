$(document).ready(function(){ 
		$("#nav-slide-mobile").hide();
		$(".show_hide").show();
	 
		$('.show_hide').click(function(){
		$("#nav-slide-mobile").slideToggle();
		});
});