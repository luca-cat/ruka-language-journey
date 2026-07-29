const themeSwitchButton = document.getElementById('theme-switcher');
const pageBackground = document.querySelector('body');
const textColour = document.getElementsByClassName('regular-text');

themeSwitchButton.addEventListener('click', changeColour);


function changeColour() {
    pageBackground.style.backgroundColor = 'aliceblue';
    for (let text of textColour){
        text.style.color = 'black';
    }
}

const url = "http://127.0.0.1:8765";

async function getTotalCards(){
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action:"findCards",
                version: 5,
                params: {
                    query: "deck:sentencemining"
                }
            })
        });

        const data = await response.json();
        const totalNumberOfCards = data.result.length;
        return totalNumberOfCards;
}

totalCards = getTotalCards();
console.log(totalCards)