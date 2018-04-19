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

        var newFriend = {
            name: newUser.name,
            photo: newUser.photo,
            scores: []
          };
    

  for(var i=0; i < newUserScores.length; i++){
    scoreArray.push( parseInt(newUserScores[i]) )
  }
    newFriend.scores = scoreArray;


  for(var i=0; i < friends.length; i++){
    var difference = 0;
    for(var j=0; j < newFriend.scores.length; j++){
      difference += Math.abs( newFriend.scores[j] - friends[i].scores[j] );
    }
    differenceArray.push(difference);
  }

  for(var i=1; i < differenceArray.length; i++){
    
    if(differenceArray[i] <= differenceArray[bestMatch]){
      bestMatch = i;
    }

  }
  var newBestFriend = friends[bestMatch];
  console.log(newBestFriend);
  res.json(newBestFriend);

  friends.push(newFriend);

});

}


