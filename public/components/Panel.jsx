var React = require('react');

var Panel = React.createClass({
	getDefaultProps: function () {
		return {
			panelType: "danger"
		};
	},
		
	render: function () { 
		return (
			<div id={this.props.panelName + "_panel_container"} className="panel_container">
				<div className={"panel panel-" + this.props.panelType}>
					<div className="panel-heading">
						<h3>{this.props.headingText}</h3>
					</div>
					<div className="panel-body">
						{this.props.bodyContent}
					</div>
				</div>
			</div>			
		);
	}
});

module.exports = Panel;
