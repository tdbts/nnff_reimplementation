var React = require('react');

var Footer = React.createClass({displayName: "Footer",
	render: function () {
		return (
			React.createElement("footer", {id: "nnff_footer"}, 
				React.createElement("div", {id: "footer_content_container", className: "container"}, 
					React.createElement("div", {id: "social_links", className: "footer_content"}, 
						React.createElement("ul", {className: "list-inline"}, 
							React.createElement("li", {id: "envelope_icon", className: "footer_icon"}, 
								React.createElement("a", {className: "footer_link", href: "#"}, React.createElement("span", {className: "fa fa-2x fa-envelope"}))
							), 
							React.createElement("li", {id: "facebook_icon", className: "footer_icon"}, 
								React.createElement("a", {className: "footer_link", href: "#"}, React.createElement("span", {className: "fa fa-2x fa-facebook-official"}))
							), 
							React.createElement("li", {id: "twitter_icon", className: "footer_icon"}, 
								React.createElement("a", {className: "footer_link", href: "#"}, React.createElement("span", {className: "fa fa-2x fa-twitter"}))
							)
						)
					), 
					React.createElement("div", {id: "copyright_container", className: "footer_content"}, 
						React.createElement("p", {id: "copyright"}, React.createElement("span", {className: "fa fa-copyright"}), " 2015 | National Necrotizing Fasciitis Foundation"), 
						React.createElement("p", {id: "rights_reserved"}, "All Rights Reserved.")
					)
				)
			)
		);
	}
});

module.exports = Footer;
