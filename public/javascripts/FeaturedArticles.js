var React = require('react'), 
	EmergingTreatmentPanel = require('./EmergingTreatmentPanel'), 
	BookSecondEditionPanel = require('./BookSecondEditionPanel');

var FeaturedArticles = React.createClass({displayName: "FeaturedArticles",
	render: function () {
		return (
			React.createElement("div", {id: "featured_articles_container", className: "container"}, 
				React.createElement("div", {className: "row"}, 
					React.createElement("div", {className: "col-sm-12 col-md-6"}, 
						React.createElement(EmergingTreatmentPanel, null)
					), 
					React.createElement("div", {className: "col-sm-12 col-md-6"}, 
						React.createElement(BookSecondEditionPanel, null)						
					)					
				)
			)
		);
	}
});

module.exports = FeaturedArticles;
	