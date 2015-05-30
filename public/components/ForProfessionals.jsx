var React = require('react'), 
	NNFFHeader = require('./NNFFHeader');

var ForProfessionals = React.createClass({
	render: function () {
		return (
			<div id="for_professionals_page_container" className="fullHeightWidth">
				<NNFFHeader headerName="for_professionals" headerText="For Professionals" />
			</div>			
		);
	}
});

module.exports = ForProfessionals;
