var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	FactSheet = require('./FactSheet');

var NnffWebpage = React.createClass({displayName: "NnffWebpage",
	getInitialState: function () {
		return {
			currentPageView: this.determineViewToRender()
		};
	}, 

	determineViewToRender: function () {
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
			if (window.location.pathname === views[view].path) {
				viewToRender = views[view].component;
			}		
		}

		return viewToRender;
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "#page_component_anchor", className: "fullHeightWidth"}, 
				this.state.currentPageView
			)
		);
	}
});

module.exports = NnffWebpage;