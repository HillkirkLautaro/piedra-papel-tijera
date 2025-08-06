let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Empate!";
  }

  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    return `Ganaste! ${humanChoice} vence a ${computerChoice}`;
  } else {
    computerScore++;
    return `Perdiste! ${computerChoice} vence a ${humanChoice}`;
  }
}

const resultDiv = document.getElementById('result');
const computerChoiceDiv = document.getElementById('computer-choice');

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    resultDiv.textContent = `${result} | Puntaje - Tú: ${humanScore} Computadora: ${computerScore}`;
    if (humanScore > computerScore) {
      resultDiv.textContent += " ¡Tú ganas!";
    } else if (computerScore > humanScore) {
      resultDiv.textContent += " ¡La computadora gana!";
    }
    else {
      resultDiv.textContent += " ¡Es un empate!";
    }
    computerChoiceDiv.innerHTML = `<img src="img/${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.png" width="100" />`;
  });
});

document.getElementById('reset').addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  resultDiv.textContent = 'Puntaje reiniciado.';
  computerChoiceDiv.innerHTML = ''; // Limpiar también la imagen
});
