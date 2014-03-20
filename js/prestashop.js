$(document).ready(function(){
	$('#panier').hoverIntent(function(){
		$(this).find('#panier_content').slideDown();
	},function(){
		$(this).find('#panier_content').slideUp('fast');
	});
});