var React = require('react'), 
	NNFFHeader = require('./NNFFHeader'), 
	ForProfessionalsText = require('./ForProfessionalsText'), 
	ForProfessionalsTable = require('./ForProfessionalsTable'), 
	Footer = require('./Footer');

var ForProfessionals = React.createClass({
	render: function () {
		return (
			<div id="for_professionals_page_container" className="fullHeightWidth">
				<NNFFHeader headerName="for_professionals" headerText="For Medical Professionals" />
				<ForProfessionalsText />
				<ForProfessionalsTable />
				<Footer />
			</div>
		);
	}
});

module.exports = ForProfessionals;
