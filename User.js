const Game=require("./Game");

let g1=Game.newGame("sid","ajay");
let g2=Game.newGame("rohan","Aniket");

console.log(g1.play(8))
console.log(g1.play(4))
console.log(g1.play(7))
console.log(g1.play(1))
console.log(g1.play(6))
console.log(g1.play(5))
