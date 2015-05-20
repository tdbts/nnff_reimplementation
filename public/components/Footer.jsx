var React = require('react');

var Footer = React.createClass({
	render: function () {
		return (
			<footer id="nnff_footer">
				<div id="footer_content_container" className="container">
					<div id="social_links" className="footer_content">
						<ul className="list-inline">
							<li id="envelope_icon" className="footer_icon">
								<a className="footer_link" href="#"><span className="fa fa-2x fa-envelope"></span></a>
							</li>
							<li id="facebook_icon" className="footer_icon">
								<a className="footer_link" href="#"><span className="fa fa-2x fa-facebook-official"></span></a>
							</li>
							<li id="twitter_icon" className="footer_icon">
								<a className="footer_link" href="#"><span className="fa fa-2x fa-twitter"></span></a>
							</li>
						</ul>
					</div>
					<div id="copyright_container" className="footer_content">
						<p id="copyright"><span className="fa fa-copyright"></span> 2015 | National Necrotizing Fasciitis Foundation</p>
						<p id="rights_reserved">All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;
