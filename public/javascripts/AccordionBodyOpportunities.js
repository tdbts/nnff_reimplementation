var React = require('react');

var AccordionBodyOpportunities = React.createClass({displayName: "AccordionBodyOpportunities",
	render: function () {
		return (
			React.createElement("div", {id: "opportunities_content", className: "panel_body_content"}, 
				React.createElement("div", {id: "opportunities_content_paragraph_container"}, 
					React.createElement("p", {id: "opportunities_content_paragraph"}, "In order for someone to contract NF, the bacteria must be introduced into the body. This occurs either from direct contact with someone carrying the bacteria, or because of the bacteria being carried by the person him or herself. ", React.createElement("strong", null, "The opportunities for infection are limited only by the imagination"), " — and rarely — no inciting wound can be determined. Here is just a sample list of opportunities:")
				), 
				React.createElement("div", {id: "opportunities_content_table_container"}, 
					React.createElement("table", {id: "opportunities_content_table", className: "table table-striped table-bordered"}, 
						React.createElement("tbody", null, 
							React.createElement("tr", null, 
								React.createElement("td", null, "Acne"), 
								React.createElement("td", null, "Strep Throat"), 
								React.createElement("td", null, "Piercings")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Animal Bites"), 
								React.createElement("td", null, "Gunshot Wounds"), 
								React.createElement("td", null, "Dental Surgery")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Boils"), 
								React.createElement("td", null, "Hemorrhoids"), 
								React.createElement("td", null, "Post-Surgical Wounds")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Breaks"), 
								React.createElement("td", null, "Idiopathic"), 
								React.createElement("td", null, "Rug Burn")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Bruises and Bumps"), 
								React.createElement("td", null, "Insect Bites"), 
								React.createElement("td", null, "Skin Ulcers")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Childbirth (Natural & C-Section)"), 
								React.createElement("td", null, "Cuts, Scratches, Scrapes and Other Minor Wounds"), 
								React.createElement("td", null, "Nosocomial (Hospital Acquired)")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Needle Pricks"), 
								React.createElement("td", null, "Sprains"), 
								React.createElement("td", null, "Eczema")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Varicella (Chicken-Pox)"), 
								React.createElement("td", null, "Tattoos"), 
								React.createElement("td", null, "Frost Bite")
							), 
							React.createElement("tr", null, 
								React.createElement("td", null, "Perforated Bowel"), 
								React.createElement("td", null, "Trauma"), 
								React.createElement("td", null, "Fungal Infections")
							)
						)
					)
				)			
			)
		);
	}
});

module.exports = AccordionBodyOpportunities;
