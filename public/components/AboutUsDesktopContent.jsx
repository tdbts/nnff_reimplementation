var React = require('react'), 
	NNFFFounderThumbnailsHeader = require('./NNFFFounderThumbnailsHeader'), 
	NNFFFounderThumbnail = require('./NNFFFounderThumbnail'), 
	AboutUsWelcome = require('./AboutUsWelcome'), 
	AboutUsMission = require('./AboutUsMission'), 
	AboutUsNews = require('./AboutUsNews');	

var AboutUsDesktopContent = React.createClass({
	render: function () {
		return (
			<div id="about_us_content_row" className="row hidden-xs hidden-sm">
				<div className="col-md-4 col-lg-3">
					<div id="nnff_founder_thumbnails_container">	
						<NNFFFounderThumbnailsHeader />
						<NNFFFounderThumbnail imageSource="/images/jackie-new-brand.jpg" founderName="Jacqueline Roemmele" storyUrl="#" emailLink="#" />
						<NNFFFounderThumbnail imageSource="/images/donna_batdorff_img.jpg" founderName="Donna Batdorff" storyUrl="#" emailLink="#" />
					</div>
				</div>
				<div className="col-md-8 col-lg-9">
					<AboutUsWelcome />
					<AboutUsMission />
					<AboutUsNews />
				</div>
			</div>			
		);
	}
});

module.exports = AboutUsDesktopContent;
