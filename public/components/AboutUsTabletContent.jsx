var React = require('react'), 
	NNFFFounderThumbnailsHeader = require('./NNFFFounderThumbnailsHeader'), 
	NNFFFounderThumbnail = require('./NNFFFounderThumbnail'), 
	AboutUsWelcome = require('./AboutUsWelcome'), 
	AboutUsMission = require('./AboutUsMission'), 
	AboutUsNews = require('./AboutUsNews');	

var AboutUsTabletContent = React.createClass({
	render: function () {
		return (
			<div id="about_us_content_row" className="row visible-sm-inline-block">
				<div className="col-sm-12">
					<NNFFFounderThumbnailsHeader />
				</div>
				<div className="col-sm-6">
					<NNFFFounderThumbnail imageSource="/images/jackie-new-brand.jpg" founderName="Jacqueline Roemmele" storyUrl="#" emailLink="#" />
				</div>
				<div className="col-sm-6">
					<NNFFFounderThumbnail imageSource="/images/donna_batdorff_img.jpg" founderName="Donna Batdorff" storyUrl="#" emailLink="#" />
				</div>
				<AboutUsWelcome />
				<AboutUsMission />
				<AboutUsNews />						
			</div>			
		);
	}
});

module.exports = AboutUsTabletContent;
