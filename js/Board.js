class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /**
     * Generates a 2D array of spaces
     * @return {Array} An array of space objects
     */
    createSpaces() {
        const board = [];
        for (let i = 0; i < this.columns; i++) {
            const column = [];
            for (let j = 0; j < this.rows; j++) {
                column.push(new Space(i, j));
            }
            board.push(column);
        }
        return board;
    }

    /**
     * 
     */
    drawHTMLBoard() {
        for (let i = 0; i < this.spaces.length; i++) {
            for (let j = 0; j < this.spaces[i].length; j++) {
                this.spaces[i][j].drawSVGSpace();
            }
        }
    }
}