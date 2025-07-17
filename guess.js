// const max = prompt("Enter the Range of the number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");

// while (true) {
//     if (guess === "quit") {
//         console.log("User quit");
//         break;
//     }

//     if (parseInt(guess) === random) {
//         console.log("You are right! Congrats!! The random number was", random);
//         break;
//     } else if (parseInt(guess) < random) {
//         guess = prompt("Hint: Your guess was too small. Please try again");
//     } else {
//         guess = prompt("Hint: Your guess was too large. Please try again");
//     }
// }
const max = prompt("Enter the range");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        document.getElementById("result").innerText = "User quit the game.";
        break;
    }

    const numGuess = parseInt(guess);

    if (numGuess === random) {
        document.getElementById("result").innerText =
            `🎉 You are right! Congrats!! The random number was ${random}`;
        break;
    } else if (numGuess < random) {
        guess = prompt("Hint: Your guess was too small. Please try again");
    } else {
        guess = prompt("Hint: Your guess was too large. Please try again");
    }
}




