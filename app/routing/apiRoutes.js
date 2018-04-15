var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    //all friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
    });

    //add new friend...NEEDS MORE!
        //loop through friendListArray.score, add up all scores, 
        //and subtract from sum of newFriend array (look up absolute)
    app.post("/api/friends", function(req, res) {
        var newFriendArray = req.body;
        console.log(newFriendArray);
        friends.push(newFriendArray);
        res.json(newFriendArray);
      });
    
}
