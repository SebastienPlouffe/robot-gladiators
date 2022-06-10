var getPlayerName = function() {
    var name = ""
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};
var playerInfo = {
Name: getPlayerName(),
Health: 100,
Attack: 10,
Money: 10,
reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
},

refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(11, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(12,14)
    }
]


    var fightOrSkip = function() {
        // ask player if they'd like to fight or skip using fightOrSkip function
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
      
        // Conditional Recursive Function Call
        
if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
      promptFight = promptFight.toLowerCase();
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            
            
            return true;
            return false;
          }
        }
      }





var fight = function(enemy) {
    while(enemy.health > 0 && playerInfo.Health > 0) {
        
        if (fightOrSkip()) {
            break;
        }
   
  // if player choses to fight, then fight

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerInfo.Attack - 3, playerInfo.Attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.Name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.Health = Math.max(0, playerInfo.Health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.Name + ". " + playerInfo.Name + " now has " + playerInfo.Health + " health remaining."
    );
  
    // check player's health
    if (playerInfo.Health <= 0) {
      window.alert(playerInfo.Name + " has died!");
      break;
    } else {
      window.alert(playerInfo.Name + " still has " + playerInfo.Health + " health left.");
    }
    // if player choses to skip
   
        
    }
};


var startGame = function() {
    playerInfo.reset();
for(var i = 0; i < enemyInfo.length; i++) {
    playerInfo.Health = 100;
    playerInfo.Attack = 10;
    playerInfo.Money = 10;

    if (playerInfo.Health > 0) {

    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    var pickedEnemyObj = enemyInfo[i];

    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);

    if(playerInfo.Health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next?");
    } if (storeConfirm) {
        shop();
    }

} else  {
    window.alert(playerInfo.Name + " You have lost your robot in battle! Game Over!");
    break;
        }

    }
    endGame();
};

var endGame = function() {
    if(playerInfo.Health < 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.Money + ".")
    } else{
    window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thanks you for playing Robot Gladiators! Come back soon!");
    }
};
var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE");
    shopOptionPrompt = perseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1:
        
playerInfo.refillHealth();
  break;
case 2:

  playerInfo.upgradeAttack();
  break;
  case 3: 
  
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;

    }
};
startGame();

