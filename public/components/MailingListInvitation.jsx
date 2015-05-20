var React = require('react');

var MailingListInvitation = React.createClass({
	render: function () {
		return (
			<div id="mailing_list_invitation_container">
				<div id="mailing_list_invitation_jumbotron" className="jumbotron">
					<div id="mailing_list_invitation_icon_container">
						<span id="mailing_list_invitation_icon" className="fa fa-5x fa-envelope"></span>
					</div>
					<div id="mailing_list_invitation_header_container">
						<h2 id="mailing_list_invitation_header">Sign up for our mailing list today!</h2>
					</div>
					<div id="mailing_list_invitation_info_container">
						<p id="mailing_list_invitation_info">Receive all the latest information on exciting breakthroughs in medical treatment, news coverage, volunteer opportunities and much more.</p>
					</div>
					<div id="mailing_list_invitation_button_container">
						<button id="mailing_list_invitation_button" className="btn btn-info btn-sm" type="button"><span className="fa fa-user-plus"></span> Click to Join</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MailingListInvitation;
