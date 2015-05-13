var React = require('react'), 
	// Carousel = require('./Carousel');
	NNFFJumbotron = require('./NNFFJumbotron');

var NnffWebpage = React.createClass({displayName: "NnffWebpage",
	render: function () {
		return (
			React.createElement(NNFFJumbotron, null)
		);
	}
});

module.exports = NnffWebpage;
