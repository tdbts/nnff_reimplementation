var React = require('react');

var DrCrewThumbnail = React.createClass({
	render: function () {
		return (
			<div id="dr_crew_dynamic_thumbnails_container">
				<div id="dr_crew_thumbnail_container" className="thumbnail hidden-sm">	
					<div id="dr_crew_image_container">
						<img id="dr_crew_image" src="images/dr_john_crew_unaltered.jpg" />
					</div>
					<div className="caption">
						<h4>John Crew, M.D. <br />Seton Medical Center <br />Daly City, California </h4>
					</div>
					<div id="dr_crew_thumbnail_text_container">
						<p id="dr_crew_thumbnail_text">Dr. Crew was nominated earlier this year for the Lister Legacy Prize for his groundbreaking, life and limb-saving treatment of NF. This award presented by the Royal College of Surgeons of Edinburgh to recognize contributions in controlling infections.</p>
					</div>
				</div>
				<div id="dr_crew_alt_thumbnail_container" className="thumbnail visible-sm-inline-block">	
					<img id="dr_crew_alt_image" src="images/dr_john_crew_unaltered.jpg" />
					<div className="caption">
						<h4>John Crew, M.D. <br />Seton Medical Center <br />Daly City, California </h4>					
						<p id="dr_crew_thumbnail_text">Dr. Crew was nominated earlier this year for the Lister Legacy Prize for his groundbreaking, life and limb-saving treatment of NF. This award presented by the Royal College of Surgeons of Edinburgh to recognize contributions in controlling infections.</p>
					</div>
				</div>				
			</div>
		);
	}
});

module.exports = DrCrewThumbnail;