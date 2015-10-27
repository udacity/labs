function testEvent() {
	window.dispatchEvent(new CustomEvent('ud-test', {'detail': 'passed'}));
	console.log('You got it!');
};