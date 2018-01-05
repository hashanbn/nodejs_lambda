'use strict';
module.exports = function(app) {
	var apiCalls = require('../controllers/apiCallController');

	app.route('/lambda_invoke')
	   .post(apiCalls.lambdaInvoke);
	
};
