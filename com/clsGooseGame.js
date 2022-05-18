class clsGooseGame {
    constructor(pWin, pDoc) {
        console.log('__clsAsteroirdGame_______________');
        this.Doc = pDoc;
        this.win = pWin;
        this.frame = 0;
        //this.pretime=0;
        this.canvas = this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.INTERACT = new clsInteract(this);
        this.dice = new clsDice(this.ctx);
        this.board = new clsBoard(this.ctx);
        this.player1 = new clsPlayer(this.ctx, "blue", this.board, this.INTERACT);
        this.player2 = new clsPlayer(this.ctx, "red", this.board, this.INTERACT);

        this.currentplayer = this.player1;
        this.backgroundmusic = new clsSound("audio/The_Entertainer_-_Scott_Joplin.ogg", true, 0.3);
        this.blinking = 0;
        this.stop = 0;
        this.nextBox;
        this.lastroll;
        this.imageBACKG0;
        this.imageBACKG1;
        this.turn = 1;
        this.text1 = new clsText(this.ctx, "     Jugadores \nJugador 1: Casilla 1 \nJugador 2: Casilla 1", "30px Arial", "black", 1200, 300)
        this.text2 = new clsText(this.ctx, "Turno del jugador", "30px Arial", "red", 1200, 250);
        this.text3 = new clsText(this.ctx, "You WIN", "30px Arial", "black", 671, 430);

        this.CreateBackground();
        this.CreateSprites();
        this.CreateEvents();

        this.startScreen();
        this._loop();

        //this.winScreen();


    }


    CreateEvents() {
        this.Doc.addEventListener('__KEYPRESS_CUSTOM', this._InteractionCallBack.bind(this));
        this.Doc.addEventListener('win', this.winScreen.bind(this), false);

    }

    
    ////////////////////////////////////////////////////////////////////////////
    CreateBackground() {

        this.imageBACKG1 = new clsImage('imgs/background/tablerofondo.png', this.ctx, 1, null, null, 3);
    }

    ////////////////////////////////////////////////////////////////////////////

    CreateSprites() {
        this.startsplash = new clsSprite(this.ctx, null, "imgs/init_splash/", 1, '.png', 50, 0, 1)
        this.startsplash.flw.pt.x=750;
        this.startsplash.flw.pt.y=300;

        this.textstart= new clsSprite(this.ctx, null, "imgs/textstart/", 1, '.png', 50, 0, 0.4)
        this.textstart.flw.pt.x=750;
        this.textstart.flw.pt.y=550;
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////

    _InteractionCallBack(e) {
        console.log('_InteractionCallBack=  ' + e.keyCode);


        if (e.keyCode == 109) {
            if (this.backgroundmusic.Audio.muted == false) {
                this.backgroundmusic.Audio.muted = true;
                this.mute = true;
            }
            else if (this.backgroundmusic.Audio.muted == true) {
                this.backgroundmusic.Audio.muted = false;
                this.mute = false;
            }
        }

        if (e.keyCode == 32 && this.started == 0) {
            this.started = 1;
            this.board.sprite.alpha = 1;
            this.player1.piece.sprite.alpha= 1;
            this.player2.piece.sprite.alpha= 1;
            this.dice.sprite.alpha= 1;
            this.text1.ctx.globalAlpha = 1;

            this.backgroundmusic.Play();
        }
        else if (e.keyCode == 32) { //
            ///this.player1.sprite.flw._rotation=3.1415;
            this.INTERACT.blockedspace = true;
            this.board.sprite.alpha = 0.6;
            this.changeTrun();
            console.log("diceroll");
            this.dice.RollDice();
            this.currentplayer.move(this.dice.result);
            //this.checkBox();


        }


    }



    //////////////////////////////////////////////////////////////////////////////////////////////////

    startScreen() {

        this.board.sprite.alpha = 0.1;
        this.player1.piece.sprite.alpha= 0.1;
        this.player2.piece.sprite.alpha= 0.1;
        this.dice.sprite.alpha= 0.1;
        this.text1.ctx.globalAlpha = 0.1;
        this.started = 0;




    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

    winScreen() {
        //this.currentplayer = this.player2;
        this.endscreen = new clsImage('imgs/endsplash/end'+this.currentplayer.color+'.png', this.ctx, 1, null, null, 1);
        this.stop = 1;
        this.ctx.clearRect(0, 0, 1500, 800);
        this.endscreen.Draw();

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    changeTrun() {
        if (this.turn == 1) {
            if (this.currentplayer.extraturns == 0) {
                if (this.player2.extraturns < 0) {
                    this.player2.extraturns++;
                }
                else {
                    this.turn = 2;
                    this.currentplayer = this.player2;
                }
            }
            else if (this.currentplayer.extraturns < 0) {
                this.currentplayer.extraturns++;
                this.turn = 2;
                this.currentplayer = this.player2;
            }
            else {
                this.currentplayer.extraturns--;
            }

        }
        else if (this.turn == 2) {
            if (this.currentplayer.extraturns == 0) {
                if (this.player1.extraturns < 0) {
                    this.player1.extraturns++;
                }
                else {
                    this.turn = 1;
                    this.currentplayer = this.player1;
                }

            }
            else if (this.currentplayer.extraturns < 0) {
                this.currentplayer.extraturns++;
                this.turn = 1;
                this.currentplayer = this.player1;
            }
            else {
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
    blinkText(text){
        if (this.frame == 0 || this.frame % 30 == 0) {
            if(this.blinking == 0){
                text.alpha = 0.5
                this.blinking = 1;
            }
            else{
                text.alpha = 1
                this.blinking = 0;
            }

        }

    }
    /////////////////////////////////////////////////////////////////////////////

    _DrawCanvasRect() {
        this.ctx.beginPath();
        this.ctx.lineWidth = "4";
        this.ctx.strokeStyle = "green";
        this.ctx.rect(0, 0, 1500, 800);
        this.ctx.stroke();
    }

    ////////////////////////////////////////////////////////////////////////////
    _loop() {

        if (this.stop == 0) {
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

            if(this.started == 0){
                this.startsplash.Draw();
                this.textstart.Draw();
                this.blinkText(this.textstart);
            }

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