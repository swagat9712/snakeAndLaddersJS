console.log("Welcome to Sanke and Ladders!");
let current_position = 0;
let count_dice1 = 0;
function rollDice() {
            return (Math.ceil(Math.random() * 10) % 6 + 1);
        }
