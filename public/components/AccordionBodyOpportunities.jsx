var React = require('react');

var AccordionBodyOpportunities = React.createClass({
	render: function () {
		return (
			<div id="opportunities_content" className="panel_body_content">
				<div id="opportunities_content_paragraph_container">
					<p id="opportunities_content_paragraph">In order for someone to contract NF, the bacteria must be introduced into the body. This occurs either from direct contact with someone carrying the bacteria, or because of the bacteria being carried by the person him or herself. <strong>The opportunities for infection are limited only by the imagination</strong> &#8212; and rarely &#8212; no inciting wound can be determined. Here is just a sample list of opportunities:</p>
				</div>
				<div id="opportunities_content_table_container">
					<table id="opportunities_content_table" className="table table-striped table-bordered">
						<tbody>
							<tr>
								<td>Acne</td>
								<td>Strep Throat</td>
								<td>Piercings</td>
							</tr>
							<tr>
								<td>Animal Bites</td>
								<td>Gunshot Wounds</td>
								<td>Dental Surgery</td>
							</tr>
							<tr>
								<td>Boils</td>
								<td>Hemorrhoids</td>
								<td>Post-Surgical Wounds</td>
							</tr>
							<tr>
								<td>Breaks</td>
								<td>Idiopathic</td>
								<td>Rug Burn</td>
							</tr>
							<tr>
								<td>Bruises and Bumps</td>
								<td>Insect Bites</td>
								<td>Skin Ulcers</td>
							</tr>
							<tr>
								<td>Childbirth (Natural &amp; C-Section)</td>
								<td>Cuts, Scratches, Scrapes and Other Minor Wounds</td>
								<td>Nosocomial (Hospital Acquired)</td>
							</tr>
							<tr>
								<td>Needle Pricks</td>
								<td>Sprains</td>
								<td>Eczema</td>
							</tr>
							<tr>
								<td>Varicella (Chicken-Pox)</td>
								<td>Tattoos</td>
								<td>Frost Bite</td>
							</tr>
							<tr>
								<td>Perforated Bowel</td>
								<td>Trauma</td>
								<td>Fungal Infections</td>
							</tr>
						</tbody>
					</table>
				</div>			
			</div>
		);
	}
});

module.exports = AccordionBodyOpportunities;
