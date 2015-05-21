var React = require('react');

var AccordionBodyStatistics = React.createClass({
	render: function () {
		return (
			<div id="statistics_content" className="panel_body_content">
				<p>Statistics regarding the incidence of NF in the United States are tough to determine. The main reason for this is that while the CDC tracks cases of NF caused by group A streptococcus (GAS), it does NOT track cases of NF caused by the handful of other bacteria that also cause NF.</p>			
				<p>It is generally agreed by experts that <strong>there are between 1 and 5 cases of NF caused by group A strep per 100,000 people per year</strong>, however, this number seems to be increasing for reasons as yet unknown. Using this estimate &#8212; just for NF cases caused by group A strep, we can see the staggering numbers (below). Combine this with the as yet unquantifiable numbers of people who contract NF from other forms of bacteria, the statistics are frightening.</p>
				<table id="statistics_content_table" className="table table-striped table-bordered">
					<thead>
						<tr>
							<th className="fact_sheet_table_header"># of Cases Per 100,000 People</th>
							<th className="fact_sheet_table_header"># of Cases Caused by Group A Strep Per Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>3,150</td>
						</tr>
						<tr>
							<td>2</td>
							<td>6,300</td>
						</tr>
						<tr>
							<td>3</td>
							<td>9,450</td>
						</tr>
						<tr>
							<td>4</td>
							<td>12,600</td>
						</tr>
						<tr>
							<td>5</td>
							<td>15,750</td>
						</tr>
					</tbody>
					<caption id="statistics_content_caption">Based upon US population of 315 million</caption>
				</table>
				<a id="statistics_content_report_link" href="http://www.cdc.gov/abcs/reports-findings/survreports/gas12.pdf"><span className="fa fa-external-link"></span> 2012 Report by the Active Bacterial Core Surveillance (ABC) Emerging Infections Program Network</a>
			</div>
		);
	}
});

module.exports = AccordionBodyStatistics;
