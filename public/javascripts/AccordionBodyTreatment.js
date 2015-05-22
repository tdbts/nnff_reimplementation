var React = require('react');

var AccordionBodyTreatment = React.createClass({displayName: "AccordionBodyTreatment",
	render: function () {
		return (
			React.createElement("div", {id: "treatment_content", className: "panel_body_content"}, 
				React.createElement("p", null, "The medical treatment of NF ", React.createElement("strong", null, "varies according to the type of bacteria, location(s) of the body affected, and other factors"), ". Generally, however, treatment includes:"), 
				React.createElement("ul", {id: "treatment_content_list", className: "list-group"}, 
					React.createElement("li", {className: "list-group-item"}, "Team of Specialists"), 
					React.createElement("li", {className: "list-group-item"}, "Surgical Debridement (multiple often required)"), 
					React.createElement("li", {className: "list-group-item"}, "Broad Spectrum Antibiotic Therapy (tailored with culture) including Clindamycin, Vancomycin, Penicillin, etc."), 
					React.createElement("li", {className: "list-group-item"}, "Amputation"), 
					React.createElement("li", {className: "list-group-item"}, "Induced Sedation & Ventilation"), 
					React.createElement("li", {className: "list-group-item"}, "VAC (Vacuum Assisted Closure) — removes chronic edema, leading to increased localized blood flow, enhanced formation of granulation tissue"), 
					React.createElement("li", {className: "list-group-item"}, "Treatment for Complications (toxic shock, organ failure, respiratory distress)"), 
					React.createElement("li", {className: "list-group-item"}, "IVIG — Intravenous Immunoglobulin (not standard — but has proven effective)"), 
					React.createElement("li", {className: "list-group-item"}, "Aggressive wound care and repeated lab tests"), 
					React.createElement("li", {className: "list-group-item"}, "Hyperbaric Oxygen Therapy (not standard — but has proven effective)"), 
					React.createElement("li", {className: "list-group-item"}, "Skin Grafts"), 
					React.createElement("li", {className: "list-group-item"}, "Home Care"), 
					React.createElement("li", {className: "list-group-item"}, "Physical Rehabilitation, Prosthesis, Psychological, and Social Support")
				)
			)
		);
	}
});

module.exports = AccordionBodyTreatment;
