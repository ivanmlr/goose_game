class clsDice{
    constructor(pCtx){
        this.ctx=pCtx
        this.sprite = new clsSprite(pCtx, null,"imgs/dice/",6, '.png', 50,30,0.1)
        this.result = 0;
        this.sprite.flw.pt.x=1300;
        this.sprite.flw.pt.y=160;
        this.sprite.flw.xfloor=149;
        this.sprite.scale = 0.2;
        this.sprite.flw.friction =-0.2;
        this.lastroll = 0;
        this.audio = new clsSound("audio/rolldice.mp3",false, 1);

        //this.sprite.flw.friction=-0.01;
        this.sprite.flw.gravity=0; 
    }





    /////////////////////////////////////////////////////////////////
    RollDice(){
        this.audio.Play();
        this.result = GetRandomMinMax(0,5);
        this.lastroll = this.result;

    }

    /////////////////////////////////////////////////////////////////
    Draw(){

        this.sprite.current_frame=this.lastroll;
        this.sprite.Draw() 
    }
}