var React = require('react'), 
	Panel = require('./Panel'), 
	Blockquote = require('./Blockquote');

var BookSecondEditionPanel = React.createClass({
	getDefaultProps: function () {
		return {
			panelName: "book_second_edition", 
			bookTitle: <em>Surviving the Flesh-Eating Bacteria</em>
		};	
	}, 

	getBodyContent: function () {
		return (
			<div id={this.props.panelName + "_panel_body_content"}>
				<img id="book_cover_image" src="images/book_cover.jpg" />
				<p id={this.props.panelName + "_panel_lead"} className="lead"><strong>The leading resource regarding NF will be released soon in trade paperback and e-book.</strong></p>			
				<Blockquote quoteText="&quot;Surviving the Flesh-Eating Bacteria underscores the devastating impact of necrotizing fasciitis and the human tragedies and triumphs that result.  I recommend this book to colleagues and patients alike as a highly accurate and accessible source of valuable information about this deadly infection.&quot;" footerText="James B. Dale, MD, Chief, Division of Infectious Diseases University of Tennessee College of Medicine" />
				<Blockquote quoteText="&quot;This book serves as a valuable distillation of information for those who have experienced strep NF themselves or in loved ones, as well as for the general public.  The true-life case histories are heart-wrenching, often sad, and sometimes inspiring.&quot;" footerText="Alan L. Bisno, MD, Chief Medical Service Professor and Vice Chairman University of Miami Medical Center" />
			</div>
		);	
	}, 

	render: function () {
		return (
			<Panel panelName="book_second_edition" panelType="info" headingText="Second Edition to be Released Soon" bodyContent={this.getBodyContent()} />
		);
	}
});

module.exports = BookSecondEditionPanel;
