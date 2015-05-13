var React = require('react');

var Carousel = React.createClass({displayName: "Carousel",
	render: function () {
		return (
			React.createElement("div", {id: this.props.carouselID, className: "carousel slide", "data-ride": "carousel"}, 
				React.createElement("ol", {className: "carousel-indicators"}, 
					React.createElement("li", {"data-target": "#" + this.props.carouselID, "data-slide-to": "0", className: "active"}), 
					React.createElement("li", {"data-target": "#" + this.props.carouselID, "data-slide-to": "1"}), 
					React.createElement("li", {"data-target": "#" + this.props.carouselID, "data-slide-to": "2"})
				), 

				React.createElement("div", {className: "carousel-inner", role: "listbox"}, 
					React.createElement("div", {className: "item active"}, 
						React.createElement("div", {id: "carousel_image_1", className: "carousel_image_div"}), 
						React.createElement("div", {className: "carousel-caption"}, 
				        	React.createElement("h1", null, "Mother and Child")
						)
					), 
					React.createElement("div", {className: "item"}, 
						React.createElement("div", {id: "carousel_image_2", className: "carousel_image_div"}), 
						React.createElement("div", {className: "carousel-caption"}, 
				        	React.createElement("h1", null, "Elderly Woman")
						)
					), 					
					React.createElement("div", {className: "item"}, 
						React.createElement("div", {id: "carousel_image_3", className: "carousel_image_div"}), 
						React.createElement("div", {className: "carousel-caption"}, 
				        	React.createElement("h1", null, "Young Couple")
						)
					)
				), 

				React.createElement("a", {className: "left carousel-control", href: "#" + this.props.carouselID, role: "button", "data-slide": "prev"}, 
					React.createElement("span", {className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true"}), 
					React.createElement("span", {className: "sr-only"}, "Previous")
				), 
				React.createElement("a", {className: "right carousel-control", href: "#" + this.props.carouselID, role: "button", "data-slide": "next"}, 
					React.createElement("span", {className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true"}), 
					React.createElement("span", {className: "sr-only"}, "Next")
				)
			)			
		);
	}
});

module.exports = Carousel;
