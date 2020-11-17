class Player {
    constructor(name, id, colour, isTurn = false) {
        this.name = name;
        this.id = id;
        this.colour = colour;
        this.isTurn = isTurn;
        this.tokens = this.createToken(21);
    }

    /**
     * Creates token objects for player
     * @param  {integer} num - Number of token objects to be created
     * @param  {array}   tokens - an array of new token objects
     */
    createToken(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            tokens.push(new Token(this, i));
        }
        return tokens;
    }
}