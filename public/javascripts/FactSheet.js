var React = require('react'), 
	FactSheetHeader = require('./FactSheetHeader'), 
	FactSheetAccordion = require('./FactSheetAccordion'), 
	Footer = require('./Footer');

var FactSheet = React.createClass({displayName: "FactSheet",
	render: function () {
		return (
			React.createElement("div", {id: "faqs_page_container", className: "fullHeightWidth"}, 
				React.createElement(FactSheetHeader, null), 
				React.createElement("div", {id: "fact_sheet_accordion_container", className: "container"}, 
					React.createElement(FactSheetAccordion, {accordionID: "factSheetAccordion"})
				), 
				React.createElement(Footer, null)
			)
		);
	}
});

module.exports = FactSheet;
