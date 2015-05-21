var React = require('react');

var AccordionBodyWhatIs = React.createClass({
	render: function () {
		return (
			<div id="what_is_content" className="panel_body_content">
				<p>Necrotizing fasciitis (pronounced NECK&#45;roe&#45;tie&#45;zing FASH&#45;ee&#45;EYE&#45;tis) <strong>means “decaying infection of the fascia,” the sheets of connective tissue surrounding the muscles</strong>. This sudden and vicious infection is caused by one or more kinds of bacteria, which the media has nick­named “the flesh&#45;eating bacteria,” that attack the skin, the fat of the sub­cutaneous tissue (the tissue located just beneath the skin), and fasciae.</p>
				<p>The rapid spread of organisms along the superficial and deep fascia is facilitated by bacterial enzymes and toxins, causing vascular clusion, ischemia, and tissue necrosis. Septicemia, toxic shock, subsequent major organ failure and death may occur.</p>
				<p id="what_is_cdc_link_paragraph">&#45; CDC | <a href="http://www.cdc.gov/features/necrotizingfasciitis/">Necrotizing Fasciitis: A Rare Disease, Especially for the Healthy</a></p>
			</div>
		);
	}
});

module.exports = AccordionBodyWhatIs;
