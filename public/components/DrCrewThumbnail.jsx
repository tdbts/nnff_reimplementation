var React = require('react');

var DrCrewThumbnail = React.createClass({
	render: function () {
		return (
			<div id="dr_crew_thumbnail_container">	
				<div className="thumbnail">
					<img src="images/dr_john_crew_unaltered.jpg" />
				</div>
				<div className="caption">
					<h4>John Crew, M.D. <br />Seton Medical Center <br />Daly City, California </h4>
				</div>
				<div id="dr_crew_thumbnail_text_container">
					<p id="dr_crew_thumbnail_text">Dr. Crew was nominated earlier this year for the Lister Legacy Prize for his groundbreaking, life and limb-saving treatment of NF. This award presented by the Royal College of Surgeons of Edinburgh to recognize contributions in controlling infections.</p>
				</div>
			</div>
		);
	}
});

module.exports = DrCrewThumbnail;
