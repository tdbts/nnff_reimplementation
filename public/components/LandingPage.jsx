var React = require('react'), 
	NNFFJumbotron = require('./NNFFJumbotron'), 
	CommonNameBanner = require('./CommonNameBanner');

var LandingPage = React.createClass({
	render: function () {
		return (
			<div id="landing_page_container" className="fullHeightWidth">
				<NNFFJumbotron />
				<CommonNameBanner />
			</div>
		);
	}
});

module.exports = LandingPage;
