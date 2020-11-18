class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
     
    drawHTMLToken() {
        let div = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(div);
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'token');
        div.style.backgroundColor = this.owner.colour;
    }

    get htmlToken() {
        return this.drawHTMLToken();
    }
}
