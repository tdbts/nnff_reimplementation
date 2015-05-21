var React = require('react');

var AccordionBodyStatistics = React.createClass({displayName: "AccordionBodyStatistics",
	render: function () {
		return (
			React.createElement("div", {id: "statistics_content", className: "panel_body_content"}, 
				React.createElement("p", null, "Statistics regarding the incidence of NF in the United States are tough to determine. The main reason for this is that while the CDC tracks cases of NF caused by group A streptococcus (GAS), it does NOT track cases of NF caused by the handful of other bacteria that also cause NF."), 			
				React.createElement("p", null, "It is generally agreed by experts that ", React.createElement("strong", null, "there are between 1 and 5 cases of NF caused by group A strep per 100,000 people per year"), ", however, this number seems to be increasing for reasons as yet unknown. Using this estimate — just for NF cases caused by group A strep, we can see the staggering numbers (below). Combine this with the as yet unquantifiable numbers of people who contract NF from other forms of bacteria, the statistics are frightening."), 
				React.createElement("table", {id: "statistics_content_table", className: "table table-striped table-bordered"}, 
					React.createElement("thead", null, 
						React.createElement("tr", null, 
							React.createElement("th", {className: "fact_sheet_table_header"}, "# of Cases Per 100,000 People"), 
							React.createElement("th", {className: "fact_sheet_table_header"}, "# of Cases Caused by Group A Strep Per Year")
						)
					), 
					React.createElement("tbody", null, 
						React.createElement("tr", null, 
							React.createElement("td", null, "1"), 
							React.createElement("td", null, "3,150")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, "2"), 
							React.createElement("td", null, "6,300")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, "3"), 
							React.createElement("td", null, "9,450")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, "4"), 
							React.createElement("td", null, "12,600")
						), 
						React.createElement("tr", null, 
							React.createElement("td", null, "5"), 
							React.createElement("td", null, "15,750")
						)
					), 
					React.createElement("caption", {id: "statistics_content_caption"}, "Based upon US population of 315 million")
				), 
				React.createElement("a", {id: "statistics_content_report_link", href: "http://www.cdc.gov/abcs/reports-findings/survreports/gas12.pdf"}, React.createElement("span", {className: "fa fa-external-link"}), " 2012 Report by the Active Bacterial Core Surveillance (ABC) Emerging Infections Program Network")
			)
		);
	}
});

module.exports = AccordionBodyStatistics;
