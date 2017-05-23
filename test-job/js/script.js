$(document).ready(function(){

	$("#tabs a").click(function(e){
	    e.preventDefault();
	    $(this).tab('show');
	    return false;
	});

	$('.table-pagination a').click(function(e){
		e.preventDefault();
		if($(this).hasClass('pag-active')){
		} else {
			$(this).addClass('pag-active').siblings().removeClass('pag-active');
			var tr_v = $(this).parents('.tab-pane').find('tr.visible');
			var tr_inv = $(this).parents('.tab-pane').find('tr.invisible');
			tr_v.removeClass('visible').addClass('invisible');
			tr_inv.removeClass('invisible').addClass('visible');
		}
	});

});