var React = require('react'), 
	$ = window.jQuery || require('jquery');

var NNFFJumbotron = React.createClass({displayName: "NNFFJumbotron",
	getInitialState: function () {
		return {
			jumbotronHeight: {
				height: 0
			}, 

			motherChildStyle: {
				opacity: 1, 
				id: 0
			},

			coupleGrassStyle: {
				opacity: 0, 
				id: 1
			},

			grandparentsBwStyle: {
				opacity: 0, 
				id: 2
			}
		};
	}, 

	checkModuloValue: function (prevStateKey, index) {
		
		return prevStateKey.id === (index + 1) % 3 ? 1 : 0;
	}, 

	setJumbotronHeight: function () {
		this.setState({
			jumbotronHeight: {
				height: Math.max($('.nnff_jumbotron_container').height())
			}
		});
	}, 

	componentDidMount: function () {
		var index = 0, 
			jumbotronStates = [
				'motherChildStyle', 
				'coupleGrassStyle', 
				'grandparentsBwStyle'
			];

		window.setInterval(function () {

			index = index === 3 ? 0 : index;

			this.setState(function (prevState) {
				return {
					motherChildStyle: {
						opacity: this.checkModuloValue(prevState.motherChildStyle, index),  
						id: prevState.motherChildStyle.id
					}, 
					coupleGrassStyle: {
						opacity: this.checkModuloValue(prevState.coupleGrassStyle, index), 
						id: prevState.coupleGrassStyle.id
					}, 
					grandparentsBwStyle: {
						opacity: this.checkModuloValue(prevState.grandparentsBwStyle, index), 
						id: prevState.grandparentsBwStyle.id
					}
				};
			});

			index++;

		}.bind(this), 5000);

		this.setJumbotronHeight();
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "nnff_jumbotron", className: "jumbotron", style: this.state.jumbotronHeight}, 
				React.createElement("div", {id: "jumbotron_relative_wrapper", className: "relative_wrapper"}, 
					React.createElement("div", {id: "mother_child_jumbotron", className: "nnff_jumbotron_container mother_child_background container", style: this.state.motherChildStyle}, 
						React.createElement("h1", {id: "mother_child_header", className: "nnff_jumbotron_header"}, "NF can strike anyone.")
					), 
					React.createElement("div", {id: "couple_grass_jumbotron", className: "nnff_jumbotron_container couple_grass_background container", style: this.state.coupleGrassStyle}, 
						React.createElement("h1", {id: "couple_grass_header", className: "nnff_jumbotron_header"}, "Any age. Any gender. Any ethnicity.")
					), 
					React.createElement("div", {id: "grandparents_bw_jumbotron", className: "nnff_jumbotron_container grandparents_bw_background container", style: this.state.grandparentsBwStyle}, 
						React.createElement("h1", {id: "grandparents_bw_header", className: "nnff_jumbotron_header"}, "Get the facts, help save lives.")
					), 
					React.createElement("div", {id: "jumbotron_donation_button_container", className: "fullHeightWidth"}, 
						React.createElement("button", {id: "jumbotron_donation_button", className: "btn btn-danger jumbotron_button"}, React.createElement("span", {className: "fa fa-heartbeat"}), " Make a Donation")
					), 
					React.createElement("div", {id: "jumbotron_share_button_container", className: "fullHeightWidth"}, 
						React.createElement("button", {id: "jumbotron_share_button", className: "btn btn-warning jumbotron_button"}, React.createElement("span", {className: "fa fa-newspaper-o"}), " Share Your Experience")
					)
				)	
			)
		);
	}
});

module.exports = NNFFJumbotron;
