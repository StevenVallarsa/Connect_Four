class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
     
    drawHTMLToken() {
        let div = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(div);
        div.setAttribute('id', this.id);
        div.setAttribute('class', 'token');
        div.style.backgroundColor = this.owner.colour;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation--;
        }
    }

    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation++;
        }
    }

	drop(target, reset) {
        this.dropped = true;
        
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
	}
}
