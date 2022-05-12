class clsText{
    constructor(pCtx, text="Lore ipsum \n Lore ipsum", font="30px Arial", color="black", posy=400, posx=400){
        this.ctx=pCtx
        this.text=text;
        this.ctx.fillStyle = color;
        this.ctx.font = font;
        this.posy = posy;
        this.posx = posx;
        this.lineheight = 50;
        this.color = color;
        this.lines = this.text.split('\n'); //Las lineas en el texto introducido se separan con \n

    }
    changeText(){
        this.lines = this.text.split('\n'); //Las lineas en el texto introducido se separan con \n
    }
    /////////////////////////////////////////////////////////////////
    Draw(){
        this.ctx.fillStyle = this.color;
        for (var i = 0; i<this.lines.length; i++)
        this.ctx.fillText(this.lines[i], this.posy, this.posx + (i*this.lineheight) );

    }
}