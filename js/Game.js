class Game {
    constructor() {
        this.board = new Board();;
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Generates 2 player objects
     * @return {Array} array of two player objects
     */
    createPlayers() {
        return [
            new Player("Player 1", 1, "#e15258", true),
            new Player("Player 2", 2, "#e59a13")
        ];
    }

    /**
     * Starts game
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        console.log(this.activePlayer.activeToken);
        this.ready = true;

    }

    /**
     * Returns active player
     * @return {Player} 
     */
    get activePlayer() {
        return this.players.find(player => player.isTurn);
    }

    /**
     * Keydown event to move token on board
     */
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === 'ArrowRight') {
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === 'ArrowLeft') {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === 'ArrowDown') {
                this.playToken();
            }
        }
    }

    /**
     * provided
     */
    playToken(){
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

		for (let space of targetColumn) {
			if (space.token === null) {
				targetSpace = space;
			}
        }

        if (targetSpace !== null) {
            game.ready = false;
    		activeToken.drop(targetSpace);   
        }              
    }
    
}