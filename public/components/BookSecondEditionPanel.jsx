var React = require('react'), 
	Panel = require('./Panel'), 
	Blockquote = require('./Blockquote');

var BookSecondEditionPanel = React.createClass({
	getDefaultProps: function () {
		return {
			panelName: "book_second_edition"
		};	
	}, 

	getBodyContent: function () {
		var dateQuote = (
				<div id="date_quote_wrapper">
					<span>&quot;</span>
					<em className="inline_book_title">Surviving the Flesh&#45;Eating Bacteria</em>
					<span> underscores the devastating impact of necrotizing fasciitis and the human tragedies and triumphs that result.  I recommend this book to colleagues and patients alike as a highly accurate and accessible source of valuable information about this deadly infection.</span>
					<span>&quot;</span>
				</div>
			);

		return (
			<div id={this.props.panelName + "_panel_body_content"}>
				<img id="book_cover_image" src="images/book_cover.jpg" />
				<p id={this.props.panelName + "_panel_lead"} className="lead"><strong>The leading resource regarding NF will be released soon in trade paperback and e-book.</strong></p>			
				<Blockquote quoteText={dateQuote} footerText="James B. Dale, MD, Chief, Division of Infectious Diseases University of Tennessee College of Medicine" />
				<Blockquote quoteText={"\"This book serves as a valuable distillation of information for those who have experienced strep NF themselves or in loved ones, as well as for the general public.  The true-life case histories are heart-wrenching, often sad, and sometimes inspiring.\""} footerText="Alan L. Bisno, MD, Chief Medical Service Professor and Vice Chairman University of Miami Medical Center" />
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
