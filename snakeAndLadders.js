let utility = require("./Utility");
console.log("Welcome to Sanke and Ladders!");

function result(){
    utility.playerPosition1();
    utility.playerPosition2();
    utility.calculateWin();
}
result();
