var React = require('react');

var AccordionPanelHeading = React.createClass({displayName: "AccordionPanelHeading",
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			React.createElement("div", {className: "panel-heading", role: "tab", id: this.props.headingID}, 
				React.createElement("h4", {className: "panel-title"}, 
					React.createElement("a", {className: "panel_heading_anchor", "data-toggle": "collapse", "data-parent": "#" + this.props.accordionID, href: "#" + this.props.collapseID, "aria-expanded": this.props.expandedByDefault === true ? "true" : "false", "aria-controls": this.props.collapseID}, 
						this.props.headingText
					)
				)
			)			
		);
	}
});

module.exports = AccordionPanelHeading;
