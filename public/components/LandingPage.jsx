var React = require('react'), 
	NNFFJumbotron = require('./NNFFJumbotron'), 
	CommonNameBanner = require('./CommonNameBanner'), 
	WelcomeRow = require('./WelcomeRow'),
	MailingListInvitation = require('./MailingListInvitation'),  
	FeaturedArticles = require('./FeaturedArticles'), 
	Footer = require('./Footer');

var LandingPage = React.createClass({
	render: function () {
		return (
			<div id="landing_page_container" className="fullHeightWidth">
				<NNFFJumbotron />
				<CommonNameBanner />
				<WelcomeRow />
				<MailingListInvitation />
				<FeaturedArticles />
				<Footer />
			</div>
		);
	}
});

module.exports = LandingPage;
