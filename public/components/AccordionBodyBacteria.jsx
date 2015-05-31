var React = require('react');

var AccordionBodyBacteria = React.createClass({
	render: function () {
		return (
			<div id="bacteria_content" className="panel_body_content">
				<h5 id="bacteria_content_header">The bacteria that cause NF include:</h5>
				<table id="bacteria_content_table" className="table table-striped table-bordered">
					<thead className="nnff_table_head">
						<tr>
							<th className="fact_sheet_table_header">Name</th>
							<th className="fact_sheet_table_header">Where Found?</th>
							<th className="fact_sheet_table_header">Notable</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><em>Group A Strep</em></td>
							<td>Nose, throat, skin (common)</td>
							<td>Lightning&#45;fast &quot;flesh&#45;eating&quot; bacteria</td>
						</tr>
						<tr>
							<td><em>Staph Aureus</em> (including MRSA)</td>
							<td>Skin, nose, nosocomial</td>
							<td>Often polymicrobial</td>
						</tr>
						<tr>
							<td><em>Bacterioides</em></td>
							<td>Mouth, intestine, genitals</td>
							<td>Anaerobic, polymicrobial</td>
						</tr>
						<tr>
							<td><em>Clostridium</em></td>
							<td>Soil, intestines</td>
							<td>Highly fatal, anaerobic</td>
						</tr>
						<tr>
							<td><em>Vibrio Vulnificus</em></td>
							<td>Warm waters</td>
							<td>95% of seafood-related deaths in US</td>
						</tr>
						<tr>
							<td><em>Pseudomonads</em></td>
							<td>Skin, respiratory system</td>
							<td>Generally affects those severely immunocompromised</td>
						</tr>
						<tr>
							<td><em>Aeromonas hydrophila</em></td>
							<td>Fresh and brackish water</td>
							<td>Most common in young children (gastroenteritis)</td>
						</tr>
					</tbody>
				</table>			
			</div>
		);
	}
});

module.exports = AccordionBodyBacteria;