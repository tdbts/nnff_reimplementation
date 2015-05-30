var React = require('react'), 
	FactSheetHeader = require('./FactSheetHeader'), 
	FactSheetAccordion = require('./FactSheetAccordion'), 
	NNFFHeader = require('./NNFFHeader'), 
	Footer = require('./Footer');

var FactSheet = React.createClass({
	render: function () {
		return (
			<div id="faqs_page_container" className="fullHeightWidth">
				<NNFFHeader headerName="faqs" headerText="Fact Sheet" />
				<div id="fact_sheet_accordion_container" className="container">
					<FactSheetAccordion accordionID="factSheetAccordion" />
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = FactSheet;
