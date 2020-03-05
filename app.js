const options = document.querySelectorAll('.hand');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const selectOption = document.querySelector('.select-option');
const startGame = document.querySelector('.start-game');
const container = document.querySelector('.container');
const containerTwo = document.querySelector('.container2');
const points = document.querySelectorAll('.points');

let pPoints = 0;
let cPoints = 0;

startGame.addEventListener('click', () => {
	container.style.display = 'none';
	containerTwo.style.display = 'flex';
});

const getUserChoice = userInput => {
	userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') return userInput;
};

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			right.src = 'img/rock-right.svg';
			return 'rock';
			break;
		case 1:
			right.src = 'img/paper-right.svg';
			return 'paper';
			break;
		case 2:
			right.src = 'img/scissors-right.svg';
			return 'scissors';
			break;
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		selectOption.textContent = 'It\' a tie!';
	} else if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			selectOption.textContent = 'Computer wins.';
			cPoints++;
		} else {
			selectOption.textContent = 'You win!';
			pPoints++;
		}
	} else if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			selectOption.textContent = 'Computer wins.';
			cPoints++;
		} else {
			selectOption.textContent = 'You win!';
			pPoints++;
		}
	} else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			selectOption.textContent = 'Computer wins.';
			cPoints++;
		} else {
			selectOption.textContent = 'You win!';
			pPoints++;
		}
	}
};

const playGame = () => {
	options[0].addEventListener('click', e => {
		left.classList.add('animated', 'bounce');
		right.classList.add('animated', 'bounce');
		setTimeout(() => {
			left.src = 'img/rock-left.svg';
			const userChoice = getUserChoice('rock');
			const computerChoice = getComputerChoice();
			determineWinner(userChoice, computerChoice);
			points[0].textContent = `Player: ${pPoints}`;
			points[1].textContent = `${cPoints}: Computer`;
			left.classList.remove('animated', 'bounce');
			right.classList.remove('animated', 'bounce');
			e.preventDefault();
		}, 1000)
	});
	
	options[1].addEventListener('click', e => {
		left.classList.add('animated', 'bounce');
		right.classList.add('animated', 'bounce');
		setTimeout(() => {
			left.src = 'img/paper-left.svg';
			const userChoice = getUserChoice('paper');
			const computerChoice = getComputerChoice();
			determineWinner(userChoice, computerChoice);
			points[0].textContent = `Player: ${pPoints}`;
			points[1].textContent = `${cPoints}: Computer`;
			left.classList.remove('animated', 'bounce');
			right.classList.remove('animated', 'bounce');
			e.preventDefault();
		}, 1000);
	});
	
	options[2].addEventListener('click', e => {
		left.classList.add('animated', 'bounce');
		right.classList.add('animated', 'bounce');
		setTimeout(() => {
			left.src = 'img/scissors-left.svg';
			const userChoice = getUserChoice('scissors');
			const computerChoice = getComputerChoice();
			determineWinner(userChoice, computerChoice);
			points[0].textContent = `Player: ${pPoints}`;
			points[1].textContent = `${cPoints}: Computer`;
			left.classList.remove('animated', 'bounce');
			right.classList.remove('animated', 'bounce');
			e.preventDefault();
		}, 1000);
	});
};

playGame();