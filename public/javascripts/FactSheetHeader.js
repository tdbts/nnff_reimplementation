var React = require('react');

var FactSheetHeader = React.createClass({displayName: "FactSheetHeader",
	render: function () {
		return (
			React.createElement("div", {id: "faqs_jumbotron", className: "jumbotron"}, 
				React.createElement("div", {id: "container_inside_faq_header", className: "container"}, 
					React.createElement("div", {id: "faqs_header", className: "page-header"}, 
						React.createElement("span", {id: "faqs_header_text"}, "Fact Sheet")
					)
				)
			)			
		);
	}
});

module.exports = FactSheetHeader;
