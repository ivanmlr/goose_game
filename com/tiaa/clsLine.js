class clsLine{
    constructor(pCtx,pPTorigx=null,pPTorigy=null,pPTdestx=null,pPTdesty=null){
        this.ctx= pCtx;
        this.PTOrigx=pPTorigx;
        this.PTDestx = pPTdestx;
        this.PTOrigy=pPTorigy;
        this.PTDesty = pPTdesty;
        this.a;
        this.b;
        this.h;
        this.sen;
        this.asen;
        this.anglerad;
    }

    Draw(){
        if (this.PTDestx !=null && this.PTOrigy != null){
            this.ctx.beginPath();
            this.ctx.moveTo(this.PTOrigx,this.PTOrigy);
            this.ctx.lineTo(this.PTDestx,this.PTDesty);
            this.ctx.stroke();
           

            this.anglerad =  this.getAnglerad();
            


            //Print(this.getAngle());


        }
    }



    getHipotenusa(){
        this.a = this.PTOrigy-this.PTDesty;
        this.b = this.PTDestx-this.PTOrigx;
        return Math.sqrt(Math.pow(this.a,2)+Math.pow(this.b,2))
    }


    getAnglerad(){
        this.h = this.getHipotenusa();
        this.sen = this.a/this.h;
        this.asin = Math.asin(this.sen);
        if(this.b<0){
            return Math.PI - this.asin
        }
        else if(this.a < 0 && this.b >0){ 
            return 2*Math.PI + this.asin
        }
        else{
            return(this.asin);
        }
    }

    getAngle(){
        this.angle = this.anglerad * 180 / Math.PI;
        return this.angle
    }
}