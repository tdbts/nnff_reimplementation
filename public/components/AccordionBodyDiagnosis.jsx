var React = require('react');

var AccordionBodyDiagnosis = React.createClass({
	render: function () {
		return (
			<div id="diagnosis_content" className="panel_body_content">
				<p>The <strong>early diagnosis of NF is absolutely critical</strong> to save the life of the patient.</p>			
				<ul id="diagnosis_content_list" className="list-group">
					<li className="list-group-item">Pain out of proportion to injury, and other symptoms previously noted</li>
					<li className="list-group-item">High level of clinical suspicion</li>
					<li className="list-group-item">Imaging Studies</li>
					<li className="list-group-item">Ultrasound &#8212; Soft tissue thickening and swelling, fluid accumulation, distorted thickened fascia. Color Doppler points to abcess, aspiration of pus with sonographic guidance</li>
					<li className="list-group-item">CT Scan &amp; MRI &#8212; Soft tissue swelling and subcutaneous emphysema indicating polymicrobial infection (not present in GAS)</li>
					<li className="list-group-item">Frozen Tissue Biopsy</li>
					<li className="list-group-item">Surgical Exploration &#8212; Looking for undermining, dead tissue, fluid</li>
					<li className="list-group-item">Laboratory Workup &#8212; CRP, CBC, WBC, BUN, etc.</li>
				</ul>
			</div>
		);
	}
});

module.exports = AccordionBodyDiagnosis;