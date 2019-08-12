import "./style.css";

window.onload = function() {
  class Game {
    playerName: HTMLInputElement;
    playerStrength: HTMLInputElement;
    playerHealth: HTMLInputElement;
    monsterName: HTMLInputElement;
    monsterStrength: HTMLInputElement;
    monsterHealth: HTMLInputElement;
    monsterList: any;
    player: any;
    listOfMonsters: any[];
    monstervalue: number;
    consoleValue: any;
    health: number;

    constructor() {
      this.playerName = document.querySelector("#playerName");
      this.playerStrength = document.querySelector("#playerStrength");
      this.playerHealth = document.querySelector("#playerHealth");

      this.monsterName = document.querySelector("#monsterName");
      this.monsterStrength = document.querySelector("#monsterStrength");
      this.monsterHealth = document.querySelector("#monsterHealth");

      this.monsterList = document.querySelectorAll("#monsters input");
      this.player = document.querySelector("#playerData");
      this.listOfMonsters = [];
      this.monstervalue = 0;

      this.consoleValue = document.querySelector("#console");
    }

    getMonsterList() {
      for (let monster of this.monsterList) {
        let oneMonster =
          monster.dataset.name +
          " - " +
          monster.dataset.health +
          " - " +
          monster.dataset.strength;

        this.listOfMonsters.push(monster.dataset.name);
        this.listOfMonsters.push(monster.dataset.health);
        this.listOfMonsters.push(monster.dataset.strength);
      }
      console.log(this.listOfMonsters);
    }

    getPlayer() {
      let ygritte =
        this.player.dataset.name +
        " - " +
        this.player.dataset.health +
        " - " +
        this.player.dataset.strength;
      console.log(ygritte);
    }

    render() {
      this.playerName.value = this.player.dataset.name;
      this.playerHealth.value = this.player.dataset.health;
      this.playerStrength.value = this.player.dataset.strength;

      this.monsterName.value = this.listOfMonsters[this.monstervalue];
      this.monsterHealth.value = this.listOfMonsters[this.monstervalue + 1];
      this.monsterStrength.value = this.listOfMonsters[this.monstervalue + 2];

      if (game.monstervalue > game.listOfMonsters.length - 1) {
        this.monsterName.value = "";
        this.printOutWinner();
      }
    }

    printOut() {
      let consoleList = document.createElement("p");
      consoleList.innerHTML =
        "You attacked a monster and hit " +
        this.player.dataset.strength +
        " damage. " +
        this.listOfMonsters[this.monstervalue] +
        " hit you for " +
        this.listOfMonsters[this.monstervalue + 2] +
        " damage";
      this.consoleValue.appendChild(consoleList);
    }

    printOutKilled() {
      let consoleList = document.createElement("p");
      consoleList.innerHTML =
        "You killed: " + this.listOfMonsters[this.monstervalue];
      this.consoleValue.appendChild(consoleList);
    }

    printOutWinner() {
      let consoleList = document.createElement("p");
      consoleList.innerHTML = "You won!";
      this.consoleValue.appendChild(consoleList);
    }
  }

  var game = new Game();
  game.getPlayer();
  game.getMonsterList();
  game.render();

  const fightButton: HTMLInputElement = document.querySelector("#fight");
  fightButton.onclick = function() {
    game.printOut();

    game.player.dataset.health =
      game.player.dataset.health - game.listOfMonsters[game.monstervalue + 2];

    game.listOfMonsters[game.monstervalue + 1] =
      game.listOfMonsters[game.monstervalue + 1] - game.player.dataset.strength;

    if (game.listOfMonsters[game.monstervalue + 1] <= 0) {
      game.printOutKilled();
      game.monstervalue = game.monstervalue + 3;
    }

    if (game.monstervalue > game.listOfMonsters.length - 1) {
      alert("You won!");
    }

    game.render();
  };
};

/*  class Player {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  }

  class Monster {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  } 
  
  
  let input = document.querySelector("#newInputText");
    let todo = document.createElement("li");
    todo.innerHTML = input.value;

    let todoList = document.querySelector("#todoList");
    todoList.appendChild(todo);
  
  
  
  
  */
