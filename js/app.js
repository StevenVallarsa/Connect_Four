const game = new Game();

const beginGame = document.getElementById('begin-game');

beginGame.addEventListener('click', (e) => {
    game.startGame();
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
})