var React = require('react'), 
	NNFFJumbotron = require('./NNFFJumbotron'), 
	CommonNameBanner = require('./CommonNameBanner'), 
	WelcomeRow = require('./WelcomeRow'), 
	FeaturedArticles = require('./FeaturedArticles');

var LandingPage = React.createClass({displayName: "LandingPage",
	render: function () {
		return (
			React.createElement("div", {id: "landing_page_container", className: "fullHeightWidth"}, 
				React.createElement(NNFFJumbotron, null), 
				React.createElement(CommonNameBanner, null), 
				React.createElement(WelcomeRow, null), 
				React.createElement(FeaturedArticles, null)
			)
		);
	}
});

module.exports = LandingPage;
