const fav="titanic"
let guess=prompt("guess the correct movie")
 while (guess !== fav && guess !== "quit"){
    guess=prompt("try to guess the correct movie again")
}
if(guess===fav){
    console.log("congratulations")
}else{
    console.log("sorry u quit")
}

// const fav = "titanic";
// let guess = prompt("guess the correct movie");

// while (guess !== fav) {
//     if (guess === "quit") {
//         console.log("quit");
//         break;
//     }
//     guess = prompt("try to guess the correct movie again");
// }

// if (guess === fav) {
//     console.log("congratulations");
// }
