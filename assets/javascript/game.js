
        
        //This is the list of options(Array) that the psychic game will accept from the user's keyboard input.
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        //These are created containers that will hold the number values. 
        //"wins" and "losses" will start at 0 and then add upon the user's keyboard input.
        //"numGuesses" will start at 9 and then subtract upon the user's keyboard input. 
        //"guessChoices" is an empty container...
        var wins = 0;
		 var losses = 0;
		 var numGuesses = 9;
		 var guessChoices = [];

         //This is the JS function that activates when the user presses, then releases any key on the keyboard.
		 document.onkeyup = function(event) {

            //This JS event stores the user's key input. i.e If the user presses "a" JS will record "a".  
            var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 9;
					guessChoices = [];
				}

				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 9;
				losses ++;
				guessChoices = [];

				
			}

			var html = 
			"<center><h1>Poorley Coded Psychic Game</h1></center>" +
			"<center><p>Guess what letter is in the queue?</p></center>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};
