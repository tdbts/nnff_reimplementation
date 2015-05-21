var React = require('react');

var AccordionBodyBacteria = React.createClass({displayName: "AccordionBodyBacteria",
	render: function () {
		return (
			React.createElement("div", {id: "bacteria_content", className: "panel_body_content"}, 
				React.createElement("h5", {id: "bacteria_content_header"}, "The bacteria that cause NF include:"), 
				React.createElement("table", {id: "bacteria_content_table", className: "table table-striped table-bordered"}, 
					React.createElement("thead", null, 
						React.createElement("tr", null, 
							React.createElement("th", {className: "fact_sheet_table_header"}, "Name"), 
							React.createElement("th", {className: "fact_sheet_table_header"}, "Where Found?"), 
							React.createElement("th", {className: "fact_sheet_table_header"}, "Notable")
						)
					), 
					React.createElement("tbody", null, 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Group A Strep")), 
							React.createElement("td", null, "Nose, throat, skin (common)"), 
							React.createElement("td", null, "Lightning-fast \"flesh-eating\" bacteria")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Staph Aureus"), " (including MRSA)"), 
							React.createElement("td", null, "Skin, nose, nosocomial"), 
							React.createElement("td", null, "Often polymicrobial")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Bacterioides")), 
							React.createElement("td", null, "Mouth, intestine, genitals"), 
							React.createElement("td", null, "Anaerobic, polymicrobial")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Clostridium")), 
							React.createElement("td", null, "Soil, intestines"), 
							React.createElement("td", null, "Highly fatal, anaerobic")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Vibrio Vulnificus")), 
							React.createElement("td", null, "Warm waters"), 
							React.createElement("td", null, "95% of seafood-related deaths in US")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Pseudomonads")), 
							React.createElement("td", null, "Skin, respiratory system"), 
							React.createElement("td", null, "Generally affects those severely immunocompromised")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, React.createElement("em", null, "Aeromonas hydrophila")), 
							React.createElement("td", null, "Fresh and brackish water"), 
							React.createElement("td", null, "Most common in young children (gastroenteritis)")
						)
					)
				)			
			)
		);
	}
});

module.exports = AccordionBodyBacteria;