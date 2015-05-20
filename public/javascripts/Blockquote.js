var React = require('react');

var Blockquote = React.createClass({displayName: "Blockquote",
	render: function () {
		return (
			React.createElement("blockquote", null, 
				React.createElement("p", {className: "blockquote_text"}, this.props.quoteText), 
				React.createElement("footer", null, this.props.footerText)
			)
		);
	}
});

module.exports = Blockquote;
