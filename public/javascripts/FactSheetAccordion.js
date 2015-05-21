var React = require('react'), 
	AccordionPanel = require('./AccordionPanel');

var FactSheetAccordion = React.createClass({displayName: "FactSheetAccordion",
	getID: function (type, addition) {
		return "panel_" + type + "_" + addition;
	}, 

	getPanelHeadingID: function (addition) {
		return this.getID("heading", addition);
	}, 

	getPanelCollapseID: function (addition) {
		return this.getID("collapse", addition);
	}, 

	render: function () {
		return (
			React.createElement("div", {className: "panel-group", id: this.props.accordionID, role: "tablist", "aria-multiselectable": "true"}, 
				React.createElement(AccordionPanel, {panelType: "info", headingID: this.getPanelHeadingID("1"), accordionID: this.props.accordionID, collapseID: this.getPanelCollapseID("1"), expandedByDefault: "true", headingText: "Panel Heading One", bodyContent: "This is the content for panel one."}), 
				React.createElement(AccordionPanel, {panelType: "info", headingID: this.getPanelHeadingID("2"), accordionID: this.props.accordionID, collapseID: this.getPanelCollapseID("2"), headingText: "Panel Heading Two", bodyContent: "This is the content for panel two."})
			)
		);
	}
});

module.exports = FactSheetAccordion;


/* 

// PROPS: 
- panelType 
- headingID 
- accordionID 
- collapseID 
- expandedByDefault
- headingText 
- bodyContent

*/
