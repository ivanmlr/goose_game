class clsInteract{
    constructor(pParent){
        this.Doc=pParent.Doc;
        this.parent=pParent;
        this.Doc.addEventListener('keypress', this._keypressed.bind(this))
        this.Doc.addEventListener('mousemove', this._mousemove.bind(this)) 
        this.MousePositionPoint = new clsPoint(0,0);
        this.blockedspace = false;
    }

    _keypressed(e){
        console.log('_______keypress  == ' + e.keyCode);
        console.log("interact class")
        var tEvent=new Event('__KEYPRESS_CUSTOM', e);
        var new_event = new e.constructor(tEvent.type, e)
        if(e.keyCode == 32 && this.blockedspace == true){
            return;
        }
        this.Doc.dispatchEvent(new_event); 
    }

    _mousemove(e){
        var tP=GetMousePos(e.x,e.y);
        var t = tP.x + " / " + tP.y;
        Print(t);
        this.MousePositionPoint.x = tP.x;
        this.MousePositionPoint.y = tP.y;

    }





}