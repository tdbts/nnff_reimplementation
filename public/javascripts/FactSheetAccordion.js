var React = require('react'), 
	AccordionPanel = require('./AccordionPanel'), 
	AccordionBodyWhatIs = require('./AccordionBodyWhatIs'), 
	AccordionBodyStatistics = require('./AccordionBodyStatistics'), 
	AccordionBodyBacteria = require('./AccordionBodyBacteria');

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
				React.createElement(AccordionPanel, {panelType: "info", headingID: this.getPanelHeadingID("what_is"), accordionID: this.props.accordionID, collapseID: this.getPanelCollapseID("what_is"), expandedByDefault: "true", headingText: "What is NF?", bodyContent: React.createElement(AccordionBodyWhatIs, null)}), 
				React.createElement(AccordionPanel, {panelType: "info", headingID: this.getPanelHeadingID("statistics"), accordionID: this.props.accordionID, collapseID: this.getPanelCollapseID("statistics"), headingText: "What are the statistics of NF?", bodyContent: React.createElement(AccordionBodyStatistics, null)}), 
				React.createElement(AccordionPanel, {panelType: "info", headingID: this.getPanelHeadingID("bacteria"), accordionID: this.props.accordionID, collapseID: this.getPanelCollapseID("bacteria"), headingText: "Bacteria that cause NF", bodyContent: React.createElement(AccordionBodyBacteria, null)})
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
