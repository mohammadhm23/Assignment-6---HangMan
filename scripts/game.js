const words = ['yessir', 'wow', 'warriors', 'golden', 'state', 'bavaria', 'thrones', 'game', 'munich'];


let selectedWord;
let guessedLetters = [];
let hangmanParts = 0;

const hangmanWordElement = document.getElementById('answer-section');
const letterButtons = document.querySelectorAll('.letter');


letterButtons.forEach(button => {
    button.addEventListener('click', () => handleGuess(button.textContent));
});


letterButtons.forEach(button => {
    button.addEventListener('click', () => handleGuess(button.textContent));
});


window.addEventListener('keydown', (event) => {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        const letter = event.key.toLowerCase();
        handleGuess(letter);
    }
});

function initializeGame() {

    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    hangmanParts = 0;
    updateHangmanWord();
    updateHangmanMan();
}

function updateHangmanWord() {
    hangmanWordElement.innerHTML = selectedWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
}

function handleGuess(letter) {
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);
    } else {
        hangmanParts++;
        updateHangmanMan();
    }

    updateHangmanWord();
    checkGameOver();
}

function updateHangmanMan() {
    switch (hangmanParts) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftHand();
            break;
        case 4:
            rightHand();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
}

function checkGameOver() {
    if (hangmanParts >= 6) {
        alert('Game Over! You lost. The word was: ' + selectedWord);
        initializeGame();
    } else if (!hangmanWordElement.textContent.includes('_')) {
        alert('Congratulations! You won!');
        initializeGame();
    }
}

initializeGame();
