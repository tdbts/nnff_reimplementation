var React = require('react'), 
	FactSheetHeader = require('./FactSheetHeader'), 
	FactSheetAccordion = require('./FactSheetAccordion');

var FactSheet = React.createClass({
	render: function () {
		return (
			<div id="faqs_page_container" className="fullHeightWidth">
				<FactSheetHeader />
				<div id="fact_sheet_accordion_container" className="container">
					<FactSheetAccordion accordionID="factSheetAccordion" />
				</div>
			</div>
		);
	}
});

module.exports = FactSheet;
