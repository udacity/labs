$('.labs-list-item-content').each(function(i, elem){
	$(elem).click(function(e){
		if (e.target.tagName !== 'A' && $(elem).attr('data-href') !== '#') {
			window.open($(elem).attr('data-href'), '_blank');
		}
	});
});
