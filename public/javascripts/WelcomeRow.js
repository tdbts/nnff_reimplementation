var React = require('react');

var WelcomeRow = React.createClass({displayName: "WelcomeRow",
	render: function () {
		return (
			React.createElement("div", {id: "welcome_section_wrapper"}, 
				React.createElement("div", {id: "welcome_section_container_two_rows", className: "container welcome_section_container hidden-lg"}, 
					React.createElement("div", {id: "welcome_row_top", className: "welcome_section_row row"}, 
						React.createElement("div", {id: "thank_you_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "thank_you_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-search"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• INFORMATION •")
							), 
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "Thank you for visiting the National Necrotizing Fasciitis Foundation. We hope that here you will discover all of the information you need to understand necrotizing fascitiis, more commonly known as the flesh-eating bacteria.")
							)
						), 
						React.createElement("div", {id: "community_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "community_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-heartbeat"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• EXPERIENCE •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "The NNFF community is comprised of tens of thousands of individuals from all over the world who have a shared experience having either survived NF, or lost a loved one to this highly fatal, devastating infection.")
							)
						)
					), 
					React.createElement("div", {id: "welcome_row_bottom", className: "welcome_section_row row hidden-lg"}, 
						React.createElement("div", {id: "awareness_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "awareness_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-bullhorn"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• AWARENESS •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "We are strong, determined, compassionate and passionate, and in the hope of saving lives we have dedicated our efforts to bringing awareness and educating medical professionals and the public about NF.")
							)
						), 
						React.createElement("div", {id: "support_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "support_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-group"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• SUPPORT •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "We love our NNFF community! Amazing individuals dedicate their time to help us make the public more conscious about NF! If you are seeking support in your area, here is a great place to start.")
							)
						)										
					)
				), 


				React.createElement("div", {id: "welcome_section_container_one_row", className: "container-fluid welcome_section_container visible-lg-block"}, 
					React.createElement("div", {id: "welcome_row_full_width", className: "welcome_section_row row"}, 
						React.createElement("div", {id: "thank_you_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "thank_you_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-search"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• INFORMATION •")
							), 
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "Thank you for visiting the National Necrotizing Fasciitis Foundation. We hope that here you will discover all of the information you need to understand necrotizing fascitiis, more commonly known as the flesh-eating bacteria.")
							)
						), 
						React.createElement("div", {id: "community_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "community_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-heartbeat"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• EXPERIENCE •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "The NNFF community is comprised of tens of thousands of individuals from all over the world who have a shared experience having either survived NF, or lost a loved one to this highly fatal, devastating infection.")
							)
						), 
						React.createElement("div", {id: "awareness_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "awareness_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-bullhorn"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• AWARENESS •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "We are strong, determined, compassionate and passionate, and in the hope of saving lives we have dedicated our efforts to bringing awareness and educating medical professionals and the public about NF.")
							)
						), 
						React.createElement("div", {id: "support_column", className: "column"}, 
							React.createElement("div", {className: "glyphicon_container"}, 
								React.createElement("span", {id: "support_column_glyphicon", className: "welcome_column_glyphicon fa fa-3x fa-group"})
							), 
							React.createElement("div", {className: "column_title_container"}, 
								React.createElement("h5", {className: "column_title"}, "• SUPPORT •")
							), 						
							React.createElement("div", {className: "column_text_container"}, 
								React.createElement("p", {className: "column_text"}, "We love our NNFF community! Amazing individuals dedicate their time to help us make the public more conscious about NF! If you are seeking support in your area, here is a great place to start.")
							)
						)										
					)		
				)
			)
		);
	}
});

module.exports = WelcomeRow;
