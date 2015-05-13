var express = require('express'), 
	router = express.Router(), 
	setActiveTab = require('../src/setActiveTab');

router.get('*', function (req, res, next) {
	req.activeRoute = req.activeRoute || '/'; 

	req.viewOptions = {
		title: "NNFF | The National Necrotizing Fasciitis Foundation", 
		activeTab: req.activeRoute
	};

	next();
});

/* GET home page. */
router.get('/', function(req, res) {
	
	res.render('index', req.viewOptions);
});

router.get('/:path/*', function (req, res, next) {

	setActiveTab(req);

	res.render('index', req.viewOptions);
});


module.exports = router;
