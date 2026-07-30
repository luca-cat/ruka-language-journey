async function ankiConnectAPI(action, param = {}){
    const url = "http://127.0.0.1:8765";

    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action: action,
                version: 6,
                params: param
            })
        });

        const data = await response.json();

        return data.result;
}


async function getTotalCards(action, param){
    const cardIds = await ankiConnectAPI(action,param)
    return cardIds.length;
}

async function getTotalKanji(){

    let kanjiArray = [];    

    const allCardIds = await ankiConnectAPI("findNotes",{query:"deck:sentencemining"});

    const cardInfo = await ankiConnectAPI("notesInfo", {notes: allCardIds})

    for (let i = 0; i < allCardIds.length; i++){
        
        let word = cardInfo[i].fields.Word.value;
        
        for (let letter of word){

        if (wanakana.isKana(letter)){
            //uses wanakana library to check if the letter is Kana or not
            continue;
        }
        else if (kanjiArray.includes(letter)){
            continue;
        }
        else{
            kanjiArray.push(letter);
        }
    }
    }
    return kanjiArray.length;
    
}

async function main(){

    const totalCards = await getTotalCards("findNotes",{query:"deck:sentencemining"});
    //gets the total card as a value

    const totalCardStat = document.getElementById("total-cards");
    totalCardStat.textContent = totalCards;
    //changes the DOM to chosen textContent
    
    const totalKanjiCount = await getTotalKanji();
    //gets total kanji count
    const kanjiStat = document.getElementById("kanji-count");
    kanjiStat.textContent = totalKanjiCount;

    let getRandomWord = () =>{
        
    }

}
main();
