/*------------Dragon----------*/
var playerOneDragon = document.getElementById("playerOneDragon"); //player place sets
var playerTwoDragon = document.getElementById("playerTwoDragon");
var playerThreeDragon = document.getElementById("playerThreeDragon");
var playerFourDragon = document.getElementById("playerFourDragon");

var playerOneRollDragon = document.getElementById("playerOneRollDragon"); //player roll buttons
var playerTwoRollDragon = document.getElementById("playerTwoRollDragon");
var playerThreeRollDragon = document.getElementById("playerThreeRollDragon");
var playerFourRollDragon = document.getElementById("playerFourRollDragon");

var playerOneOneDragon = document.getElementById("playerOneOneDragon"); //player 1st roll
var playerTwoOneDragon = document.getElementById("playerTwoOneDragon");
var playerThreeOneDragon = document.getElementById("playerThreeOneDragon");
var playerFourOneDragon = document.getElementById("playerFourOneDragon");

var playerOneTwoDragon = document.getElementById("playerOneTwoDragon"); //player 2nd roll
var playerTwoTwoDragon = document.getElementById("playerTwoTwoDragon");
var playerThreeTwoDragon = document.getElementById("playerThreeTwoDragon");
var playerFourTwoDragon = document.getElementById("playerFourTwoDragon");

var playerOneTotalDragon = document.getElementById("playerOneTotalDragon"); //player total roll
var playerTwoTotalDragon = document.getElementById("playerTwoTotalDragon");
var playerThreeTotalDragon = document.getElementById("playerThreeTotalDragon");
var playerFourTotalDragon = document.getElementById("playerFourTotalDragon");

var playerOneChips = document.getElementById("playerOneChips"); //player chips
var playerTwoChips = document.getElementById("playerTwoChips");
var playerThreeChips = document.getElementById("playerThreeChips");
var playerFourChips = document.getElementById("playerFourChips");

var playerNumberPopup = document.getElementById("playerNumberPopup");

var rollAnnounce = document.getElementById("rollAnnounce"); //where the roll results are announced

var token3Count = document.getElementById("token3Count");
var token4Count = document.getElementById("token4Count");
var token5Count = document.getElementById("token5Count");
var token6Count = document.getElementById("token6Count");
var token7Count = document.getElementById("token7Count");
var token8Count = document.getElementById("token8Count");
var token9Count = document.getElementById("token9Count");
var token10Count = document.getElementById("token10Count");
var token11Count = document.getElementById("token11Count");
var tokenCountArray = [token3Count, token4Count, token5Count, token6Count, token7Count, token8Count, token9Count, token10Count, token11Count];

var numberOfPlayers = '';

function dragonPlayers(name, number, roll1, roll2, chips){
	var rollOne =''; var rollTwo = '';
	this.name = name;
	this.number = number;
	this.roll1 = function(){rollOne = Math.floor(Math.random() * roll1) + 1; return rollOne;};
	this.roll2 = function(){rollTwo = Math.floor(Math.random() * roll2) + 1; return rollTwo;};
	this.totalRoll = function(){ 
		return rollOne + rollTwo;
		};
	this.chips = chips;
}

var dragonPlayer1 = new dragonPlayers('Player One', 1, 6, 6, 50);
var dragonPlayer2 = new dragonPlayers('Player Two', 2, 6, 6, 50);
var dragonPlayer3 = new dragonPlayers('Player Three', 3, 6, 6, 50);
var dragonPlayer4 = new dragonPlayers('Player Four', 4, 6, 6, 50);

function runGame(currentPlayer, rollOneSlot, rollTwoSlot, totalRollSlot, chipsSlot){
	rollOneSlot.innerHTML = currentPlayer.roll1(); //shows roll 1 
	rollTwoSlot.innerHTML = currentPlayer.roll2(); //shows roll 2
	var total = currentPlayer.totalRoll(); //sets total in var so I can use it without retyping long things over and over
	totalRollSlot.innerHTML = total; //shows roll total
	
	switch(total){ //switch case to determine result of roll on board/ chip stack
		case 2:
			rollAnnounce.innerHTML = "Snake Eyes! Add one chip to each space.";
			chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 9; //removes 9 chips from the player
			for(var i = 0; i < tokenCountArray.length; i++){
				tokenCountArray[i].innerHTML = Number(tokenCountArray[i].innerHTML) + 1; //adds 1 token to each chip counter
			}
			break;
		case 3:
			if(Number(token3Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 3! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token3Count.innerHTML); //removes 1 chips
				token3Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 3! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token3Count.innerHTML = Number(token3Count.innerHTML) + 1;
				}
				break;
		case 4:
			if(Number(token4Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 4! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token4Count.innerHTML); //removes 1 chips
				token4Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 4! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token4Count.innerHTML = Number(token4Count.innerHTML) + 1;
				}
				break;
		case 5:
			if(Number(token5Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 5! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token5Count.innerHTML); //removes 1 chips
				token5Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 5! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token5Count.innerHTML = Number(token5Count.innerHTML) + 1;
				}
				break;
		case 6:
			if(Number(token6Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 6! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token6Count.innerHTML); //removes 1 chips
				token6Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 6! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token6Count.innerHTML = Number(token6Count.innerHTML) + 1;
				}
				break;
		case 7:
			if(Number(token7Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 7! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token7Count.innerHTML); //removes 1 chips
				token7Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 7! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token7Count.innerHTML = Number(token7Count.innerHTML) + 1;
				}
				break;
		case 8:
			if(Number(token8Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled an 8! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token8Count.innerHTML); //removes 1 chips
				token8Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled an 8! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token8Count.innerHTML = Number(token8Count.innerHTML) + 1;
				}
				break;
		case 9:
			if(Number(token9Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 9! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token9Count.innerHTML); //removes 1 chips
				token9Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 9! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token9Count.innerHTML = Number(token9Count.innerHTML) + 1;
				}
				break;
		case 10:
			if(Number(token10Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled a 10! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token10Count.innerHTML); //removes 1 chips
				token10Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled a 10! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token10Count.innerHTML = Number(token10Count.innerHTML) + 1;
				}
				break;
		case 11:
			if(Number(token11Count.innerHTML) >= 3){
				rollAnnounce.innerHTML = "You rolled an 11! Collect the chips on the space!";
				chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(token11Count.innerHTML); //removes 1 chips
				token11Count.innerHTML = 0;
			}
				else{
					rollAnnounce.innerHTML = "You rolled an 11! Add one chip to the space.";
					chipsSlot.innerHTML = Number(chipsSlot.innerHTML) - 1; //removes 1 chips
					token11Count.innerHTML = Number(token11Count.innerHTML) + 1;
				}
				break;
		case 12:
			rollAnnounce.innerHTML = "You rolled a 12! Collect ALL the chips!";
			var allChips = 0;
			for( i = 0; i < tokenCountArray.length; i++){
				allChips += Number(tokenCountArray[i].innerHTML); //counts all of the chips
				tokenCountArray[i].innerHTML = "0";
			}
			chipsSlot.innerHTML = Number(chipsSlot.innerHTML) + Number(allChips); //adds all chips
			break;
	}
	
	function passTurn(){
		switch(currentPlayer.number){
			case 1:
				playerOneDragon.style.border = "2px solid #1a1a1a";
				playerOneDragon.style.opacity = 0.75;
				playerOneRollDragon.removeEventListener("click", playerOneRunGame);
				playerTwoDragon.style.border = "2px solid #e6e6e6";
				playerTwoDragon.style.opacity = 1;
				playerTwoRollDragon.addEventListener("click", playerTwoRunGame);
				//enable next dice roll button (move add event listener assignment here instead of in setup below) only enable player one in setup
				break;
			case 2:
					playerTwoDragon.style.border = "2px solid #1a1a1a";
					playerTwoDragon.style.opacity = 0.75;
					playerTwoRollDragon.removeEventListener("click", playerTwoRunGame);
				if(numberOfPlayers === 2){
					playerOneDragon.style.border = "2px solid #e6e6e6";
					playerOneDragon.style.opacity = 1;
					playerOneRollDragon.addEventListener("click", playerOneRunGame); //always at least 2 players

				}else{
					playerThreeDragon.style.border = "2px solid #e6e6e6";
					playerThreeDragon.style.opacity = 1;
					playerThreeRollDragon.addEventListener("click", playerThreeRunGame);
				}
				break;
			case 3:
					playerThreeDragon.style.border = "2px solid #1a1a1a";
					playerThreeDragon.style.opacity = 0.75;
					playerThreeRollDragon.removeEventListener("click", playerThreeRunGame);
				if(numberOfPlayers === 3){
					playerOneDragon.style.border = "2px solid #e6e6e6";
					playerOneDragon.style.opacity = 1;
					playerOneRollDragon.addEventListener("click", playerOneRunGame); //always at least 2 players

				}else{
					playerFourDragon.style.border = "2px solid #e6e6e6";
					playerFourDragon.style.opacity = 1;
					playerFourRollDragon.addEventListener("click", playerFourRunGame);
				}
				break;
			case 4:
					playerFourDragon.style.border = "2px solid #1a1a1a";
					playerFourDragon.style.opacity = 0.75;
					playerFourRollDragon.removeEventListener("click", playerFourRunGame);
					playerOneDragon.style.border = "2px solid #e6e6e6";
					playerOneDragon.style.opacity = 1;
					playerOneRollDragon.addEventListener("click", playerOneRunGame); //always at least 2 players

				break;
		}	
	}
	
	passTurn();
}

function dragonSetup(playerNum){ //setup correct number of players in game
	numberOfPlayers = playerNum;
	playerTwoDragon.style.opacity = 0.75; //sets everything that isn't player one to 75% opacity
	playerThreeDragon.style.opacity = 0.75;
	playerFourDragon.style.opacity = 0.75;
	playerOneDragon.style.border = "2px solid #e6e6e6";
	playerNumberPopup.style.display = "none"; 
	playerOneRollDragon.addEventListener("click", playerOneRunGame); //always at least 2 players
	if(playerNum === 2){ //if 2 players, hide 3 and 4 and return
		playerThreeDragon.style.opacity = 0.15;
		playerFourDragon.style.opacity = 0.15;
		return;}
	else if(playerNum === 3){ //if only 3 players, hide the 4th and return
			playerFourDragon.style.opacity = 0.15;
			return;}
}

var playerOneRunGame = function(){runGame(dragonPlayer1, playerOneOneDragon, playerOneTwoDragon, playerOneTotalDragon, playerOneChips);};
var playerTwoRunGame = function(){runGame(dragonPlayer2, playerTwoOneDragon, playerTwoTwoDragon, playerTwoTotalDragon, playerTwoChips);};
var playerThreeRunGame = function(){runGame(dragonPlayer3, playerThreeOneDragon, playerThreeTwoDragon, playerThreeTotalDragon, playerThreeChips);};
var playerFourRunGame =  function(){runGame(dragonPlayer4, playerFourOneDragon, playerFourTwoDragon, playerFourTotalDragon, playerFourChips);};

numberPlayers2.addEventListener("click", function(){dragonSetup(2);});
numberPlayers3.addEventListener("click", function(){dragonSetup(3);});
numberPlayers4.addEventListener("click", function(){dragonSetup(4);});