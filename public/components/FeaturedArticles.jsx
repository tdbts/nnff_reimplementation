var React = require('react'), 
	EmergingTreatmentPanel = require('./EmergingTreatmentPanel');

var FeaturedArticles = React.createClass({
	render: function () {
		return (
			<div id="featured_articles_container" className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<EmergingTreatmentPanel />
					</div>
					<div className="col-sm-12 col-md-6">
						
					</div>					
				</div>
			</div>
		);
	}
});

module.exports = FeaturedArticles;
	