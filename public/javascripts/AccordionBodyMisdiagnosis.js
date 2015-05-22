var React = require('react');

var AccordionBodyMisdiagnosis = React.createClass({displayName: "AccordionBodyMisdiagnosis",
	render: function () {
		return (
			React.createElement("div", {id: "misdiagnosis_content", className: "panel_body_content"}, 
				React.createElement("p", null, "The missed and/or delayed diagnosis of NF can also be attributed to NF's hallmark ability to wreak its devastating damage on the body with few symptoms to show for it — until the disease has reached the critical stage. An article in the British Columbia Medical Journal, which featured NF as the focus of the April and May 1999 issues, illustrates this point. The covers of the two journals featured caricatures of ", React.createElement("strong", null, "a wolf in sheep's clothing — a highly appropriate representation of how NF stealthily invades and attacks the body under the guise of a common, minor affliction"), "."), 
				React.createElement("p", null, "As the clearinghouse for NF cases, we find it so difficult to hear case after case, on almost a daily basis, of yet another NF patient who suffered amputations, massive tissue loss, or death due to misdiagnosis. While each case is unique in terms of entry point, type of bacteria involved, time elapsed, and ultimate outcome, a general pattern has evolved:"), 
				React.createElement("ul", {id: "misdiagnosis_content_list"}, 
					React.createElement("li", null, "The patient exhibits early, progressing symptoms and makes one or more attempts to seek medical treatment, but is sent home with an erroneous diagnoses."), 
					React.createElement("li", null, "His or her condition steadily worsens and becomes critical."), 
					React.createElement("li", null, "The patient is returned to the hospital, where emergency medical intervention is initiated, the effectiveness of which is considerably weakened due to the advanced stage of the disease, which directly results in loss of limbs, permanent disability, severe disfigurement, or death.")
				), 
				React.createElement("p", null, "We at NNFF are passionately dedicated to educating medical professionals of every discipline — from school nurses, to EMTs, to ER physicians, to nurses, and general practice staff, and all others, so that the high rate of misdiagnosis can be greatly reduced, thus saving limbs and lives. ", React.createElement("strong", null, "Please contact us at jroemmele@aol.com if you are interested in having Ms. Roemmele speak to your organization regarding NF"), ".")
			)
		);
	}
});

module.exports = AccordionBodyMisdiagnosis;
