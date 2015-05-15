var React = require('react');

var DrCrewThumbnail = React.createClass({displayName: "DrCrewThumbnail",
	render: function () {
		return (
			React.createElement("div", {id: "dr_crew_dynamic_thumbnails_container"}, 
				React.createElement("div", {id: "dr_crew_thumbnail_container", className: "thumbnail hidden-sm"}, 	
					React.createElement("div", {id: "dr_crew_image_container"}, 
						React.createElement("img", {id: "dr_crew_image", src: "images/dr_john_crew_unaltered.jpg"})
					), 
					React.createElement("div", {className: "caption"}, 
						React.createElement("h4", null, "John Crew, M.D. ", React.createElement("br", null), "Seton Medical Center ", React.createElement("br", null), "Daly City, California ")
					), 
					React.createElement("div", {id: "dr_crew_thumbnail_text_container"}, 
						React.createElement("p", {id: "dr_crew_thumbnail_text"}, "Dr. Crew was nominated earlier this year for the Lister Legacy Prize for his groundbreaking, life and limb-saving treatment of NF. This award presented by the Royal College of Surgeons of Edinburgh to recognize contributions in controlling infections.")
					)
				), 
				React.createElement("div", {id: "dr_crew_alt_thumbnail_container", className: "thumbnail visible-sm-inline-block"}, 	
					React.createElement("img", {id: "dr_crew_alt_image", src: "images/dr_john_crew_unaltered.jpg"}), 
					React.createElement("div", {className: "caption"}, 
						React.createElement("h4", null, "John Crew, M.D. ", React.createElement("br", null), "Seton Medical Center ", React.createElement("br", null), "Daly City, California "), 					
						React.createElement("p", {id: "dr_crew_thumbnail_text"}, "Dr. Crew was nominated earlier this year for the Lister Legacy Prize for his groundbreaking, life and limb-saving treatment of NF. This award presented by the Royal College of Surgeons of Edinburgh to recognize contributions in controlling infections.")
					)
				)				
			)
		);
	}
});

module.exports = DrCrewThumbnail;