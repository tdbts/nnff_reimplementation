var React = require('react');

var AccordionBodySymptoms = React.createClass({displayName: "AccordionBodySymptoms",
	render: function () {
		return (
			React.createElement("div", {id: "symptoms_content", className: "panel_body_content"}, 
				React.createElement("div", {id: "symptoms_content_header_container"}, 
					React.createElement("h5", null, "The following depicts general symptoms of NF as the disease advances:")
				), 
				React.createElement("div", {id: "early_symptoms_container", className: "symptoms_container"}, 
					React.createElement("h4", {id: "early_symptoms_header", className: "symptoms_header"}, "EARLY SYMPTOMS"), 
					React.createElement("ul", {id: "early_symptoms_list", className: "symptoms_list"}, 
						React.createElement("li", null, React.createElement("p", null, "Trauma of some type (however slight) will probably have occurred (cut, bruise, scratch, surgery).")), 
						React.createElement("li", null, React.createElement("p", null, "Victim begins to feel an annoying discomfort in the general region of the trauma. For example, in the case of NNFF co-founder Donna, she felt the type of pain one feels after working out a little too hard in her upper arm, the day after getting a small cut on her finger.")), 
						React.createElement("li", null, React.createElement("p", null, "The pain described gets worse, the area more tender. This is one of the major things to keep in mind. The pain one feels is out of proportion to the injury.")), 
						React.createElement("li", null, React.createElement("p", null, "Flu-like symptoms occur, such as vomiting, diarrhea, dehydration, general malaise, weakness, muscle pain, and fever.")), 
						React.createElement("li", null, React.createElement("p", null, "Tissue is swollen and there may or may not be redness noted. The area will feel hot to the touch, and very painful."))
					)
				), 
				React.createElement("div", {id: "advanced_symptoms_container", className: "symptoms_container"}, 
					React.createElement("h4", {id: "advanced_symptoms_header", className: "symptoms_header"}, "ADVANCED SYMPTOMS"), 
					React.createElement("ul", {id: "advanced_symptoms_list", className: "symptoms_list"}, 
						React.createElement("li", null, React.createElement("p", null, "Conditions continue to worsen.")), 
						React.createElement("li", null, React.createElement("p", null, "Urination becomes less frequent (as the system dehydrates).")), 
						React.createElement("li", null, React.createElement("p", null, "Blood pressure drops severely, and heartbeat is rapid.")), 
						React.createElement("li", null, React.createElement("p", null, "A sunburn type rash may appear over the entire body, due to toxins released from the bacteria. This may or may not be present.")), 
						React.createElement("li", null, React.createElement("p", null, "Large, dark boil-like blister(s) may or may not form in the affected area.")), 
						React.createElement("li", null, React.createElement("p", null, "Toxic shock can ensue as the body's organs shut down.")), 
						React.createElement("li", null, React.createElement("p", null, "Death soon follows."))
					)
				)
			)
		);
	}
});

module.exports = AccordionBodySymptoms;
