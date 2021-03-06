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
let isPlaying = false;

const getUserChoice = userInput => {
	userInput.toLowerCase();
	switch (userInput) {
		case 'rock':
			left.src = 'img/rock-left.svg';
			return userInput;
			break;
		case 'paper':
			left.src = 'img/paper-left.svg';
			return userInput;
			break;
		case 'scissors':
			left.src = 'img/scissors-left.svg';
			return userInput;
			break;
	}
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

const rockEvents = e => {
	isPlaying = true;
	if (isPlaying) {
		options[0].removeEventListener('click', rockEvents);
		options[1].removeEventListener('click', paperEvents);
		options[2].removeEventListener('click', scissorsEvents);
		options.forEach(option => {
			option.style.cursor = 'not-allowed';
		});
	}
	left.src = 'img/rock-left.svg';
	right.src = 'img/rock-right.svg';
	left.classList.add('animated', 'bounce');
	right.classList.add('animated', 'bounce');
	e.preventDefault();
	setTimeout(() => {
		const userChoice = getUserChoice('rock');
		const computerChoice = getComputerChoice();
		determineWinner(userChoice, computerChoice);
		points[0].textContent = `Player: ${pPoints}`;
		points[1].textContent = `${cPoints}: Computer`;
		left.classList.remove('animated', 'bounce');
		right.classList.remove('animated', 'bounce');
		isPlaying = false;
		if (!isPlaying) {
			options[0].addEventListener('click', rockEvents);
			options[1].addEventListener('click', paperEvents);
			options[2].addEventListener('click', scissorsEvents);
			options.forEach(option => {
				option.style.cursor = 'pointer';
			});
		}
	}, 1000);
};

const paperEvents = e => {
	isPlaying = true;
	if (isPlaying) {
		options[0].removeEventListener('click', rockEvents);
		options[1].removeEventListener('click', paperEvents);
		options[2].removeEventListener('click', scissorsEvents);
		options.forEach(option => {
			option.style.cursor = 'not-allowed';
		});
	}
	left.src = 'img/rock-left.svg';
	right.src = 'img/rock-right.svg';
	left.classList.add('animated', 'bounce');
	right.classList.add('animated', 'bounce');
	e.preventDefault();
	setTimeout(() => {
		const userChoice = getUserChoice('paper');
		const computerChoice = getComputerChoice();
		determineWinner(userChoice, computerChoice);
		points[0].textContent = `Player: ${pPoints}`;
		points[1].textContent = `${cPoints}: Computer`;
		left.classList.remove('animated', 'bounce');
		right.classList.remove('animated', 'bounce');
		isPlaying = false;
		if (!isPlaying) {
			options[0].addEventListener('click', rockEvents);
			options[1].addEventListener('click', paperEvents);
			options[2].addEventListener('click', scissorsEvents);
			options.forEach(option => {
				option.style.cursor = 'pointer';
			});
		}
	}, 1000);
};

const scissorsEvents = e => {
	isPlaying = true;
	if (isPlaying) {
		options[0].removeEventListener('click', rockEvents);
		options[1].removeEventListener('click', paperEvents);
		options[2].removeEventListener('click', scissorsEvents);
		options.forEach(option => {
			option.style.cursor = 'not-allowed';
		});
	}
	left.src = 'img/rock-left.svg';
	right.src = 'img/rock-right.svg';
	left.classList.add('animated', 'bounce');
	right.classList.add('animated', 'bounce');
	e.preventDefault();
	setTimeout(() => {
		const userChoice = getUserChoice('scissors');
		const computerChoice = getComputerChoice();
		determineWinner(userChoice, computerChoice);
		points[0].textContent = `Player: ${pPoints}`;
		points[1].textContent = `${cPoints}: Computer`;
		left.classList.remove('animated', 'bounce');
		right.classList.remove('animated', 'bounce');
		isPlaying = false;
		if (!isPlaying) {
			options[0].addEventListener('click', rockEvents);
			options[1].addEventListener('click', paperEvents);
			options[2].addEventListener('click', scissorsEvents);
			options.forEach(option => {
				option.style.cursor = 'pointer';
			});
		}
	}, 1000);
};

const playGame = () => {
	options[0].addEventListener('click', rockEvents);
	options[1].addEventListener('click', paperEvents);
	options[2].addEventListener('click', scissorsEvents);
};

startGame.addEventListener('click', () => {
	container.style.display = 'none';
	containerTwo.style.display = 'flex';
	playGame();
});