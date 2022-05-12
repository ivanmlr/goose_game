var mGame;
var mUtils;
console.log('Starting...');


function GetRandom(pMax){
    return pMax*Math.random()
}

function GetRandomMinMax(pMin,pMax){
    return Math.round(Math.random() * (pMax - pMin)) + pMin;
}

function GetCanvas(){
    return document.getElementById('canvas')
}
function GetCanvasRect(){
    return document.getElementById('canvas').getBoundingClientRect();
}

function GetDistance(a,b){
    var f1 = Math.pow(a.x-b.x,2)
    var f2 = Math.pow(a.y-b.y,2)
    return Math.sqrt(f1+f2)
}
///////////////////////////////////////////////////////
function PointInRect(px,py,pRect){
    var tRet=false;
    if (px>pRect.left){
        if (px<pRect.left + pRect.width){
            if (py>pRect.top){
                //console.log('guuuuuuuu')
                if (py<pRect.top + pRect.height){
                    tRet=true;
                }
            }
        }
    }
    return tRet;
}
///////////////////////////////////////////////////////
function GetMousePos(px,py){
    var rect =  GetCanvasRect();  
    var x = px - rect.left;              
    var y = py - rect.top;
    var xf= 1500/rect.width;
    var yf= 800/rect.height;
    var t = x*xf + " / " + y*yf;
    return {x: x*xf, y: y*yf};
}

function Print(pMsg){
   document.getElementById('txtMessages1').innerHTML= pMsg;
}

function Print2(pMsg){
    document.getElementById('txtMessages2').innerHTML= pMsg;
}


window.onload= function(){
    if (document.readyState=="complete"){
        mGame= new clsGooseGame(window,this.document);
        mUtils= new clsUtils();
    }
  
}

