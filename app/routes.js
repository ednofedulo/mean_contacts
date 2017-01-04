var Contact = require('./models/contact.js');
var path = require('path');

module.exports = function(app){

	app.get('/teste', function(req, res) {
		console.log('second route');
	    res.sendFile(path.join(__dirname,'../public/teste.html'));
	});

	/*app.get('*', function(req, res) {
		console.log('default route');
	    res.sendFile(path.join(__dirname + '/public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
	});*/

	

};

