$("#submit").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
            name: $("#name").val().trim(),
            picture: $("#picture").val().trim(),
            scores: [
            $('#qOne').val().trim(),
            $('#qTwo').val().trim(),
            $('#qThree').val().trim(),
            $('#qFour').val().trim(),
            $('#qFive').val().trim(),
            $('#qSix').val().trim(),
            $('#qSeven').val().trim(),
            $('#qEight').val().trim(),
            $('#qNine').val().trim(),
            $('#qTen').val().trim()
            ]
    };
$.post("/api/friends", newFriend)
.then(function(data) {
alert("You've been added to our database.");
});

//check to see if all areas are filled out
//create pop up after submission
//clear field after submission
});

alert("hi");