//initialize all variables
var goalNumber;
var wins = 0;
var losses =0;
var totalScore;
var amethystValue;
var emeraldValue;
var rubyValue;
var tigerseyeValue;
//resetGame - set values for goal number and crystal values
function resetGame() {
	goalNumber = Math.floor(Math.random()*102)+19;
	amethystValue = Math.floor(Math.random()*12)+1;
	emeraldValue = Math.floor(Math.random()*12)+1;
	rubyValue = Math.floor(Math.random()*12)+1;
	tigerseyeValue = Math.floor(Math.random()*12)+1;
	totalScore = 0;

}

//onClick function for gems
$(".gem").on("click", function() {
    var pressed = $(this).attr("value");
        if (pressed == "amethyst") {
          totalScore += amethystValue;
        } else if (pressed == "emerald") {
          totalScore += emeraldValue;
        } else if (pressed == "ruby") {
          totalScore += rubyValue;
        } else if (pressed == "tigerseye") {
          totalScore += tigerseyeValue;
        }

	//evaluate if total is above goalnumber
	if (totalScore > goalnumber) {
		//reset the game and add a loss
		resetGame();
		losses++;
		$("#losses").html(losses);

	}
	//else if it's equal to the goal number, reset te game and add a win
	else if (totalScore = goalNumber){
		resetGame();
		wins++;
		$("#wins").html(wins);

	}

	$("#totalScore").html(totalScore);
});