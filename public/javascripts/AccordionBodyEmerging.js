var React = require('react');

var AccordionBodyEmerging = React.createClass({displayName: "AccordionBodyEmerging",
	render: function () {
		return (
			React.createElement("div", {id: "emerging_content", className: "panel_body_content"}, 
				React.createElement("p", null, "NNFF is connecting patients and their families from all over the United States and other countries with ", React.createElement("strong", null, "Dr. John Crew, director of the Advanced Wound CareCenter at Seton Medical Center in Daly City, California"), ". Dr. Crew then oversees the care of the patients, using a ground-breaking new treatment that he has discovered and developed for this rapidly spreading life-threatening disease."), 
				React.createElement("p", null, React.createElement("a", {href: "#"}, "READ MORE HERE."))
			)
		);
	}
});

module.exports = AccordionBodyEmerging;
