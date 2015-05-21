var React = require('react');

var AccordionBodyHighRisk = React.createClass({displayName: "AccordionBodyHighRisk",
	render: function () {
		return (
			React.createElement("div", {id: "high_risk_content", className: "panel_body_content"}, 
				React.createElement("p", null, "Necrotizing fasciitis does not discriminate in selecting its victims. ", React.createElement("strong", null, "None of us is immune from the possibility of contracting the disease, whether we are healthy or not"), ". However, there are certain higher-risk conditions and situations that can be ideal opportunities for a necrotizing soft-tissue infection."), 
				React.createElement("p", null, "While the higher-risk groups for contracting NF that we will discuss in the following paragraphs are worlds apart from each other and en­compass a broad range of people (such as those suffering from alcoholism and children with chickenpox), you will begin to see several contributory factors in common. For example, in almost all of the groups, immunodeficiency is a key factor, as is malnutrition."), 
				React.createElement("ul", {id: "high_risk_content_list"}, 
					React.createElement("li", null, "Chronically ill individuals — those with AIDS, cancer, coronary disease, chronic renal failure, and cirrhosis of the liver, among others."), 
					React.createElement("li", null, "Children with chicken pox"), 
					React.createElement("li", null, "Diabetics"), 
					React.createElement("li", null, "People undergoing immunosupressive therapies"), 
					React.createElement("li", null, "Elderly individuals"), 
					React.createElement("li", null, "Obese individuals"), 
					React.createElement("li", null, "Women giving birth"), 
					React.createElement("li", null, "Peripheral vascular disease"), 
					React.createElement("li", null, "Others")
				)
			)
		);
	}
});

module.exports = AccordionBodyHighRisk;
