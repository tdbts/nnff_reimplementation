var	$ = $ || window.jQuery, 
	React = require('react'), 
	NnffWebpage = require('./NnffWebpage');

$(document).ready(function() {

	React.render(React.createElement(NnffWebpage, null), document.getElementById('content_wrapper'));

}); 