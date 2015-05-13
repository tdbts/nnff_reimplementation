var React = require('react'), 
	$ = window.jQuery || require('jquery');

var CommonNameBanner = React.createClass({
	render: function () {
		return (
			<div id="common_name_banner">
				<h1 id="banner_foundation_name"><span id="national_text" className="text_block">The National </span><span id="banner_latin_name" className="text_block">Necrotizing Fasciitis</span><span id="foundation_text" className="text_block"> Foundation</span></h1>
				<h4 id="banner_common_name">Commonly known as the &ldquo;Flesh-Eating&rdquo; Bacteria</h4>
			</div>
		);
	}
});

module.exports = CommonNameBanner;
