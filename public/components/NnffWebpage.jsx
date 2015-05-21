var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	FactSheet = require('./FactSheet');

var NnffWebpage = React.createClass({
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
				component: <LandingPage />
			}, 
			factSheet: {
				path: '/facts/factsheet/', 
				component: <FactSheet />
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
			<div id="#page_component_anchor" className="fullHeightWidth">
				{this.state.currentPageView}
			</div>
		);
	}
});

module.exports = NnffWebpage;