document.getElementById('generateButton').addEventListener('click', function() {
    const participantsInput = document.getElementById('participants').value.trim();
    const participants = participantsInput.split('\n').map(name => name.trim());

    const pairs = secretSanta(participants);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>Pairs:</h2>';
    
    pairs.forEach(pair => {
        const [giver, receiver] = pair;
        const pairText = document.createElement('p');
        pairText.textContent = `${giver} - ${receiver}`;
        resultDiv.appendChild(pairText);
    });
});

function secretSanta(participants) {
    const givers = participants.slice();
    const receivers = participants.slice();
    shuffleArray(receivers);

    while (givers.some((giver, index) => giver === receivers[index])) {
        shuffleArray(receivers);
    }

    return givers.map((giver, index) => [giver, receivers[index]]);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
