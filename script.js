let healthOgre = Number(document.getElementById('healthBarOgre').textContent);

let healthPlayer = Number(document.getElementById('healthBarPlayer').textContent);

const getComputerChoice = () => {
  const choice = Math.floor(Math.random()*5);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else if (choice === 2) {
    return 'scissors';
  } else if (choice === 3) {
    return 'lizard';
  }
  return 'spock';
}

// win/lose functions
const youWon = () => {
  document.getElementById('healthBarOgre').textContent = '0';
  document.getElementById('lessGo').style.display = 'block';
  document.getElementById('noThanks').style.display = 'block';
  document.getElementById('player-hp-indicator').style.display = 'none';
  return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
}

const youLose = () => {
  document.getElementById('healthBarPlayer').textContent = '0';
  document.getElementById('resetBtn').style.display = 'block';
  return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
}

//logic for player chooses rock

const rockChoice = () => {
  if (healthOgre < 1) {
      document.getElementById('healthBarOgre').textContent = '0';
      return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
    }
  if (healthPlayer < 1) {
      document.getElementById('healthBarPlayer').textContent = '0';
      return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
    }
  const comChoice = getComputerChoice();
  const dmg = (Math.floor(Math.random() * 10) + 11);
  if (comChoice === 'rock'){
    return document.getElementById('infoField').textContent = 'You both chose rock. You miss. But ogre also misses.';
  } else if ((comChoice === 'lizard' || (comChoice === 'scissors'))) {
    healthOgre = healthOgre - dmg;
    if (healthOgre < 1) {
      youWon();
      return;
    }
    document.getElementById('healthBarOgre').textContent = String(healthOgre);
    return document.getElementById('infoField').textContent = `You chose rock and Ogre chose ${comChoice}. You deal ${dmg} damage!`;
  }
  healthPlayer = healthPlayer - dmg;
  if (healthPlayer < 1) {
      youLose();
      return;
    }
  document.getElementById('healthBarPlayer').textContent = String(healthPlayer);
    return document.getElementById('infoField').textContent = `You chose rock and Ogre chose ${comChoice}. Ogre deals ${dmg} damage!`; 
}

document.getElementById('rockBtn').addEventListener('click', rockChoice);

//logic for player chooses paper

const paperChoice = () => {
  if (healthOgre < 1) {
      document.getElementById('healthBarOgre').textContent = '0';
      return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
    }
  if (healthPlayer < 1) {
      document.getElementById('healthBarPlayer').textContent = '0';
      return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
    }
  const comChoice = getComputerChoice();
  const dmg = (Math.floor(Math.random() * 10) + 11);
  if (comChoice === 'paper'){
    return document.getElementById('infoField').textContent = 'You both chose paper. You miss. But ogre also misses.';
  } else if ((comChoice === 'rock' || (comChoice === 'spock'))) {
    healthOgre = healthOgre - dmg;
    if (healthOgre < 1) {
      youWon();
      return;
    }
    document.getElementById('healthBarOgre').textContent = String(healthOgre);
    return document.getElementById('infoField').textContent = `You chose paper and Ogre chose ${comChoice}. You deal ${dmg} damage!`;
  }
  healthPlayer = healthPlayer - dmg;
  if (healthPlayer < 1) {
      youLose();
      return;
    }
  document.getElementById('healthBarPlayer').textContent = String(healthPlayer);
    return document.getElementById('infoField').textContent = `You chose paper and Ogre chose ${comChoice}. Ogre deals ${dmg} damage!`; 
}

document.getElementById('paperBtn').addEventListener('click', paperChoice);

// logic for player chooses scissors

const scissorsChoice = () => {
  if (healthOgre < 1) {
      document.getElementById('healthBarOgre').textContent = '0';
      return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
    }
  if (healthPlayer < 1) {
      document.getElementById('healthBarPlayer').textContent = '0';
      return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
    }
  const comChoice = getComputerChoice();
  const dmg = (Math.floor(Math.random() * 10) + 11);
  if (comChoice === 'scissors'){
    return document.getElementById('infoField').textContent = 'You both chose scissors. You miss. But ogre also misses.';
  } else if ((comChoice === 'paper' || (comChoice === 'lizard'))) {
    healthOgre = healthOgre - dmg;
    if (healthOgre < 1) {
      youWon();
      return;
    }
    document.getElementById('healthBarOgre').textContent = String(healthOgre);
    return document.getElementById('infoField').textContent = `You chose scissors and Ogre chose ${comChoice}. You deal ${dmg} damage!`;
  }
  healthPlayer = healthPlayer - dmg;
  if (healthPlayer < 1) {
      youLose();
      return;
    }
  document.getElementById('healthBarPlayer').textContent = String(healthPlayer);
    return document.getElementById('infoField').textContent = `You chose scissors and Ogre chose ${comChoice}. Ogre deals ${dmg} damage!`; 
}

document.getElementById('scissorsBtn').addEventListener('click', scissorsChoice);

//logic for player chooses lizard

const lizardChoice = () => {
  if (healthOgre < 1) {
      document.getElementById('healthBarOgre').textContent = '0';
      return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
    }
  if (healthPlayer < 1) {
      document.getElementById('healthBarPlayer').textContent = '0';
      return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
    }
  const comChoice = getComputerChoice();
  const dmg = (Math.floor(Math.random() * 10) + 11);
  if (comChoice === 'lizard'){
    return document.getElementById('infoField').textContent = 'You both chose lizard. You miss. But ogre also misses.';
  } else if ((comChoice === 'spock' || (comChoice === 'paper'))) {
    healthOgre = healthOgre - dmg;
    if (healthOgre < 1) {
      youWon();
      return;
    }
    document.getElementById('healthBarOgre').textContent = String(healthOgre);
    return document.getElementById('infoField').textContent = `You chose lizard and Ogre chose ${comChoice}. You deal ${dmg} damage!`;
  }
  healthPlayer = healthPlayer - dmg;
  if (healthPlayer < 1) {
      youLose();
      return;
    }
  document.getElementById('healthBarPlayer').textContent = String(healthPlayer);
    return document.getElementById('infoField').textContent = `You chose lizard and Ogre chose ${comChoice}. Ogre deals ${dmg} damage!`; 
}

document.getElementById('lizardBtn').addEventListener('click', lizardChoice);

//logic for player chooses spock

const spockChoice = () => {
  if (healthOgre < 1) {
      document.getElementById('healthBarOgre').textContent = '0';
      return document.getElementById('infoField').textContent = `Congratulations! You won! You are now ready for our adventure!`;
    }
  if (healthPlayer < 1) {
      document.getElementById('healthBarPlayer').textContent = '0';
      return document.getElementById('infoField').textContent = `Sorry! You lost. Train some more and maybe you will succeed!`;
    }
  const comChoice = getComputerChoice();
  const dmg = (Math.floor(Math.random() * 10) + 11);
  if (comChoice === 'spock'){
    return document.getElementById('infoField').textContent = 'You both chose spock. You miss. But ogre also misses.';
  } else if ((comChoice === 'scissors' || (comChoice === 'rock'))) {
    healthOgre = healthOgre - dmg;
    if (healthOgre < 1) {
      youWon();
      return;
    }
    document.getElementById('healthBarOgre').textContent = String(healthOgre);
    return document.getElementById('infoField').textContent = `You chose spock and Ogre chose ${comChoice}. You deal ${dmg} damage!`;
  }
  healthPlayer = healthPlayer - dmg;
  if (healthPlayer < 1) {
      youLose();
      return;
    }
  document.getElementById('healthBarPlayer').textContent = String(healthPlayer);
    return document.getElementById('infoField').textContent = `You chose spock and Ogre chose ${comChoice}. Ogre deals ${dmg} damage!`; 
}

document.getElementById('spockBtn').addEventListener('click', spockChoice);

// reset button

document.getElementById('resetBtn').addEventListener('click', () => {
  healthOgre = 250;
  healthPlayer = 250;
  document.getElementById('healthBarOgre').textContent = healthOgre;
  document.getElementById('healthBarPlayer').textContent = healthPlayer;
  document.getElementById('infoField').textContent = "Battle begins!";
  document.getElementById('player-hp-indicator').style.display = 'block';
  document.getElementById('resetBtn').style.display = 'none';
});

document.getElementById('noThanks').addEventListener('click', () => {
  healthOgre = 250;
  healthPlayer = 250;
  document.getElementById('healthBarOgre').textContent = healthOgre;
  document.getElementById('healthBarPlayer').textContent = healthPlayer;
  document.getElementById('infoField').textContent = "Battle begins!";
  document.getElementById('player-hp-indicator').style.display = 'block';
  document.getElementById('noThanks').style.display = 'none';
  document.getElementById('lessGo').style.display = 'none';
});


