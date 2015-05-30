var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	FactSheet = require('./FactSheet');

var NnffWebpage = React.createClass({
	getInitialState: function () {
		return {
			currentPageView: this.determineViewToRender()
		};
	}, 

	determineViewToRender: function (urlPathname) {
		var viewToRender;
		
		var views = {
			home: {
				path: '/', 
				component: <LandingPage />
			}, 
			factSheet: {
				path: '/facts/factsheet/', 
				component: <FactSheet />
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
			<div id="page_component_anchor" className="fullHeightWidth">
				{currentView}
			</div>
		);
	}
});

module.exports = NnffWebpage;