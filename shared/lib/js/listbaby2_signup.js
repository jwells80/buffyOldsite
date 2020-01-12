$(function(){
	$('#emailsignup form').submit(function(e){
		var the_form = $(this);
		if(! the_form.data('modal_initialized'))
		{
			var modal_div = $('<div class="lb_modal"></div>');
			var lb_iframe = $('<iframe name="email_signup_iframe" width="560" height="560">Iframe support required</iframe>');
			modal_div.insertAfter(the_form);
			modal_div.prepend(lb_iframe);
			modal_div.dialog({
					autoOpen: false,
					modal:true,
					width:"600px",
					height:550
			});
			the_form.data('modal_div', modal_div);
			the_form.data('lb_iframe',lb_iframe);
			the_form.data('modal_initialized', true);
			the_form.attr('target','email_signup_iframe');
		}
		$('div.lb_modal').dialog('open');
	});
});
