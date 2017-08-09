jQuery(function($){
	$('.ajs-footnote>a').bind('mouseenter.ajsfn', function(event) {
		$(event.target).css({ color: 'red'});
		var noteTarget = $(event.target).attr('href');
		noteTarget = noteTarget.substring(noteTarget.lastIndexOf('_')+1);
		
		//$(event.target).css({position: 'relative', display:'inline-block'});
		var position = $(event.target).offset();
		console.log(position.top+' by '+position.left);
		$('#ajs-fn-id_'+noteTarget).css({display: 'block', position: 'absolute', top: (position.top-$(event.target).parent().outerHeight())+'px', left: (position.left+$(event.target).parent().outerWidth())+'px'});
	});
	
	$('.ajs-footnote>a').bind('mouseleave.ajsfn', function(event) {
		$(event.target).css({color: 'blue'});
		var noteTarget = $(event.target).attr('href');
		noteTarget = noteTarget.substring(noteTarget.lastIndexOf('_')+1);
		$('#ajs-fn-id_'+noteTarget).css({display: 'none'});
	});
	
	$('.ajs-footnote').css({ fontWeight: 'bold'});
});