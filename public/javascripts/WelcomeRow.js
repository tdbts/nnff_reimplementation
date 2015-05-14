var React = require('react'), 
	TextColumn = require('./TextColumn');

var WelcomeRow = React.createClass({displayName: "WelcomeRow",
	getDefaultProps: function () {
		return {
			textColumnData: {
				thankYou: {
					attributeBase: "thank_you", 
					glyphiconStr: "search", 
					columnTitle: "INFORMATION", 
					columnText: "Thank you for visiting the National Necrotizing Fasciitis Foundation. We hope that here you will discover all of the information you need to understand necrotizing fascitiis, more commonly known as the flesh-eating bacteria."
				}, 
				experience: {
					attributeBase: "experience", 
					glyphiconStr: "heartbeat", 
					columnTitle: "EXPERIENCE", 
					columnText: "The NNFF community is comprised of tens of thousands of individuals from all over the world who have a shared experience having either survived NF, or lost a loved one to this highly fatal, devastating infection."
				}, 
				awareness: {
					attributeBase: "awareness", 
					glyphiconStr: "bullhorn", 
					columnTitle: "AWARENESS", 
					columnText: "We are strong, determined, compassionate and passionate, and in the hope of saving lives we have dedicated our efforts to bringing awareness and educating medical professionals and the public about NF."
				}, 
				support: {
					attributeBase: "support", 
					glyphiconStr: "group", 
					columnTitle: "SUPPORT", 
					columnText: "We love our NNFF community! Amazing individuals dedicate their time to help us make the public more conscious about NF! If you are seeking support in your area, here is a great place to start."
				}
			}
		};
	}, 

	getTextColumnComponent: function (columnName) {
		var columnData = this.props.textColumnData[columnName];

		return React.createElement(TextColumn, {attributeBase: columnData.attributeBase, glyphiconStr: columnData.glyphiconStr, columnTitle: columnData.columnTitle, columnText: columnData.columnText});
	},

	render: function () {
		return (
			React.createElement("div", {id: "welcome_section_wrapper"}, 
				React.createElement("div", {id: "welcome_section_container_two_rows", className: "container welcome_section_container hidden-lg"}, 
					React.createElement("div", {id: "welcome_row_top", className: "welcome_section_row row"}, 
						this.getTextColumnComponent('thankYou'), 
						this.getTextColumnComponent('experience')
					), 
					React.createElement("div", {id: "welcome_row_bottom", className: "welcome_section_row row hidden-lg"}, 
						this.getTextColumnComponent('awareness'), 
						this.getTextColumnComponent('support')
					)
				), 
				React.createElement("div", {id: "welcome_section_container_one_row", className: "container-fluid welcome_section_container visible-lg-block"}, 
					React.createElement("div", {id: "welcome_row_full_width", className: "welcome_section_row row"}, 
						this.getTextColumnComponent('thankYou'), 
						this.getTextColumnComponent('experience'), 
						this.getTextColumnComponent('awareness'), 
						this.getTextColumnComponent('support')								
					)		
				)
			)
		);
	}
});

module.exports = WelcomeRow;
