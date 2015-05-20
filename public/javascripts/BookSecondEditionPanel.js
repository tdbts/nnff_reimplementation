var React = require('react'), 
	Panel = require('./Panel'), 
	Blockquote = require('./Blockquote');

var BookSecondEditionPanel = React.createClass({displayName: "BookSecondEditionPanel",
	getDefaultProps: function () {
		return {
			panelName: "book_second_edition", 
			bookTitle: React.createElement("em", null, "Surviving the Flesh-Eating Bacteria")
		};	
	}, 

	getBodyContent: function () {
		return (
			React.createElement("div", {id: this.props.panelName + "_panel_body_content"}, 
				React.createElement("img", {id: "book_cover_image", src: "images/book_cover.jpg"}), 
				React.createElement("p", {id: this.props.panelName + "_panel_lead", className: "lead"}, React.createElement("strong", null, "The leading resource regarding NF will be released soon in trade paperback and e-book.")), 			
				React.createElement(Blockquote, {quoteText: "\"Surviving the Flesh-Eating Bacteria underscores the devastating impact of necrotizing fasciitis and the human tragedies and triumphs that result.  I recommend this book to colleagues and patients alike as a highly accurate and accessible source of valuable information about this deadly infection.\"", footerText: "James B. Dale, MD, Chief, Division of Infectious Diseases University of Tennessee College of Medicine"}), 
				React.createElement(Blockquote, {quoteText: "\"This book serves as a valuable distillation of information for those who have experienced strep NF themselves or in loved ones, as well as for the general public.  The true-life case histories are heart-wrenching, often sad, and sometimes inspiring.\"", footerText: "Alan L. Bisno, MD, Chief Medical Service Professor and Vice Chairman University of Miami Medical Center"})
			)
		);	
	}, 

	render: function () {
		return (
			React.createElement(Panel, {panelName: "book_second_edition", panelType: "info", headingText: "Second Edition to be Released Soon", bodyContent: this.getBodyContent()})
		);
	}
});

module.exports = BookSecondEditionPanel;
