var React = require('react');

var AccordionBodyHighRisk = React.createClass({
	render: function () {
		return (
			<div id="high_risk_content" className="panel_body_content">
				<p>Necrotizing fasciitis does not discriminate in selecting its victims. <strong>None of us is immune from the possibility of contracting the disease, whether we are healthy or not</strong>. However, there are certain higher&#45;risk conditions and situations that can be ideal opportunities for a necrotizing soft&#45;tissue infection.</p>
				<p>While the higher&#45;risk groups for contracting NF that we will discuss in the following paragraphs are worlds apart from each other and en­compass a broad range of people (such as those suffering from alcoholism and children with chickenpox), you will begin to see several contributory factors in common. For example, in almost all of the groups, immunodeficiency is a key factor, as is malnutrition.</p>
				<ul id="high_risk_content_list" className="list-group">
					<li className="list-group-item">Chronically ill individuals &#8212; those with AIDS, cancer, coronary disease, chronic renal failure, and cirrhosis of the liver, among others.</li>
					<li className="list-group-item">Children with chicken pox</li>
					<li className="list-group-item">Diabetics</li>
					<li className="list-group-item">People undergoing immunosupressive therapies</li>
					<li className="list-group-item">Elderly individuals</li>
					<li className="list-group-item">Obese individuals</li>
					<li className="list-group-item">Women giving birth</li>
					<li className="list-group-item">Peripheral vascular disease</li>
					<li className="list-group-item">Others</li>
				</ul>
			</div>
		);
	}
});

module.exports = AccordionBodyHighRisk;
