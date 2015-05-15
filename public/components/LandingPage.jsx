var React = require('react'), 
	NNFFJumbotron = require('./NNFFJumbotron'), 
	CommonNameBanner = require('./CommonNameBanner'), 
	WelcomeRow = require('./WelcomeRow'), 
	FeaturedArticles = require('./FeaturedArticles');

var LandingPage = React.createClass({
	render: function () {
		return (
			<div id="landing_page_container" className="fullHeightWidth">
				<NNFFJumbotron />
				<CommonNameBanner />
				<WelcomeRow />
				<FeaturedArticles />
			</div>
		);
	}
});

module.exports = LandingPage;
