var React = require('react'), 
	NNFFHeader = require('./NNFFHeader');

var AboutUs = React.createClass({
	render: function () {
		return (
			<div id="about_us_page_container">
				<NNFFHeader headerName="about_us" headerText="About Us" />
				<div id="about_us_content_container" className="container">
					<div id="about_us_content_row" className="row">
						<div className="col-md-3">
							<div id="nnff_founder_thumbnails_header">
								<h3 className="section_header">NNFF Executive Directors</h3>
							</div>
							<div className="thumbnail nnff_founder_thumbnail">
								<img className="nnff_founder_image img-rounded" src="/images/jackie-new-brand.jpg" />
								<div className="caption nnff_founder_caption">
									<h4>Jacqueline Roemmele</h4>
									<h5>Survivor Story</h5>
									<a href="#"><span className="fa fa-2x fa-envelope"></span></a>
								</div>
							</div>
							<div className="thumbnail nnff_founder_thumbnail">	
								<img className="nnff_founder_image img-rounded" src="/images/donna_batdorff_img.jpg" />
								<div className="caption nnff_founder_caption">
									<h4>Donna Batdorff</h4>
									<h5>Survivor Story</h5>
									<a href="#"><span className="fa fa-2x fa-envelope"></span></a>
								</div>
							</div>
						</div>
						<div className="col-md-9">
							<div id="about_us_welcome_container">
								<h3 className="section_header">Welcome</h3>
								<p>The <strong>National Necrotizing Fasciitis Foundation</strong> is a 501c3 non-profit organization founded in 1997 by two survivors of necrotizing fasciitis, Jacqueline A. Roemmele, of Watchung, New Jersey, and Donna Batdorff of Grand Rapids, Michigan.</p>
								<p>Together, because of the lack of reliable information regarding the disease, it became their mission to do what they could to fill the void of information and to offer support for other victims and their families. What has since evolved in the past fifteen years of our existence has been truly inspiring and humbling. Hundreds of thousands of people from all walks of life, from all over the world, have reached out to the foundation when NF invades their lives. NNFF is the leading source of information available about this deadly disease, and has brought together hundreds of people who find kinship, support, and comfort in each other. They are proud to be fulfilling the foundation’s mission to make a difference in the understanding, awareness, diagnosis, and treatment of necrotizing fasciitis.</p>
								<p>In 2000, the Jacqueline and Donna published <em>Surviving the Flesh-Eating Bacteria</em>, through Penquin-Putnam, which was lauded by renowned experts in the disease as a comprehensive and accurate resource for the general public and medical professionals as well. The second edition will be released very shortly.</p>
							</div>
							<div id="about_us_mission_container">
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
							<div id="about_us_news_container">
								<h3 className="section_header">NF in the News</h3>
								<p>The National Necrotizing Fasciitis Foundation is often called upon to offer expert opinion and commentary regarding cases of NF that are covered in the media. We appreciate each and every opportunity to "get the word out". This past year, we have assisted the producers of many news sources including <em>Dr. Oz, Dr. Drew, In Touch</em> magazine, and many, many local and national venues.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AboutUs;
	