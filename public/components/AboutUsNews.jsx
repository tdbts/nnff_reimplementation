var React = require('react');

var AboutUsNews = React.createClass({
	render: function () {
		return (
			<div id="about_us_news_container" className="about_us_section">
				<h3 className="section_header">NF in the News</h3>
				<p className="about_us_text">The National Necrotizing Fasciitis Foundation is often called upon to offer expert opinion and commentary regarding cases of NF that are covered in the media. <strong>We appreciate each and every opportunity to &quot;get the word out.&quot;</strong> This past year, we have assisted the producers of many news sources including <em>Dr. Oz, Dr. Drew, In Touch</em> magazine, and many, many local and national venues.</p>
			</div>			
		);
	}
});

module.exports = AboutUsNews;
