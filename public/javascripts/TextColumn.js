var React = require('react');

var TextColumn = React.createClass({displayName: "TextColumn",
	render: function () {
		return (
			React.createElement("div", {id: this.props.attributeBase + "_column", className: "column"}, 
				React.createElement("div", {className: "glyphicon_container"}, 
					React.createElement("span", {id: this.props.attributeBase + "_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-" + this.props.glyphiconStr})
				), 
				React.createElement("div", {className: "column_title_container"}, 
					React.createElement("h5", {className: "column_title"}, "• ", this.props.columnTitle, " •")
				), 
				React.createElement("div", {className: "column_text_container"}, 
					React.createElement("p", {className: "column_text"}, this.props.columnText)
				)
			)			
		);
	}
});

module.exports = TextColumn;
