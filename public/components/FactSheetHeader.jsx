var React = require('react');

var FactSheetHeader = React.createClass({
	render: function () {
		return (
			<div id="faqs_jumbotron" className="jumbotron">
				<div id="container_inside_faqs_header" className="container">
					<div id="faqs_header" className="page-header">
						<span id="faqs_header_text">Fact Sheet</span>
					</div>
				</div>
			</div>			
		);
	}
});

module.exports = FactSheetHeader;
