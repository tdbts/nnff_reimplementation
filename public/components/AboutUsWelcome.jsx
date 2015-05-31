var React = require('react');

var AboutUsWelcome = React.createClass({
	render: function () {
		return (
			<div id="about_us_welcome_container" className="about_us_section">
				<h3 className="section_header">Welcome</h3>
				<p className="about_us_text">The <strong>National Necrotizing Fasciitis Foundation</strong> is a 501c3 non-profit organization founded in 1997 by two survivors of necrotizing fasciitis, Jacqueline A. Roemmele, of Watchung, New Jersey, and Donna Batdorff of Grand Rapids, Michigan.</p>
				<p className="about_us_text">Together, because of the lack of reliable information regarding the disease, it became their mission to do what they could to fill the void of information and to offer support for other victims and their families. What has since evolved in the past fifteen years of our existence has been truly inspiring and humbling. Hundreds of thousands of people from all walks of life, from all over the world, have reached out to the foundation when NF invades their lives. <strong>NNFF is the leading source of information available about this deadly disease, and has brought together hundreds of people who find kinship, support, and comfort in each other</strong>. They are proud to be fulfilling the foundation’s mission to make a difference in the understanding, awareness, diagnosis, and treatment of necrotizing fasciitis.</p>
				<p className="about_us_text">In 2000, the Jacqueline and Donna published <em>Surviving the Flesh-Eating Bacteria</em>, through Penquin-Putnam, which was lauded by renowned experts in the disease as a comprehensive and accurate resource for the general public and medical professionals as well. The second edition will be released very shortly through Outskirts Press.</p>
			</div>			
		);
	}
});

module.exports = AboutUsWelcome;
