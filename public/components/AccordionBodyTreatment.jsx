var React = require('react');

var AccordionBodyTreatment = React.createClass({
	render: function () {
		return (
			<div id="treatment_content" className="panel_body_content">
				<p>The medical treatment of NF <strong>varies according to the type of bacteria, location(s) of the body affected, and other factors</strong>. Generally, however, treatment includes:</p>
				<ul id="treatment_content_list" className="list-group">
					<li className="list-group-item">Team of Specialists</li>
					<li className="list-group-item">Surgical Debridement (multiple often required)</li>
					<li className="list-group-item">Broad Spectrum Antibiotic Therapy (tailored with culture) including Clindamycin, Vancomycin, Penicillin, etc.</li>
					<li className="list-group-item">Amputation</li>
					<li className="list-group-item">Induced Sedation &amp; Ventilation</li>
					<li className="list-group-item">VAC (Vacuum Assisted Closure) &#8212; removes chronic edema, leading to increased localized blood flow, enhanced formation of granulation tissue</li>
					<li className="list-group-item">Treatment for Complications (toxic shock, organ failure, respiratory distress)</li>
					<li className="list-group-item">IVIG &#8212; Intravenous Immunoglobulin (not standard &#8212; but has proven effective)</li>
					<li className="list-group-item">Aggressive wound care and repeated lab tests</li>
					<li className="list-group-item">Hyperbaric Oxygen Therapy (not standard &#8212; but has proven effective)</li>
					<li className="list-group-item">Skin Grafts</li>
					<li className="list-group-item">Home Care</li>
					<li className="list-group-item">Physical Rehabilitation, Prosthesis, Psychological, and Social Support</li>
				</ul>
			</div>
		);
	}
});

module.exports = AccordionBodyTreatment;
