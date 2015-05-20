var React = require('react');

var Blockquote = React.createClass({
	render: function () {
		return (
			<blockquote>
				<p className="blockquote_text">{this.props.quoteText}</p>
				<footer>{this.props.footerText}</footer>
			</blockquote>
		);
	}
});

module.exports = Blockquote;
