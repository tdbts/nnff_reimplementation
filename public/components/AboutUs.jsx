var React = require('react'), 
	NNFFHeader = require('./NNFFHeader'), 
	AboutUsDesktopContent = require('./AboutUsDesktopContent'), 
	AboutUsTabletContent = require('./AboutUsTabletContent'), 
	AboutUsPhoneContent = require('./AboutUsPhoneContent'), 
	AboutUsTable = require('./AboutUsTable'),
	AboutUsOutreach = require('./AboutUsOutreach'),  
	Footer = require('./Footer');

var AboutUs = React.createClass({
	render: function () {
		return (
			<div id="about_us_page_container">
				<NNFFHeader headerName="about_us" headerText="About Us" />
				<div id="about_us_content_container" className="container">
					<AboutUsDesktopContent />
					<AboutUsTabletContent />
					<AboutUsPhoneContent />
					<AboutUsTable />
					<AboutUsOutreach />
				</div>
				<Footer />
			</div>
		);
	}
});

module.exports = AboutUs;
