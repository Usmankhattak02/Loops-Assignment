// . Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made
let maxValue = 9;
let randomNumber = Math.floor(Math.random() * maxValue);
let numberArray = [2,3,5,6,9];
let index = 0;
while (index < randomNumber){
    let guessNumber = numberArray[index];
    if(guessNumber === randomNumber){
        console.log("Congrats🤩 you win the game ! You guessed the correct number", guessNumber);
    }else if(guessNumber < randomNumber){
        console.log("your guess number is too low! Try again");

    }else{
        console.log("your guess number is too high! Try again")
    }
    index++;
};
