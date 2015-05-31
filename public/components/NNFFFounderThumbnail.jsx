var React = require('react');

var NNFFFounderThumbnail = React.createClass({
	render: function () {
		return (
			<div className="thumbnail nnff_founder_thumbnail">
				<img className="nnff_founder_image img-rounded" src={this.props.imageSource} />
				<div className="caption nnff_founder_caption">
					<h4 className="founder_name">{this.props.founderName}</h4>
					<a href={this.props.storyUrl} className="survivor_story_link"><h5>Survivor Story</h5></a>
					<a href={this.props.emailLink} className="founder_email_link"><span className="fa fa-2x fa-envelope email_link_icon"></span></a>
				</div>
			</div>			
		);
	}
});

module.exports = NNFFFounderThumbnail;
