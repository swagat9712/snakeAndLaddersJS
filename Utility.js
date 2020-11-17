export let current_position = 0;
export let count_dice1 = 0;
export let count_dice2 = 0;
export const final_position = 100;
export default class SnakeandLadder {
    //for taking random value from 1 to 6//
    rollDice() {
        return (Math.ceil(Math.random() * 10) % 6 + 1);
    }
    //to check the options by taking random value from 1 to 3// 
    checkOption() {
        let dice_played = this.rollDice();
        let option = (Math.ceil(Math.random() * 10) % 3 + 1);
        try {
            switch (option) {
                case 1:
                    console.log("No Play");
                    break;
                case 2:
                    console.log("Play Ladder");
                    if (current_position < final_position) {
                        current_position = current_position + dice_played;
                        console.log("current position: " + current_position);
                    }
                    else {
                        count_dice1 = 0;
                        console.log("current position: " + current_position);
                    }
                    break;
                case 3:
                    console.log("Snake");
                    if (current_position > 0) {
                        current_position = current_position - dice_played;
                        console.log("current position: " + current_position);
                    }
                    else {
                        current_position = 0;
                    }
                    break;
                default:
                    console.log("no option selected");
            }
        } catch (e) {
            console.log("Error:" + e);
        }
    }
    playerPosition1() {
        try {
            while (current_position < final_position) {
                console.log("Player1:");
                this.checkOption();
                count_dice1++;
                //if current position less then or equals to 0 then count restart//
                if (current_position == 0) {
                    console.log("Restart! position less the 0 for playe1");
                    count_dice1 = 0;
                }
                if (current_position >= final_position) {
                    //console.log("player1 won!");
                    //console.log("Player1 won with dice count:" + count_dice1);
                    current_position = 0;
                    break;
                }
            }
        } catch (e) {
            console.log("Error:" + e);
        }
    }
    // for player2 to count the number of dice played and to iterate till final position 100 is reached//  
    playerposition2() {
        try {
            while (current_position < final_position) {
                console.log("Player2:");
                this.checkOption();
                count_dice2++;
                //if current position less then or equals to 0 then count restart//
                if (current_position == 0) {
                    console.log("Restart! position less the 0 for player2");
                    count_dice2 = 0;
                }
                if (current_position >= final_position) {
                    //console.log("player2 won!");
                    console.log("Player2 won with dice count:" + count_dice2);
                    break;
                }
            }

        }
        catch (e) {
            console.log("Error:" + e);
        }
    }
    calculateWin(){
        if(count_dice1 < count_dice2){
            console.log("Player1 won with dice count:" + count_dice1);
        }
        if(count_dice2 < count_dice1){
            console.log("Player2 won with dice count:" + count_dice2);
        }
    }
}
