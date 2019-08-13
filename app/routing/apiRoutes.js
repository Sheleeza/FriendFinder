
// Load data from api
var friends = require("../data/friend");

// Export API routes
module.exports = function(app) {

	// Get request to return a list of friends in JSON
	app.get('/api/friend', function(req, res) {
        res.json(friend);
	});

	// Post request to submit form data to server
	app.post('/api/friend', function(req, res) {
        
	});
};
