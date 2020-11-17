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
        
    }
}