var React = require('react');

var NNFFHeader = React.createClass({
	render: function () {
		return (
			<div id={this.props.headerName + "_jumbotron"} className="jumbotron header_jumbotron">
				<div id={"container_inside_" + this.props.headerName + "_header"} className="container container_inside_header">
					<div id={this.props.headerName + "_header"} className="page-header header">
						<span id={this.props.headerName + "_header_text"} className="header_text">{this.props.headerText}</span>
					</div>
				</div>
			</div>				
		);
	}
});

module.exports = NNFFHeader;
