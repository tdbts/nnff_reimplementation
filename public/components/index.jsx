var	$ = $ || window.jQuery, 
	React = require('react'), 
	NnffWebpage = require('./NnffWebpage');

$(document).ready(function() {

	React.render(<NnffWebpage />, document.getElementById('content_wrapper'));

}); 