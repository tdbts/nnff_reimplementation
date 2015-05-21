var React = require('react');

var AccordionPanelBody = React.createClass({displayName: "AccordionPanelBody",
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			React.createElement("div", {id: this.props.collapseID, className: "panel-collapse collapse" + (this.props.expandedByDefault ? " in" : ""), role: "tabpanel", "aria-labelledby": this.props.headingID}, 
				React.createElement("div", {className: "panel-body"}, 
					this.props.bodyContent
				)
			)			
		);
	}
});

module.exports = AccordionPanelBody;
