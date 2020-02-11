document.addEventListener("DOMContentLoaded",function(){
   
   let range = document.querySelector("#percent-range1");
   let display = document.querySelector("#percent-displayer1");
   display.innerText = range.value;
   range.addEventListener("input",function(){
       display.innerText = range.value;
       percentCircle1(range,display);
       percentCircle2(range,display);
       
   });
});
function percentCircle1(range,display){
    let percent = range.value;
       let val = (percent/100) * 360 - 90;
       if(percent <= 50){
           document.querySelector(".counter >.under50").
           style.setProperty("background-image","linear-gradient(90deg, transparent 50%, transparent 50% )");
   
           document.querySelector(".counter >.bg-white").
           style.setProperty("background-image","linear-gradient("+ val +"deg, white 50% , transparent 50% )");
       }else{
           document.querySelector(".counter >.bg-white").
           style.setProperty("background-image","linear-gradient(90deg, transparent 50% , transparent 50% )");
           
           document.querySelector(".counter >.under50").
           style.setProperty("background-image","linear-gradient("+ val +"deg, transparent 50%, blue 50% )");
       }
}

function percentCircle2(range,display){
    let value = parseFloat(range.value);
    let counterHandle = document.querySelector(".counter2>.circle>.bg-percent");
    if(value <= 12.5){
        counterHandle.style.setProperty("clip-path","polygon(50% 50%, 50% 0%," +  (50+value*4) + "% 0%)");
    }else if(value > 12.5 && value <= 25){
        counterHandle.style.setProperty("clip-path","polygon(50% 50%, 50% 0%, 100% 0%,100% " + (value*4-50) +"%)");
    }else if(value > 25 && value <= 37.5){
        counterHandle.style.setProperty("clip-path","polygon(50% 50%, 50% 0%, 100% 0%,100% 50%,100%"+ (value*4-50) +"%)");
    }else if(value > 37.5 && value <= 50){
        let operations = 100-((100-(137.5-value))*4);
        counterHandle.style.
        setProperty("clip-path","polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, " + operations + "% 100%)");
    }else if(value > 50 && value <= 62.5){
        let operations = 100-((100-(137.5-value))*4);
        counterHandle.style
        .setProperty("clip-path","polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%," + operations + "% 100%)");
    }else if(value > 62.5 && value <=75){
        let operations = 100-((100-(162.5-value))*4);
        counterHandle.style
        .setProperty("clip-path",
        "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 100% 100%, 0% 100%, 0% " + operations + "%)");
    }else if(value > 75 && value <=87.5){
        let operations = 100-((100-(162.5-value))*4);
        counterHandle.style
        .setProperty("clip-path",
        "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 100% 100%, 0% 100%,0% 50%, 0%" + operations + "%)");
    }else if(value > 87.5 && value <=100){
        let operations = (100 - (187.5 - value)) * 4;
        counterHandle.style
        .setProperty("clip-path",
        "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 100% 100%, 0% 100%, 0% 50%, 0% 0%," + operations + "% 0%)");
    }
}