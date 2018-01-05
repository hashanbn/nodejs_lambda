var express = require('express'),
	app = express(),
	port = process.env.PORT || 5000,
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var routes = require('./api/routes/apiCallRoutes');
routes(app);

app.listen(port);

console.log('API Calls REST Api started on : ' + port);

