class clsGooseGame {
    constructor(pWin, pDoc) {
        console.log('__clsAsteroirdGame_______________');
        this.Doc = pDoc;
        this.win = pWin;
        this.frame = 0;
        //this.pretime=0;
        this.canvas = this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
       
        this.dice = new clsDice(this.ctx);
        this.board = new clsBoard(this.ctx);
        this.player1 = new clsPlayer(this.ctx, "blue", this.board);
        this.player2 = new clsPlayer(this.ctx, "red", this.board);
        this.currentplayer = this.player1;
        this.backgroundmusic = new clsSound("audio/The_Entertainer_-_Scott_Joplin.ogg",true, 0.3);
        this.stop = 0;
        this.nextBox;
        this.lastroll;
        this.imageBACKG0;
        this.imageBACKG1;
        this.turn = 1;
        this.text1 = new clsText(this.ctx, "     Jugadores \nJugador 1: Casilla 1 \nJugador 2: Casilla 1", "30px Arial", "black", 1200, 300)
        this.text2 = new clsText(this.ctx, "Turno del jugador", "30px Arial", "red", 1200, 250);
        this.text3 = new clsText(this.ctx, "You WIN", "30px Arial", "black", 671, 430);
        this.INTERACT = new clsInteract(this);
        this.CreateBackground();
        this.CreateSprites();
        this.CreateEvents();

        this._loop();
    }


    CreateEvents() {
        this.Doc.addEventListener('__KEYPRESS_CUSTOM', this._InteractionCallBack.bind(this));
        this.Doc.addEventListener('win', this.winScreen.bind(this),false);
        
    }
    ////////////////////////////////////////////////////////////////////////////
    CreateBackground() {

        this.imageBACKG1 = new clsImage('imgs/background/tablerofondo.png', this.ctx, 1, null, null, 3);
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////

    _InteractionCallBack(e) {
        console.log('_InteractionCallBack=  ' + e.keyCode);

        if (e.keyCode == 13) {
            this.backgroundmusic.Play();
        }
        if (e.keyCode == 109) {
            if(this.backgroundmusic.Audio.muted == false){
                this.backgroundmusic.Audio.muted = true;
                this.mute=true;
            }
            else if(this.backgroundmusic.Audio.muted == true){
                this.backgroundmusic.Audio.muted = false;
                this.mute=false;
            }
        }

        if (e.keyCode == 32) { //
            ///this.player1.sprite.flw._rotation=3.1415;
            this.board.sprite.alpha = 0.2;
            this.changeTrun();
            console.log("diceroll");
            this.dice.RollDice();
            this.currentplayer.move(this.dice.result);
            //this.checkBox();


        }

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////

    winScreen(){
        this.text3 = new clsText(this.ctx, "You WIN "+this.currentplayer.color, "30px Arial", "black", 671, 430);
        this.stop=1;
        this.ctx.clearRect(0, 0, 1500, 800);
        this.imageBACKG1.Draw();
        this.text3.Draw();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    changeTrun() {
        if (this.turn == 1) {
            if(this.currentplayer.extraturns == 0){
                if(this.player2.extraturns<0){
                    this.player2.extraturns++;
                }
                else{
                    this.turn = 2;
                    this.currentplayer = this.player2;
                }
            }
            else if(this.currentplayer.extraturns<0){
                this.currentplayer.extraturns++;
                this.turn = 2;
                this.currentplayer = this.player2;
            }
            else{
                this.currentplayer.extraturns--;
            }

        }
        else if (this.turn == 2) {
            if(this.currentplayer.extraturns==0){
                if(this.player1.extraturns<0){
                    this.player1.extraturns++;
                }
                else{
                    this.turn = 1;
                    this.currentplayer = this.player1;
                }

            }
            else if(this.currentplayer.extraturns<0){
                this.currentplayer.extraturns++;
                this.turn = 1;
                this.currentplayer = this.player1;
            }
            else{
                this.currentplayer.extraturns--;
            }
        }

    }
    /////////////////////////////////////////////////////////////////////////////
    textChange() {
        this.text1.text = `    Jugadores \nJugador 1: Casilla ${this.player1.position + 1} \nJugador 2: Casilla ${this.player2.position + 1}`
        this.text1.changeText();
        this.text2.text = `Turno del jugador ${this.turn}`
        this.text2.changeText();
    }

    /////////////////////////////////////////////////////////////////////////////

    CreateSprites() {

    }
    ////////////////////////////////////////////////////////////////////////////

    _DrawCanvasRect() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "4";
        this.ctx.strokeStyle = "green";
        this.ctx.rect(0, 0, 1500, 800);
        this.ctx.stroke();
    }

    ////////////////////////////////////////////////////////////////////////////
    _loop() {
        if(this.stop == 0){
            this.ctx.clearRect(0, 0, 1500, 800);
            this.imageBACKG1.Draw();
            this.board.Draw();

            //this.playTrun();

            this.textChange();

            this.player1.Draw();
            this.player2.Draw();
            this.text1.Draw();
            this.text2.Draw();
            this.dice.Draw();

            this.frame++;
            window.requestAnimationFrame(this._loop.bind(this));
        }
    }



    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////

}