var React = require('react');

var AboutUsMission = React.createClass({
	render: function () {
		return (
			<div id="about_us_mission_container" className="about_us_section">
				<h3 className="section_header">Mission &amp; Vision</h3>
				<blockquote id="nnff_mission_and_vision">
					<p>to educate for public awareness</p> 
					<p>regarding recognition of symptoms and preventative measures;</p>
					<p>to advocate research;</p>
					<p>to offer resources; and</p>
					<p>to offer support for those affected by necrotizing fasciitis,</p>
					<p>so that we may help save lives.</p>						
				</blockquote>
			</div>			
		);
	}
});

module.exports = AboutUsMission;
