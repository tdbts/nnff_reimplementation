var React = require('react');

var AccordionBodyWhatIs = React.createClass({displayName: "AccordionBodyWhatIs",
	render: function () {
		return (
			React.createElement("div", {id: "what_is_content", className: "panel_body_content"}, 
				React.createElement("p", null, "Necrotizing fasciitis (pronounced NECK-roe-tie-zing FASH-ee-EYE-tis) ", React.createElement("strong", null, "means “decaying infection of the fascia,” the sheets of connective tissue surrounding the muscles"), ". This sudden and vicious infection is caused by one or more kinds of bacteria, which the media has nick­named “the flesh-eating bacteria,” that attack the skin, the fat of the sub­cutaneous tissue (the tissue located just beneath the skin), and fasciae."), 
				React.createElement("p", null, "The rapid spread of organisms along the superficial and deep fascia is facilitated by bacterial enzymes and toxins, causing vascular clusion, ischemia, and tissue necrosis. Septicemia, toxic shock, subsequent major organ failure and death may occur."), 
				React.createElement("p", {id: "what_is_cdc_link_paragraph"}, "- CDC | ", React.createElement("a", {href: "http://www.cdc.gov/features/necrotizingfasciitis/"}, "Necrotizing Fasciitis: A Rare Disease, Especially for the Healthy"))
			)
		);
	}
});

module.exports = AccordionBodyWhatIs;
