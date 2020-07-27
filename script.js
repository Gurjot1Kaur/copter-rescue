var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0;
var counter=0;

//Event Listeners
hole.addEventListener('animationiteration',()=>{
    var random=((Math.random()*300)+250);/*game screen is visible for block if it is between -250 and -450 because we already have it on 500 positionat the first iteration */
    hole.style.top=-1*random+"px";
    counter++;//counts each animation
});

//Functions

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));/*gets the current top position of the character div whichis going to be 100px because that is what we set it to*/
    if(jumping === 0){
        character.style.top=characterTop+2 + "px";// so the top is pushed down by 3 units every 10 seconds to mimick gravity 
    }

    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop=-(500-characterTop);// taking charactertop value in negative because holetop is in negative
    if((characterTop>480)||((blockLeft<50)&&(blockLeft>-50)&&((cTop+50>holeTop+250)||(cTop<holeTop)))){/* ball has hit the bottom or the block is hitting the wall  */
        alert("Game Over. Score: "+ counter);
        character.style.top= 100+"px";//so that the character is at bottoon reload
        counter=0;
    } 
},10);/*function runs every 10 millisecond*/

function jump(){
    jumping=1;
    let jumpCount=0;
    var jumpInterval=setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));/*gets the current top position of the character div whichis going to be 100px because that is what we set it to*/
        if(characterTop>6 && jumpCount<15){/*Dont add to the top if characterTop<6 this means dont jump if it is on the border of the screen */
            character.style.top=characterTop-5 + "px";
        }
        
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}
