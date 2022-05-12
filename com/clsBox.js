class clsBox{
    constructor(pCtx, number=null, type, posx,posy){
        this.ctx=pCtx
        this.number = number;
        this.type = type;
       
        this.pos = new clsPoint(posx,posy);
    }
}