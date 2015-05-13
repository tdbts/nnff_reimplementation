var React = require('react'), 
	$ = window.jQuery || require('jquery');

var CommonNameBanner = React.createClass({displayName: "CommonNameBanner",
	getInitialState: function () {
		return {
			bannerContainerHeight: {
				height: 0
			}
		};
	}, 

	getDefaultProps: function () {
		return {
			banner: $('#common_name_banner')
		};
	}, 

	setBannerContainerHeight: function () {
		var banner = $('#common_name_banner');

		this.setState({
			bannerContainerHeight: {
				height: banner.height() + parseInt(banner.css('padding-top')) + parseInt(banner.css('padding-bottom'))
			}
		});
	}, 

	componentDidMount: function () {
		
		this.setBannerContainerHeight();

		window.addEventListener('resize', this.setBannerContainerHeight);
	}, 

	componentWillUnmount: function () {
		window.removeEventListener('resize', this.setBannerContainerHeight);
	},

	render: function () {
		return (
			React.createElement("div", {id: "common_name_banner_container", style: this.state.bannerContainerHeight}, 
				React.createElement("div", {id: "common_name_banner"}, 
					React.createElement("h1", {id: "banner_foundation_name"}, React.createElement("span", {id: "national_text", className: "text_block"}, "The National "), React.createElement("span", {id: "banner_latin_name", className: "text_block"}, "Necrotizing Fasciitis"), React.createElement("span", {id: "foundation_text", className: "text_block"}, " Foundation")), 
					React.createElement("h4", {id: "banner_common_name"}, "Commonly known as the “Flesh-Eating” Bacteria")
				)
			)
		);
	}
});

module.exports = CommonNameBanner;
