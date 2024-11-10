

const cordArray = [];

function checkIntersection(){
    let x1Cord = cordArray[0].xCord;
    let x2Cord = cordArray[1].xCord;
    let y1Cord = cordArray[0].yCord;
    let y2Cord = cordArray[1].yCord;
    let r1 = cordArray[0].radius;
    let r2 = cordArray[1].radius;

    return Math.hypot(x1Cord - x2Cord , y1Cord - y2Cord) <= r1 +r2;
}

document.addEventListener("click" , (e)=>{
    const count = document.querySelectorAll(".circle");
    if(count.length === 2){
        count.forEach(circ => {
            document.body.removeChild(circ);
            cordArray.shift();
        });
    }

    
    const xCord = e.clientX;
    const yCord = e.clientY;
    
    const radius = Math.floor(Math.random()*(200-50)+50);

    cordArray.push({xCord , yCord , radius});
    
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top=yCord- radius + "px";
    circle.style.left=xCord- radius + "px";
    circle.style.height = 2*radius + "px";
    circle.style.width = 2*radius + "px";
    
    document.body.appendChild(circle);

    if(cordArray.length === 2){
        const res = checkIntersection();
        setTimeout(function() {
            alert("Intersection : " + res);
          }, 200);
          
        
    }


})