var React = require('react');

var TextColumn = React.createClass({
	render: function () {
		return (
			<div id={this.props.attributeBase + "_column"} className="column">
				<div className="glyphicon_container">
					<span id={this.props.attributeBase + "_column_glyphicon"} className={"welcome_column_glyphicon fa fa-3x fa-" + this.props.glyphiconStr}></span>
				</div>
				<div className="column_title_container">
					<h5 className="column_title">&#8226; {this.props.columnTitle} &#8226;</h5>
				</div>
				<div className="column_text_container">
					<p className="column_text">{this.props.columnText}</p>
				</div>
			</div>			
		);
	}
});

module.exports = TextColumn;
