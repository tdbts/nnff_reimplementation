var React = require('react');

var AccordionBodySymptoms = React.createClass({
	render: function () {
		return (
			<div id="symptoms_content" className="panel_body_content">
				<div id="symptoms_content_header_container">
					<h5>The following depicts general symptoms of NF as the disease advances:</h5>
				</div>
				<div id="early_symptoms_container" className="symptoms_container">
					<h4 id="early_symptoms_header" className="symptoms_header">EARLY SYMPTOMS</h4>
					<ul id="early_symptoms_list" className="symptoms_list">
						<li><p>Trauma of some type (however slight) will probably have occurred (cut, bruise, scratch, surgery).</p></li>
						<li><p>Victim begins to feel an annoying discomfort in the general region of the trauma. For example, in the case of NNFF co&#45;founder Donna, she felt the type of pain one feels after working out a little too hard in her upper arm, the day after getting a small cut on her finger.</p></li>
						<li><p>The pain described gets worse, the area more tender. This is one of the major things to keep in mind. The pain one feels is out of proportion to the injury.</p></li>
						<li><p>Flu&#45;like symptoms occur, such as vomiting, diarrhea, dehydration, general malaise, weakness, muscle pain, and fever.</p></li>
						<li><p>Tissue is swollen and there may or may not be redness noted. The area will feel hot to the touch, and very painful.</p></li>
					</ul>
				</div>
				<div id="advanced_symptoms_container" className="symptoms_container">
					<h4 id="advanced_symptoms_header" className="symptoms_header">ADVANCED SYMPTOMS</h4>
					<ul id="advanced_symptoms_list" className="symptoms_list">
						<li><p>Conditions continue to worsen.</p></li>
						<li><p>Urination becomes less frequent (as the system dehydrates).</p></li>
						<li><p>Blood pressure drops severely, and heartbeat is rapid.</p></li>
						<li><p>A sunburn type rash may appear over the entire body, due to toxins released from the bacteria. This may or may not be present.</p></li>
						<li><p>Large, dark boil&#45;like blister(s) may or may not form in the affected area.</p></li>
						<li><p>Toxic shock can ensue as the body&#39;s organs shut down.</p></li>
						<li><p>Death soon follows.</p></li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = AccordionBodySymptoms;
