var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
    //all friends
	app.get("/api/friends", function(req, res) {
		res.json(friends);
    });

    //add new friend...NEEDS MORE!
        //loop through friendListArray.score, add up all scores, 
        //and subtract from sum of newFriend array (look up absolute)
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var newScore = 0;
        var newScoreArray= [];
        var oldScoresArray =[];
        var newUserScores = newUser.scores;
        var oldScoreSum;
        // console.log(newUser.scores);
        res.send(newUser);

        for(var i = 0; i < newUserScores.length; i++){
            //turns all scores into integers
            newUserScores[i] = +newUserScores[i];
            newScoreArray.push(newUserScores[i]);
        } 
        //add all numbers in newScoreArray
        var newScoreSum = newScoreArray.reduce(add, 0);
        function add(a, b) {
        return a + b;
        }


        friends.forEach(element => {
            oldScoreSum = element.scores.reduce(add,0);
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }
            oldScoresArray.push(oldScoreSum);
        });

        // oldScoresArray.forEach(element => {
        //     oldScoresArray = +oldScoresArray;                                    
        // });

            
        


        console.log("NEW SUM:" + newScoreSum); 
        console.log("NEW:" + newScoreArray);
        console.log("OLD:" + oldScoresArray);
        
        // res.send(bestMatch);
        friends.push(newUser);
     });
}

// 
