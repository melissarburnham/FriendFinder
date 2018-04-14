window.onload = function() {

    //variables
    var questionBank = [{
        question: "1) Which lobe of the brain is responsible for visual information?",
        number: "1 out of 10"
    }, {
        question: "2) This brain region is responisble for internal regulation--temperature change, eating, and sleeping.",
        number: "2 out of 10"
    }, {
        question: "3) At what age is the brain fully developed?",
        number: "3 out of 10"
    }, {
        question: "4) Which brain region is repsonsible for spatial memeory?",
        number: "4 out of 10"
    }, {
        question: "5) Loss of cells in this region results in Parkinson's disease.",
        number: "5 out of 10"
    }, {
        question: "6) Lesions of this area result in Urbach-Wiethe (fearless) disease.",
        number: "6 out of 10"
    }, {
        question: "7) Which is the last lobe to develop?",
        number: "7 out of 10"
    }, {
        question: "8) This brain region is the major relay station for all sensory except smell.",
        number: "8 out of 10"
    }, {
        question: "9) Which lobe of the brain is repsonsible for making decisions?",
        number: "9 out of 10"
    }, {
        question: "10) If you suffered a concussion and experience disorganized thoughts and problems with vision, which two lobes were impacted during the injury?",
        number: "10 out of 10"
    }];

    var currentQuestion = 0;

    function displayQuestion(currentQuestion){
    
        console.log("currentquestion " + currentQuestion);
    
        $("#question").text(questionBank[currentQuestion].question + questionBank[currentQuestion].number);
     }

     function loadQuestion (){
        if (currentQuestion == 9){
            // displayFriend();
        }else{
        $("#question").empty();
        currentQuestion++;
        displayQuestion(currentQuestion);
        }
    };

    displayQuestion(currentQuestion);






    
    }

