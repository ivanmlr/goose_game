class clsRock{
    constructor(pCtx, pId){

        this.sprite=new clsSprite(pCtx, pId,"imgs/rocks2/", 2, '.png', 20,20, 1 );
        this.id =pId;
        var flw=this.sprite.flw;

        //flw.pt.x= GetRandom(800);
        //flw.pt.y=0;
        this.cambio = 0;
        flw.spin_velo=GetRandom(0.005);
        
        this.sprite.scale=GetRandom(0.1);;

        flw._velocity=5*GetRandom(1);;
        flw._rotation=GetRandom(360);;
        //
        flw.friction=0//-0.001;
        flw.walls = 0;
        this.default=1;
    }
    /////////////////////////////////////////////////////////////
    configureFollower(){

        this.sprite.scale=+this.id/10;
        
        this.sprite.flw.pt.x = this.id*150;
        
        if (this.sprite.flw.pt.y > 595){
            this.cambio = 1;
        }
        else if (this.sprite.flw.pt.y < 0){
            this.cambio = 0;
        }

        if (this.cambio == 0){
            this.sprite.flw._rotation = 40;
        }
        else if (this.cambio == 1){
            this.sprite.flw._rotation = 300;
        }
    }
    /////////////////////////////////////////////////////////////
    Draw(){
        //console.log("Draw clsRock");
        //this.sprite.flw._rotation=this.sprite.flw._rotation+0.01
        //this.sprite.flw.rotateRight()

        /*if(this.default == 1){
            this.configureFollower()

        }*/


        this.sprite.Draw();

       

    }
}