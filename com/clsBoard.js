class clsBoard{
    constructor(pCtx){
        this.ctx=pCtx
        this.sprite=new clsSprite(this.ctx, 'AR','imgs/background/',1, '.png', 50,30,1); 
        this.sprite.flw.pt.x=560;
        this.sprite.flw.pt.y=390;
        this.boxes = 
        [
        new clsBox(this.ctx,1,"basic",116,735),
        new clsBox(this.ctx,2,"basic",282,722),
        new clsBox(this.ctx,3,"basic",379,711),
        new clsBox(this.ctx,4,"basic",462,722),
        new clsBox(this.ctx,5,"goose",550,722),
        new clsBox(this.ctx,6,"bridge",645,722),
        new clsBox(this.ctx,7,"basic",731,722),
        new clsBox(this.ctx,8,"basic",820,722),
        new clsBox(this.ctx,9,"goose",914,709),
        new clsBox(this.ctx,10,"basic",1007,658),
        new clsBox(this.ctx,11,"basic",1040,565),
        new clsBox(this.ctx,12,"bridge",1048,484),
        new clsBox(this.ctx,13,"basic",1042,397),
        new clsBox(this.ctx,14,"goose",1042,307),
        new clsBox(this.ctx,15,"basic",1029,212),
        new clsBox(this.ctx,16,"basic",970,120),
        new clsBox(this.ctx,17,"basic",890,87),
        new clsBox(this.ctx,18,"goose",800,85),
        new clsBox(this.ctx,19,"inn",715,85),
        new clsBox(this.ctx,20,"basic",625,90),
        new clsBox(this.ctx,21,"basic",544,85),
        new clsBox(this.ctx,22,"basic",449,82),
        new clsBox(this.ctx,23,"goose",359,87),
        new clsBox(this.ctx,24,"basic",269,83),
        new clsBox(this.ctx,25,"basic",189,95),
        new clsBox(this.ctx,26,"dice",111,134),
        new clsBox(this.ctx,27,"goose",55,221),
        new clsBox(this.ctx,28,"basic",80,310),
        new clsBox(this.ctx,29,"basic",71,402),
        new clsBox(this.ctx,30,"basic",84,495),
        new clsBox(this.ctx,31,"well",159,567),
        new clsBox(this.ctx,32,"goose",256,576),
        new clsBox(this.ctx,33,"basic",346,575),
        new clsBox(this.ctx,34,"basic",431,570),
        new clsBox(this.ctx,35,"basic",521,569),
        new clsBox(this.ctx,36,"goose",615,570),
        new clsBox(this.ctx,37,"basic",712,567),
        new clsBox(this.ctx,38,"basic",800,559),
        new clsBox(this.ctx,39,"basic",872,498),
        new clsBox(this.ctx,40,"basic",888,420),
        new clsBox(this.ctx,41,"goose",891,345),
        new clsBox(this.ctx,42,"maze",860,252),
        new clsBox(this.ctx,43,"basic",764,226),
        new clsBox(this.ctx,44,"basic",697,226),
        new clsBox(this.ctx,45,"goose",635,229),
        new clsBox(this.ctx,46,"basic",566,232),
        new clsBox(this.ctx,47,"basic",506,237),
        new clsBox(this.ctx,48,"basic",444,240),
        new clsBox(this.ctx,49,"basic",374,234),
        new clsBox(this.ctx,50,"goose",289,229),
        new clsBox(this.ctx,51,"basic",214,314),
        new clsBox(this.ctx,52,"basic",225,417),
        new clsBox(this.ctx,53,"dice",313,426),
        new clsBox(this.ctx,54,"goose",374,428),
        new clsBox(this.ctx,55,"basic",439,426),
        new clsBox(this.ctx,56,"prison",509,425),
        new clsBox(this.ctx,57,"basic",575,435),
        new clsBox(this.ctx,58,"death",633,418),
        new clsBox(this.ctx,59,"goose",709,440),
        new clsBox(this.ctx,60,"goose",774,436)]
    }


    getPosition(pos){
        return this.boxes[pos].pos;
    }
    
    getType(pos){
        return this.boxes[pos].type;
    }

    findnextofthisType(start){
        var i = start+1;
        while(i<this.boxes.length){
            if(this.boxes[i].type == this.boxes[start].type){
                return this.boxes[i];
            }
            else{
                i++;
                if(i == 60){
                    i=0;
                }
            }
        }
    }

    Draw(){
        this.sprite.Draw();
    }
}