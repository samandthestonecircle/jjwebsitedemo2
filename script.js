function showSoundDesignMenu(){
    document.getElementById("sound-designer-nav").style.display = "flex";     
    document.getElementById("audio-engineer-nav").style.display = "none";
}

function showAudioEngineerMenu(){
    document.getElementById("sound-designer-nav").style.display = "none";
    document.getElementById("audio-engineer-nav").style.display = "flex";
}

function hideAllMenus(){
    document.getElementById("sound-designer-nav").style.display = "none";
    document.getElementById("audio-engineer-nav").style.display = "none";
}

function homePage(){  
    document.getElementById("landing-page").style.display = "flex";
    document.getElementById("sd-portfolio").style.display = "none";
    document.getElementById("sd-services").style.display = "none";
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}



function sdPortfolio(){    
    document.getElementById("sd-portfolio").style.display = "block";
    

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-services").style.display = "none";
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function sdServices(){    
     document.getElementById("sd-services").style.display = "flex";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none";   
    document.getElementById("sd-about").style.display = "none";
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function sdAbout(){    
     document.getElementById("sd-about").style.display = "flex";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none";      
    document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}



function aeDiscography(){    
     document.getElementById("ae-discography").style.display = "flex";

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
     document.getElementById("sd-about").style.display = "none";        
    document.getElementById("ae-services").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function aeServices(){    
    document.getElementById("ae-services").style.display = "flex";   

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
     document.getElementById("sd-about").style.display = "none";        
      document.getElementById("ae-discography").style.display = "none";
    document.getElementById("ae-about").style.display = "none";  
}

function aeAbout(){    
    document.getElementById("ae-about").style.display = "flex";   

    document.getElementById("landing-page").style.display = "none";
    document.getElementById("sd-portfolio").style.display = "none"; 
    document.getElementById("sd-services").style.display = "none"; 
     document.getElementById("sd-about").style.display = "none";    
         document.getElementById("ae-services").style.display = "none";     
      document.getElementById("ae-discography").style.display = "none";
     
}





function lightFire(){
    document.getElementById("fire-sprite").src = "fire-sprite.gif";
}

function douseFire(){
    document.getElementById("fire-sprite").src = "fire-sprite.png";
}

function pressButton(){
    document.getElementById("button-sprite").src = "button-sprite.gif";
}

function noButton(){
    document.getElementById("button-sprite").src = "button-sprite.png";
}

function waterPlant(){
    document.getElementById("plant-sprite").src = "plant-sprite.gif";
}

function noPlant(){
    document.getElementById("plant-sprite").src = "plant-sprite.png";
}


function showGamepad(){
    document.getElementById("gamepad").style.opacity = "1";
}
function hideGamepad(){
     document.getElementById("gamepad").style.opacity = "0";
}

function showClapper(){
    document.getElementById("clapper").style.opacity = "1";
}
function hideClapper(){
     document.getElementById("clapper").style.opacity = "0";
}

function showHeadphones(){
    document.getElementById("headphones").style.opacity = "1";
}
function hideHeadphones(){
    document.getElementById("headphones").style.opacity = "0";
}

function showJblCredit(){
    document.getElementById("jbl-storybook").style.opacity = "1";
}
function hideJblCredit(){
    document.getElementById("jbl-storybook").style.opacity = "0";
}

function showStCredit(){
    document.getElementById("StUnreal").style.opacity = "1";
}
function hideStCredit(){
    document.getElementById("StUnreal").style.opacity = "0";
}

function showSfCredit(){
    document.getElementById("finkle-text").style.opacity = "1";
}
function hideSfCredit(){
    document.getElementById("finkle-text").style.opacity = "0";
}

function showSsCredit(){
    document.getElementById("ss-text").style.opacity = "1";
}
function hideSsCredit(){
    document.getElementById("ss-text").style.opacity = "0";
}

function animateGoblin(){
    document.getElementById("goblin").src = "GoblinOccultist.gif"
}

function killGoblin(){
    document.getElementById("goblin").src = "GoblinOccultist.png"
}

function showMixer(){
    document.getElementById("mixer").style.opacity = "1";
}
function hideMixer(){
    document.getElementById("mixer").style.opacity = "0";
}

function showSpeaker(){
    document.getElementById("speaker").style.opacity = "1";
}
function hideSpeaker(){
    document.getElementById("speaker").style.opacity = "0";
}

function showKeyboard(){
    document.getElementById("keyboard").style.opacity = "1";
}
function hideKeyboard(){
    document.getElementById("keyboard").style.opacity = "0";
}

function showMicrophone(){
    document.getElementById("microphone").style.opacity = "1";
}
function hideMicrophone(){
    document.getElementById("microphone").style.opacity = "0";
}
