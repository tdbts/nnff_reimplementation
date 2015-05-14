var React = require('react'), 
	NNFFJumbotron = require('./NNFFJumbotron'), 
	CommonNameBanner = require('./CommonNameBanner'), 
	WelcomeRow = require('./WelcomeRow');

var LandingPage = React.createClass({
	render: function () {
		return (
			<div id="landing_page_container" className="fullHeightWidth">
				<NNFFJumbotron />
				<CommonNameBanner />
				<WelcomeRow />
			</div>
		);
	}
});

module.exports = LandingPage;
