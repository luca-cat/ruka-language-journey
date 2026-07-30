let isDark = false;


function changeColour(bg,colour) {
    pageBackground.style.backgroundColor = bg;
    for (let text of textColour){
        text.style.color =  colour;
    }
}

const themeSwitchButton = document.getElementById('theme-switcher');

themeSwitchButton.addEventListener("click", () =>{
    (isDark) ? changeColour('aliceblue','black') : changeColour('black','aliceblue');
    //example of a ternary operator
    isDark = !isDark;
    // =! is the NOT operator
})


const pageBackground = document.querySelector('body');
const textColour = document.getElementsByClassName('regular-text'); 


