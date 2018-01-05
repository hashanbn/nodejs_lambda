'use strict';

var AWS = require('aws-sdk');

exports.lambdaInvoke = function(req, res) {
	AWS.config.update({accessKeyId: req.body['accessKey'], secretAccessKey: req.body['secretKey'], region: req.body['region']});

	var lambda = new AWS.Lambda();
	var params = {
  		FunctionName: 'testFunc', /* required */
  		Payload: JSON.stringify(req.body['payload'])
	};

	lambda.invoke(params, function(err, data) {
  		if (err) console.log(err, err.stack); // an error occurred
  		else     res.json(data);           // successful response
	});
}


