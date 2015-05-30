var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	FactSheet = require('./FactSheet');

var NnffWebpage = React.createClass({displayName: "NnffWebpage",
	determineViewToRender: function (urlPathname) {
		var viewToRender;
		
		var views = {
			home: {
				path: '/', 
				component: React.createElement(LandingPage, null)
			}, 
			factSheet: {
				path: '/facts/factsheet/', 
				component: React.createElement(FactSheet, null)
			}
		};

		for (var view in views) {
			if (urlPathname === views[view].path) {
				viewToRender = views[view].component;
			}		
		}

		return viewToRender;
	}, 

	render: function () {
		var currentView = this.determineViewToRender(window.location.pathname);

		return (
			React.createElement("div", {id: "page_component_anchor", className: "fullHeightWidth"}, 
				currentView
			)
		);
	}
});

module.exports = NnffWebpage;