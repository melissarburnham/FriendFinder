var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    //all friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var newUserScores = newUser.scores;        
        var scoreArray= [];
        var newBestFriend;
        var differenceArray = [];
        var bestMatch = 0; 

        var newUserFriend = {
            name: newUser.name,
            picture: newUser.picture,
            scores: []
          };
    
//loop through new scores, push to scoreArray and set to newUserFriend.scores
    for(var i=0; i < newUserScores.length; i++){
        scoreArray.push( parseInt(newUserScores[i]) )
    }
        newUserFriend.scores = scoreArray;

//loop through friends in database, subtract from newUserFriend scores and push to difference array
    for(var i=0; i < friends.length; i++){
        var difference = 0;
        for(var j=0; j < newUserFriend.scores.length; j++){
        difference += Math.abs( newUserFriend.scores[j] - friends[i].scores[j] );
        }
        differenceArray.push(difference);
    }
//loop through difference array to find the bestMatch position and set it to that index.
    for(var i=1; i < differenceArray.length; i++){
        if(differenceArray[i] <= differenceArray[bestMatch]){
        bestMatch = i;
        }
    }
    var newBestFriend = friends[bestMatch];
    console.log(newBestFriend);
    res.json(newBestFriend);

    friends.push(newUserFriend);

});

}


