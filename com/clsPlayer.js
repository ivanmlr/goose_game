class clsPlayer {
    constructor(pCtx, color, board, ) {
        this.ctx = pCtx
        this.color = color;
        this.piece = new clsPiece(this.ctx, this.color);
        this.position = 0;
        this.board = board;
        this.stop = 1;
        this.frame = 0;
        this.extraturns = 0;
        this.well = false;
        this.reverse = 0;
        this.win = new Event('win');
    }


    _movePiece() {
        var pt = this.board.getPosition(this.position);
        this.piece.move(pt.x, pt.y);


    }

    /////////////////////////////////////////////////////////////////
    Draw() {

        this.piece.Draw()
    }

    /////////////////////////////////////////////////////////////////
    move(diceValue) {
        this.nextBox = this.position + diceValue + 1;
        this.stop = 0;
        this._loop();

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    checkBox() {
        var type = this.board.getType(this.position);
        var nextType = this.board.findnextofthisType(this.position);

        switch (type) {
            case "goose":
                if(this.position == 59){
                    document.dispatchEvent(this.win);
                    console.log("win");
                }
                else if(this.position == 58){
                    this._movePiece();
                    document.dispatchEvent(this.win);
                    console.log("win");
                }
                this.position = nextType.number - 1;
                this._movePiece();

            break;
            case "inn":
                this.extraturns--;
            break;
            case "bridge":
                this.position = nextType.number - 1;
                this._movePiece();
                this.extraturns++;
            break;
            case "dice":
                this.position = nextType.number - 1;
                this._movePiece();
                this.extraturns++;
            break;
            case "maze":
                this.position = 29;
                this._movePiece();
            break;
            case "death":
                this.position = 0;
                this._movePiece();
            break;
            case "well":
                this.extraturns = this.extraturns- 4;
                this.well = true;
            break;
            case "prison":
                this.extraturns = this.extraturns- 4;
            break;

        }
    }

    /////////////////////////////////////////////////////////////////
    _loop() {
        if (this.stop == 1) {
            this.board.sprite.alpha = 1;
            return;
        }

        if (this.frame == 0 || this.frame % 30 == 0) {
            if (this.nextBox > this.position) {
                if (this.position == 59) {
                    if (this.nextBox > 59) {
                        this.reverse = this.nextBox - 59;
                        this.nextBox = 59 - this.reverse;
                    }
                }
                else {
                    this.position++;
                    this._movePiece();
                }



            }
            else if (this.nextBox < this.position) {
                this.position--;
                this._movePiece();

            }
            else {
                this.stop = 1;
                this.checkBox();
            }
        }

        this.frame++;

        if (this.stop == 0) {
            window.requestAnimationFrame(this._loop.bind(this));
        }

    }


}