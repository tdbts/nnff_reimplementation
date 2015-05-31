var React = require('react'), 
	LandingPage = require('./LandingPage'), 
	FactSheet = require('./FactSheet'), 
	ForProfessionals = require('./ForProfessionals'), 
	AboutUs = require('./AboutUs');

var NnffWebpage = React.createClass({
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
			}, 
			forProfessionals: {
				path: '/facts/professionals/', 
				component: <ForProfessionals />
			}, 
			aboutUs: {
				path: '/about/', 
				component: <AboutUs />
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