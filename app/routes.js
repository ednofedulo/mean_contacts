var Contact = require('./models/contact.js');
var path = require('path');

module.exports = function(app){

	app.get('*', function(req, res) {
		console.log('default route');
	    res.sendFile(path.join(__dirname, '../public/index.html'));
	});

};

