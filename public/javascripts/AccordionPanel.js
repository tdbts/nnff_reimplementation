var React = require('react'), 
	AccordionPanelHeading = require('./AccordionPanelHeading'), 
	AccordionPanelBody = require('./AccordionPanelBody');

var AccordionPanel = React.createClass({displayName: "AccordionPanel",
	getDefaultProps: function () {
		return {
			expandedByDefault: false
		};
	}, 

	render: function () {
		return (
			React.createElement("div", {className: "panel panel-" + this.props.panelType}, 
				React.createElement(AccordionPanelHeading, React.__spread({},  this.props)), 
				React.createElement(AccordionPanelBody, React.__spread({},  this.props))
			)
		);
	}
});

module.exports = AccordionPanel;

/* 

// PROPS: 
- panelType 
- headingID 
- accordionID 
- collapseID 
- expandedByDefault
- headingText 
- bodyContent

*/
