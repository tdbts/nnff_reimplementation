var React = require('react');

var MailingListInvitation = React.createClass({displayName: "MailingListInvitation",
	render: function () {
		return (
			React.createElement("div", {id: "mailing_list_invitation_container"}, 
				React.createElement("div", {id: "mailing_list_invitation_jumbotron", className: "jumbotron"}, 
					React.createElement("div", {id: "mailing_list_invitation_icon_container"}, 
						React.createElement("span", {id: "mailing_list_invitation_icon", className: "fa fa-5x fa-envelope"})
					), 
					React.createElement("div", {id: "mailing_list_invitation_header_container"}, 
						React.createElement("h2", {id: "mailing_list_invitation_header"}, "Sign up for our mailing list today!")
					), 
					React.createElement("div", {id: "mailing_list_invitation_info_container"}, 
						React.createElement("p", {id: "mailing_list_invitation_info"}, "Receive all the latest information on exciting breakthroughs in medical treatment, news coverage, volunteer opportunities and much more.")
					), 
					React.createElement("div", {id: "mailing_list_invitation_button_container"}, 
						React.createElement("button", {id: "mailing_list_invitation_button", className: "btn btn-info btn-sm", type: "button"}, React.createElement("span", {className: "fa fa-user-plus"}), " Click to Join")
					)
				)
			)
		);
	}
});

module.exports = MailingListInvitation;
