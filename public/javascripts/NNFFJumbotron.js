var React = require('react'), 
	$ = window.jQuery || require('jquery');

var NNFFJumbotron = React.createClass({displayName: "NNFFJumbotron",
	getInitialState: function () {
		return {
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
		
		return prevStateKey['id'] === (index + 1) % 3 ? 1 : 0;
	}, 

	componentDidMount: function () {
		var index = 0, 
			previousIndex = null, 
			currentVisibleBackground, 
			nextVisibleBackground, 
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
	}, 

	render: function () {
		return (
			React.createElement("div", {id: "nnff_jumbotron", className: "jumbotron"}, 
				React.createElement("div", {id: "mother_child_jumbotron", className: "nnff_jumbotron_container mother_child_background container", style: this.state.motherChildStyle}, 
					React.createElement("h1", {id: "mother_child_header", className: "nnff_jumbotron_header"}, "NF can strike anyone.")
				), 
				React.createElement("div", {id: "couple_grass_jumbotron", className: "nnff_jumbotron_container couple_grass_background container", style: this.state.coupleGrassStyle}, 
					React.createElement("h1", {id: "couple_grass_header", className: "nnff_jumbotron_header"}, "Any age. Any gender. Any ethnicity.")
				), 
				React.createElement("div", {id: "grandparents_bw_jumbotron", className: "nnff_jumbotron_container grandparents_bw_background container", style: this.state.grandparentsBwStyle}, 
					React.createElement("h1", {id: "grandparents_bw_header", className: "nnff_jumbotron_header"}, "Get the facts, help save lives.")
				)
			)
		);
	}
});

module.exports = NNFFJumbotron;