var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    //all friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
    });

    //add new friend...NEEDS MORE!
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
        res.json(newFriend);
      });
    
}
