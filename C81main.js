canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var lastPositionX,lastPositionY
var widtLine=2
color="red"

var width=screen.width
var height=screen.height

var newWidth=screen.width-70
var newHeight=screen.height-300


if (width<992){
    document.getElementById("myCanvas").width=newWidth
    document.getElementById("myCanvas").width=newHeight
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",myTouchStart)

function myTouchStart(e){
    console.log("iniciando touch do app")
    color=document.getElementById("color").value
    widtLine=document.getElementById("widthLine").value
    lastPositionX=e.touches[0].clientX-canvas.offsetLeft
    lastPositionY=e.touches[0].clientY-canvas.offsetTop
}


canvas.addEventListener("touchmove",myTouchMove)
function myTouchMove(e){
    console.log("touch de movimento iniciado")
    curentPositionX=e.touches[0].clientX-canvas.offsetLeft
    curentPositionY=e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widtLine
   
    console.log("ultimas posiçoes de x e y ")
    console.log("x= "+lastPositionX+" y= "+lastPositionY)    
    ctx.moveTo(lastPositionX,lastPositionY)
        
    console.log(" posiçoes atuais de x e y ")
    console.log("x= "+curentPositionX+" y= "+curentPositionY)    
    ctx.lineTo(curentPositionX,curentPositionY)    
    ctx.stroke()    
    lastPositionX=curentPositionX
    lastPositionY=curentPositionY    

        
        
    

}


function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

}

