var React = require('react'), 
	AccordionPanel = require('./AccordionPanel'), 
	AccordionBodyWhatIs = require('./AccordionBodyWhatIs'), 
	AccordionBodyStatistics = require('./AccordionBodyStatistics'), 
	AccordionBodyBacteria = require('./AccordionBodyBacteria'), 
	AccordionBodySymptoms = require('./AccordionBodySymptoms'), 
	AccordionBodyOpportunities = require('./AccordionBodyOpportunities');

var FactSheetAccordion = React.createClass({
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
			<div className="panel-group" id={this.props.accordionID} role="tablist" aria-multiselectable="true">
				<AccordionPanel panelType="info" headingID={this.getPanelHeadingID("what_is")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("what_is")} expandedByDefault="true" headingText="What is NF?" bodyContent={<AccordionBodyWhatIs />} /> 
				<AccordionPanel panelType="info" headingID={this.getPanelHeadingID("statistics")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("statistics")} headingText="What are the statistics of NF?" bodyContent={<AccordionBodyStatistics />} /> 
				<AccordionPanel panelType="info" headingID={this.getPanelHeadingID("bacteria")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("bacteria")} headingText="Bacteria that cause NF" bodyContent={<AccordionBodyBacteria />} />
				<AccordionPanel panelType="info" headingID={this.getPanelHeadingID("symptoms")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("symptoms")} headingText="Symptoms of NF" bodyContent={<AccordionBodySymptoms />} />
				<AccordionPanel panelType="info" headingID={this.getPanelHeadingID("opportunities")} accordionID={this.props.accordionID} collapseID={this.getPanelCollapseID("opportunities")} headingText="Opportunities for Infection" bodyContent={<AccordionBodyOpportunities />} />
			</div>
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
