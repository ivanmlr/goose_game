class clsExplosiveRock{
    constructor(pCtx, pId){

        this.sprite=new clsSprite(pCtx, pId,"imgs/rocks2/", 2, '.png', 20,20, 1 );
        this.id =pId;
        var flw=this.sprite.flw;

        this.separacion = this.id+1;

        flw.pt.x= this.separacion*100;
        flw.pt.y=GetRandomMinMax(100,500);
        this.cambio = 0;
        flw.spin_velo=0;
        this.rocknum = 6;
        this.rocks = [];
        
        this.canvas=document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    
        this.angulo = 0;
        this.sprite.ignoreimagerotation =1;
        this.sprite.scale=0.5;
        this.sprite.flw.spin_velo = 0;//.0000000000000001;
        flw._velocity=0;
        flw._rotation=0;
        //
        flw.friction=0//-0.001;
        flw.walls = 0;
        this.createExplosion();
        
    }
    /////////////////////////////////////////////////////////////
    configureFollower(){

    }
    /////////////////////////////////////////////////////////////
    Draw(){
        //console.log("Draw clsRock");
        //this.sprite.flw._rotation=this.sprite.flw._rotation+0.01
        //this.sprite.flw.rotateRight()

        
        this.sprite.Draw();

        
        for (var i=0;i<this.rocknum;i++){

            this.rocks[i].Draw();
            if( this.rocks[i].sprite.scale < 0.1){
                this.rocks[i].sprite.scale += 0.0001;
            }
        }
    }
    ///////////////////////////////////////////////////////////////////

    createExplosion(){
        for (var i=0;i<this.rocknum;i++){
            var tR= new clsRock(this.ctx, i );
            var flw=tR.sprite.flw;

            flw.pt.y = this.sprite.flw.pt.y;
            flw.pt.x = this.sprite.flw.pt.x;
            tR.sprite.scale = 0.05;
            flw._rotation = this.angulo;
            this.angulo = this.angulo+45;
            flw._velocity = 0.5;

            this.rocks.push(tR);

        }
    }

    Move(){
        this.sprite.flw._velocity = 1;
    }
}
