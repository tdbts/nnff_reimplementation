var React = require('react');

var WelcomeRow = React.createClass({
	render: function () {
		return (
			<div id="welcome_section_wrapper">
				<div id="welcome_section_container_two_rows" className="container welcome_section_container hidden-lg">
					<div id="welcome_row_top" className="welcome_section_row row">
						<div id="thank_you_column" className="column">
							<div className="glyphicon_container">
								<span id="thank_you_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-search"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; INFORMATION &#8226;</h5>
							</div>
							<div className="column_text_container">
								<p className="column_text">Thank you for visiting the National Necrotizing Fasciitis Foundation. We hope that here you will discover all of the information you need to understand necrotizing fascitiis, more commonly known as the flesh-eating bacteria.</p>
							</div>
						</div>
						<div id="community_column" className="column">
							<div className="glyphicon_container">
								<span id="community_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-heartbeat"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; EXPERIENCE &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">The NNFF community is comprised of tens of thousands of individuals from all over the world who have a shared experience having either survived NF, or lost a loved one to this highly fatal, devastating infection.</p>
							</div>
						</div>
					</div>
					<div id="welcome_row_bottom" className="welcome_section_row row hidden-lg">
						<div id="awareness_column" className="column">
							<div className="glyphicon_container">
								<span id="awareness_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-bullhorn"></span> 
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; AWARENESS &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">We are strong, determined, compassionate and passionate, and in the hope of saving lives we have dedicated our efforts to bringing awareness and educating medical professionals and the public about NF.</p>
							</div>
						</div>
						<div id="support_column" className="column">
							<div className="glyphicon_container">
								<span id="support_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-group"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; SUPPORT &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">We love our NNFF community! Amazing individuals dedicate their time to help us make the public more conscious about NF! If you are seeking support in your area, here is a great place to start.</p>
							</div>
						</div>										
					</div>
				</div>


				<div id="welcome_section_container_one_row" className="container-fluid welcome_section_container visible-lg-block">
					<div id="welcome_row_full_width" className="welcome_section_row row">
						<div id="thank_you_column" className="column">
							<div className="glyphicon_container">
								<span id="thank_you_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-search"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; INFORMATION &#8226;</h5>
							</div>
							<div className="column_text_container">
								<p className="column_text">Thank you for visiting the National Necrotizing Fasciitis Foundation. We hope that here you will discover all of the information you need to understand necrotizing fascitiis, more commonly known as the flesh-eating bacteria.</p>
							</div>
						</div>
						<div id="community_column" className="column">
							<div className="glyphicon_container">
								<span id="community_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-heartbeat"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; EXPERIENCE &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">The NNFF community is comprised of tens of thousands of individuals from all over the world who have a shared experience having either survived NF, or lost a loved one to this highly fatal, devastating infection.</p>
							</div>
						</div>
						<div id="awareness_column" className="column">
							<div className="glyphicon_container">
								<span id="awareness_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-bullhorn"></span> 
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; AWARENESS &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">We are strong, determined, compassionate and passionate, and in the hope of saving lives we have dedicated our efforts to bringing awareness and educating medical professionals and the public about NF.</p>
							</div>
						</div>
						<div id="support_column" className="column">
							<div className="glyphicon_container">
								<span id="support_column_glyphicon" className="welcome_column_glyphicon fa fa-3x fa-group"></span>
							</div>
							<div className="column_title_container">
								<h5 className="column_title">&#8226; SUPPORT &#8226;</h5>
							</div>						
							<div className="column_text_container">
								<p className="column_text">We love our NNFF community! Amazing individuals dedicate their time to help us make the public more conscious about NF! If you are seeking support in your area, here is a great place to start.</p>
							</div>
						</div>										
					</div>		
				</div>
			</div>
		);
	}
});

module.exports = WelcomeRow;
