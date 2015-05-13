var React = require('react'), 
	$ = window.jQuery || require('jquery');

var CommonNameBanner = React.createClass({displayName: "CommonNameBanner",
	render: function () {
		return (
			React.createElement("div", {id: "common_name_banner"}, 
				React.createElement("h1", {id: "banner_foundation_name"}, React.createElement("span", {id: "national_text", className: "text_block"}, "The National "), React.createElement("span", {id: "banner_latin_name", className: "text_block"}, "Necrotizing Fasciitis"), React.createElement("span", {id: "foundation_text", className: "text_block"}, " Foundation")), 
				React.createElement("h4", {id: "banner_common_name"}, "Commonly known as the “Flesh-Eating” Bacteria")
			)
		);
	}
});

module.exports = CommonNameBanner;
