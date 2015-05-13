var React = require('react');

var Carousel = React.createClass({
	render: function () {
		return (
			<div id={this.props.carouselID} className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target={"#" + this.props.carouselID} data-slide-to="0" className="active"></li>
					<li data-target={"#" + this.props.carouselID} data-slide-to="1"></li>
					<li data-target={"#" + this.props.carouselID} data-slide-to="2"></li>
				</ol>

				<div className="carousel-inner" role="listbox">
					<div className="item active">
						<div id="carousel_image_1" className="carousel_image_div" ></div>
						<div className="carousel-caption">
				        	<h1>Mother and Child</h1>
						</div>
					</div>
					<div className="item">
						<div id="carousel_image_2" className="carousel_image_div"></div>
						<div className="carousel-caption">
				        	<h1>Elderly Woman</h1>
						</div>
					</div>					
					<div className="item">
						<div id="carousel_image_3" className="carousel_image_div" ></div>
						<div className="carousel-caption">
				        	<h1>Young Couple</h1>
						</div>
					</div>
				</div>

				<a className="left carousel-control" href={"#" + this.props.carouselID} role="button" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="right carousel-control" href={"#" + this.props.carouselID} role="button" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>			
		);
	}
});

module.exports = Carousel;
