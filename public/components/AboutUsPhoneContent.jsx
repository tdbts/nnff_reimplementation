var React = require('react'), 
	NNFFFounderThumbnailsHeader = require('./NNFFFounderThumbnailsHeader'), 
	NNFFFounderThumbnail = require('./NNFFFounderThumbnail'), 
	AboutUsWelcome = require('./AboutUsWelcome'), 
	AboutUsMission = require('./AboutUsMission'), 
	AboutUsNews = require('./AboutUsNews');	

var AboutUsPhoneContent = React.createClass({
	render: function () {
		return (
			<div id="about_us_content_row" className="visible-xs-inline-block">
				<AboutUsWelcome />
				<NNFFFounderThumbnailsHeader />
				<div className="row">
					<div className="small_screen_thumbnail_image_container">
						<NNFFFounderThumbnail imageSource="/images/jackie-new-brand.jpg" founderName="Jacqueline Roemmele" storyUrl="#" emailLink="#" />
					</div>
					<div className="small_screen_thumbnail_image_container">
						<NNFFFounderThumbnail imageSource="/images/donna_batdorff_img.jpg" founderName="Donna Batdorff" storyUrl="#" emailLink="#" />
					</div>
				</div>
				<AboutUsMission />
				<AboutUsNews />					
			</div>			
		);
	}
});

module.exports = AboutUsPhoneContent;
