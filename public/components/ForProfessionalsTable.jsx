var React = require('react');

var ForProfessionalsTable = React.createClass({
	render: function () {
		return (
			<div id="for_professionals_table_container" className="container">	
				<table id="for_professionals_table" className="table table-striped table-bordered table-hover">
					<thead className="nnff_table_head">
						<tr>
							<th>Date</th>
							<th>Venue</th>
							<th>Title</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>July 15, 2014</td>
							<td>Clinical Infectious Diseases</td>
							<td className="article_title">Necrotizing Soft&#45;Tissue Infection: Diagnosis and Management</td>
							<td><a href="http://cid.oxfordjournals.org/content/44/5/705.long"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
						<tr>
							<td>June 20, 2014</td>
							<td>Forbes</td>
							<td className="article_title">Antibiotic Pipeline Revival: FDA Approves Cubist Pharmaceuticals&#39; Sivextro For MRSA, Other Serious Skin Infections</td>
							<td><a href="http://www.forbes.com/sites/davidkroll/2014/06/20/antibiotic-pipeline-revival-fda-approves-cubist-pharmaceuticals-sivextro-for-mrsa-other-serious-skin-infections/"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
						<tr>
							<td>June 5, 2014</td>
							<td>NEJM</td>
							<td className="article_title">Single&#45;Dose Oritavancin in the Treatment of Acute Bacterial Skin Infections</td>
							<td><a href="http://www.nejm.org/doi/full/10.1056/NEJMoa1310422"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
						<tr>
							<td>March 27, 2014</td>
							<td>NEJM</td>
							<td className="article_title">Case 10&#45;2014 &#8211; A 45&#45;Year&#45;Old Man with a Rash</td>
							<td><a href="http://www.nejm.org/doi/full/10.1056/NEJMcpc1304162"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
						<tr>
							<td>January 22, 2014</td>
							<td>ISRN Infectious Diseases</td>
							<td className="article_title">Necrotizing Fasciitis: Diagnostic Challenges and Current Practices</td>
							<td><a href="http://www.hindawi.com/journals/isrn.infectious.diseases/2014/208072/"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
						<tr>
							<td>November, 2012</td>
							<td>Journal of Surgical Case Reports</td>
							<td className="article_title">A presentation of facial necrotizing fasciitis with orbital involvement</td>
							<td><a href="http://jscr.oxfordjournals.org/content/2013/1/rjs033.full"><span className="fa fa-external-link external_link_icon"></span></a></td>
						</tr>
					</tbody>
				</table>
			</div>			
		);
	}
});

module.exports = ForProfessionalsTable;
