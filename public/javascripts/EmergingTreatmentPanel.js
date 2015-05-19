var React = require('react'), 
	Panel = require('./Panel'), 
	DrCrewThumbnail = require('./DrCrewThumbnail');

var EmergingTreatmentPanel = React.createClass({displayName: "EmergingTreatmentPanel",
	getBodyContent: function () {
		return (
			React.createElement("div", {id: this.props.panelName + "_body_content"}, 
				React.createElement("p", {id: "emerging_treatment_panel_lead", className: "lead"}, React.createElement("strong", null, "The National Necrotizing Fasciitis Foundation Launches Referral Initiative to Provide New Life-Saving Treatment to Victims of \"Flesh-Eating\" Disease")), 
				React.createElement("p", {className: "article_text"}, React.createElement("span", {id: "pre_thumbnail_text_span", className: "article_text_span"}, "June 2, 2014 - URGENT In this program, the NNFF is connecting patients and their families from all over the United States and other countries with Dr. John Crew, director of the Advanced Wound CareCenter at Seton Medical Center in Daly City, California.  ")), React.createElement(DrCrewThumbnail, null), React.createElement("p", {className: "article_text"}, React.createElement("span", {id: "post_thumbnail_text_span", className: "article_text_span"}, "Dr. Crew then oversees the care of the patients, using a ground-breaking new treatment that he has discovered and developed for this rapidly spreading life-threatening disease.  "), 
				React.createElement("span", {id: "post_break_text_span", className: "article_text_span"}, "The new treatment and the referral initiative are crucial advances in the fight against this deadly threat, says Jacqueline Roemmele, executive director of the NNFF. Roemmele co-founded the organization in 1997 with fellow survivor, Donna Batdorff of Grand Rapids, Michigan, after her own years-long struggle with the disease and its aftermath, to offer information and emotional support to other patients and their families. But now, thanks to Dr. Crew's work, the NNFF can also direct patients to a treatment that dramatically improves outcomes, said Roemmele. \"I'm heartbroken to think of the thousands of cases in the past where I could only offer emotional support,\" she said. \"But now there is real hope. ", React.createElement("strong", null, "People are not only living, but they also are not losing any limbs at all. The world should sit up and take notice"), ".\""))
			)
		);	
	}, 

	render: function () {
		return (
			React.createElement(Panel, {panelName: "emerging_treatment", headingText: "Emergency Treatment Available Now", bodyContent: this.getBodyContent()})
		);
	}
});

module.exports = EmergingTreatmentPanel;
	