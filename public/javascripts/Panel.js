var React = require('react');

var Panel = React.createClass({displayName: "Panel",
	getDefaultProps: function () {
		return {
			panelType: "danger"
		};
	},
		
	render: function () { 
		return (
			React.createElement("div", {id: this.props.panelName + "_panel_container", className: "panel_container"}, 
				React.createElement("div", {className: "panel panel-" + this.props.panelType}, 
					React.createElement("div", {className: "panel-heading"}, 
						React.createElement("h3", null, this.props.headingText)
					), 
					React.createElement("div", {className: "panel-body"}, 
						this.props.bodyContent
					)
				)
			)			
		);
	}
});

module.exports = Panel;
