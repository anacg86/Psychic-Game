var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessSoFar = []; //push to get letters that we chose 
        var messagewin = "You won!!!"
        var messagelost = "You lost :S"
        var messageleft = "You don't have any guesses left"

        // Create variables that hold references to the places in the HTML where we want to display things.
        var winsText = document.getElementById("winsText");
        var lossesText = document.getElementById("lossesText");
        var guessesLeftText = document.getElementById("guessesLeftText");
        var guessSoFarText = document.getElementById("guessSoFarText");
        
        //The computer chooses a letter, once 
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
        //The player chooses a letter on key
        document.onkeyup = function () {
            // Determines which key was pressed.
            var userGuess = event.key;
           
            //Just to check which letter the computer is using, but i need 1 letter for 5 guesses
            console.log(computerGuess + userGuess);
            //add answers to my array
            guessSoFar.push(event.key);
            //wins counter
            if (userGuess === computerGuess) {
                wins++;
                guessesLeft--;
                alert(messagewin);
                guessSoFar = [];
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                //losses counter
            } if (userGuess !== computerGuess) {
                losses++;
                guessesLeft--;
            };
            //guesses left
            if (guessesLeft === 0 || guessesLeft === -1) {
                alert(messageleft);
                wins = 0;
                losses = 0;
                guessesLeft = 9;
                //the computer chooses a letter again. 
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                guessSoFar = [];
            }

            // Display the user and computer guesses, and wins/losses/guesses left/guesses so far.
            winsText.textContent = "Wins: " + wins;
            lossesText.textContent = "Losses: " + losses;
            guessesLeftText.textContent = "Guesses left: " + guessesLeft;
            guessSoFarText.textContent = "Guesses so far: " + guessSoFar;
        };