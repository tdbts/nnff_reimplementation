var React = require('react');

var FactSheet = React.createClass({displayName: "FactSheet",
	render: function () {
		return (
			React.createElement("div", {id: "faqs_page_container", className: "fullHeightWidth"}, 
				React.createElement("div", {id: "faqs_jumbotron", className: "jumbotron"}, 
					React.createElement("div", {id: "container_inside_faq_header", className: "container"}, 
						React.createElement("div", {id: "faqs_header", className: "page-header"}, 
							React.createElement("span", {id: "faqs_header_text"}, "Fact Sheet")
						)
					)
				)
			)
		);
	}
});

module.exports = FactSheet;
