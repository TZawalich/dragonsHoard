<!DOCTYPE HTML>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<Title>Tavern Games</Title>
			<meta name="description" content="Dragon's Hoard ">
			<link rel="stylesheet" href="css/dragonsHoardStyle.css"><!--Yes I know I used the wrong hoard here and in a few IDs, I'm super tired and might rename it if I have time-->
		</head>
		<body>
			<h1>Dragon's Hoard</h1>
			<div id="dragonsHorde">
				<div class="gameInstructions">
					<ol>
						<li>Select the number of players</li>
						<li>Click "Roll Dice" to roll your two d6's</li>
						<li>Rolling 3-11 will cause you to place 1 chip (or gold) on a number UNLESS there are more than three chips on the space, in which case you take those chips.</li>
						<li>Rolling two 1's (snake eyes) forces you to place a chip on each space and collect no gold if it goes over 3.</li>
						<li>Rolling two 6's lets you raid the Dragon's Hoard and take ALL of the chips on the table.</li>
						<li>All calculations are done automatically, you do not need to manually do anything with your gold.</li>
						<li>Refresh page to start a new game.</li>
					</ol>
				</div>
				<div id="dragonGamespace">
					<div id="dragonBoard">
						<div id="dragon3"><div id="token3Holder"><div id="token3"><img src="images/dragonGold.png" height="30" width="40"> X <div id="token3Count">0</div></div></div></div>
						<div id="dragon4"><div id="token4Holder"><div id="token4"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token4Count">0</div></div></div>
						<div id="dragon5"><div id="token5Holder"><div id="token5"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token5Count">0</div></div></div>
						<div id="dragon6"><div id="token6Holder"><div id="token6"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token6Count">0</div></div></div>
						<div id="dragon7"><div id="token7Holder"><div id="token7"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token7Count">0</div></div></div>
						<div id="dragon8"><div id="token8Holder"><div id="token8"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token8Count">0</div></div></div>
						<div id="dragon9"><div id="token9Holder"><div id="token9"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token9Count">0</div></div></div>
						<div id="dragon10"><div id="token10Holder"><div id="token10"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token10Count">0</div></div></div>
						<div id="dragon11"><div id="token11Holder"><div id="token11"></div><img src="images/dragonGold.png" height="30" width="40"> X <div id="token11Count">0</div></div></div>
						<img id="gameBackground" src="images/dragonHorde.png" alt="dragon's horde game board" height="600" width="800">
						<div id="rollAnnounce"></div>
					</div>
					<div id="playerOneDragon">
						<div id="playerOneRollsDragon">
							<p class="dragonPlayerName">Player One</p>
							Roll One: <div id="playerOneOneDragon"></div>
							Roll Two: <div id="playerOneTwoDragon"></div>
							<div class="totalHolder">Total: <div id="playerOneTotalDragon"></div></div>
							<hr>
							<div id="playerOneRollDragon">Roll Dice</div>
							Chips: <div id="playerOneChips">50</div>
						</div>
					</div>
					<div id="playerTwoDragon">
						<div id="playerTwoRollsDragon">
							<p class="dragonPlayerName">Player Two</p>
							Roll One: <div id="playerTwoOneDragon"></div>
							Roll Two: <div id="playerTwoTwoDragon"></div>
							<div class="totalHolder">Total: <div id="playerTwoTotalDragon"></div></div>
							<hr>
							<div id="playerTwoRollDragon">Roll Dice</div>
							Chips: <div id="playerTwoChips">50</div>
						</div>
					</div>
					<div id="playerThreeDragon">
						<div id="playerThreeRollsDragon">
							<p class="dragonPlayerName">Player Three</p>
							Roll One: <div id="playerThreeOneDragon"></div>
							Roll Two: <div id="playerThreeTwoDragon"></div>
							<div class="totalHolder">Total: <div id="playerThreeTotalDragon"></div></div>
							<hr>
							<div id="playerThreeRollDragon">Roll Dice</div>
							Chips: <div id="playerThreeChips">50</div>
						</div>
					</div>
					<div id="playerFourDragon">
						<div id="playerFourRollsDragon">
							<p class="dragonPlayerName">Player Four</p>
							Roll One: <div id="playerFourOneDragon"></div>
							Roll Two: <div id="playerFourTwoDragon"></div>
							<div class="totalHolder">Total: <div id="playerFourTotalDragon"></div></div>
							<hr>
							<div id="playerFourRollDragon">Roll Dice</div>
							Chips: <div id="playerFourChips">50</div>
						</div>
					</div>
					<div id="playerNumberPopup">
						<div id="popupHolder">
							<p id="selectPlayersHeader">Select the Number of Players</p>
							<p id="numberPlayers2">2 Players</p>
							<p id="numberPlayers3">3 Players</p>
							<p id="numberPlayers4">4 Players</p>
						</div>
					</div>
				</div><!-- Dragon's Hoard gamespace-->
			</div><!--end of Dragon's Hoard -->
			<script src="js/dragonsHoard.js"></script>
		</body>
	</html>