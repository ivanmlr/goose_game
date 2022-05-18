class clsPiece{
    constructor(pCtx,color){
        this.ctx=pCtx
        this.sprite;
        this.color = color;
        this.CreateSprites();
        this.audio = new clsSound("audio/movepiece.wav",false, 1);

    }

    CreateSprites(){
        if(this.color=="blue"){
            this.sprite=new clsSprite(this.ctx, 'AR',"imgs/pj1/",1, '.png', 50,30,0.1); 
            this.sprite.flw.pt.x=120;
            this.sprite.flw.pt.y=690;
        }
        else if(this.color=="red"){
            this.sprite=new clsSprite(this.ctx, 'AR',"imgs/pj2/",1, '.png', 50,30,0.1); 
            this.sprite.flw.pt.x=120;
            this.sprite.flw.pt.y=720;
        }
        else if(this.color=="green"){
            this.sprite=new clsSprite(this.ctx, 'AR',"imgs/pj3/",1, '.png', 50,30,0.1); 
            this.sprite.flw.pt.x=120;
            this.sprite.flw.pt.y=760;
        }
        else if(this.color=="yellow"){
            this.sprite=new clsSprite(this.ctx, 'AR',"imgs/pj4/",1, '.png', 50,30,0.1); 
            this.sprite.flw.pt.x=120;
            this.sprite.flw.pt.y=780;
        }



        this.sprite.scale = 0.2;



    }
    /////////////////////////////////////////////////////////////////

    move(posx,posy){
        if(this.color == "red"){
            this.sprite.flw.pt.x = posx;
            this.sprite.flw.pt.y = posy-20;
        }
        else{
            this.sprite.flw.pt.x = posx;
            this.sprite.flw.pt.y = posy;
        }

        this.audio.Play();
    }
    /////////////////////////////////////////////////////////////////

    Draw(){
        

        this.sprite.Draw()
    }
}