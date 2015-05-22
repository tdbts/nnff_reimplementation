var React = require('react');

var AccordionBodyDiagnosis = React.createClass({displayName: "AccordionBodyDiagnosis",
	render: function () {
		return (
			React.createElement("div", {id: "diagnosis_content", className: "panel_body_content"}, 
				React.createElement("p", null, "The ", React.createElement("strong", null, "early diagnosis of NF is absolutely critical"), " to save the life of the patient."), 			
				React.createElement("ul", {id: "diagnosis_content_list", className: "list-group"}, 
					React.createElement("li", {className: "list-group-item"}, "Pain out of proportion to injury, and other symptoms previously noted"), 
					React.createElement("li", {className: "list-group-item"}, "High level of clinical suspicion"), 
					React.createElement("li", {className: "list-group-item"}, "Imaging Studies"), 
					React.createElement("li", {className: "list-group-item"}, "Ultrasound — Soft tissue thickening and swelling, fluid accumulation, distorted thickened fascia. Color Doppler points to abcess, aspiration of pus with sonographic guidance"), 
					React.createElement("li", {className: "list-group-item"}, "CT Scan & MRI — Soft tissue swelling and subcutaneous emphysema indicating polymicrobial infection (not present in GAS)"), 
					React.createElement("li", {className: "list-group-item"}, "Frozen Tissue Biopsy"), 
					React.createElement("li", {className: "list-group-item"}, "Surgical Exploration — Looking for undermining, dead tissue, fluid"), 
					React.createElement("li", {className: "list-group-item"}, "Laboratory Workup — CRP, CBC, WBC, BUN, etc.")
				)
			)
		);
	}
});

module.exports = AccordionBodyDiagnosis;