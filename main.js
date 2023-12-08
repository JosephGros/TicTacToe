// Steg 1: DOM manipulering för att hämta in rutorna

const gameTiles = document.getElementsByClassName('grid-item');
const winnerParagraph = document.getElementById('winner');
winnerParagraph.style.fontWeight = "bolder";
console.log(gameTiles);

// Steg 2: lägg till eventlistener på alla element i arrayn gameTiles

for(let tile of gameTiles){
    tile.addEventListener('click', changeValue);
}

let whoPlays = "X";

// Steg 3: Skapar funktion som hanterar click event

function changeValue(){
    console.log("Tile click");
    if(this.innerHTML == "&nbsp;"){
        if(whoPlays === "X"){
            this.innerHTML = "X";
            whoPlays = "O"; // byta tur till O
        } else {
            this.innerHTML = "O";
            whoPlays = "X"; // byta tur till X
        }
    }
    checkWinner();
}

// Steg 4: Skapa funktion för att kolla

function checkWinner(){
    console.log("Checking winner");

    // Skapa if satser för att kolla alla möjliga vinster

    // 3 horizontela
    if(
        gameTiles[0].innerHTML != "&nbsp;" &&
        gameTiles[1].innerHTML === gameTiles[0].innerHTML &&
        gameTiles[2].innerHTML === gameTiles[1].innerHTML
    ){
        console.log(`${gameTiles[0].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[0].innerHTML + " is the winner!";
    }
    if(
        gameTiles[3].innerHTML != "&nbsp;" &&
        gameTiles[4].innerHTML === gameTiles[3].innerHTML &&
        gameTiles[5].innerHTML === gameTiles[4].innerHTML
    ){
        console.log(`${gameTiles[3].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[3].innerHTML + " is the winner!";
    }
    if(
        gameTiles[6].innerHTML != "&nbsp;" &&
        gameTiles[7].innerHTML === gameTiles[6].innerHTML &&
        gameTiles[8].innerHTML === gameTiles[7].innerHTML
    ){
        console.log(`${gameTiles[6].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[6].innerHTML + " is the winner!";
    }

    // 3 verticala

    if(
        gameTiles[0].innerHTML != "&nbsp;" &&
        gameTiles[3].innerHTML === gameTiles[0].innerHTML &&
        gameTiles[6].innerHTML === gameTiles[3].innerHTML
    ){
        console.log(`${gameTiles[0].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[0].innerHTML + " is the winner!";
    }
    if(
        gameTiles[1].innerHTML != "&nbsp;" &&
        gameTiles[4].innerHTML === gameTiles[1].innerHTML &&
        gameTiles[7].innerHTML === gameTiles[4].innerHTML
    ){
        console.log(`${gameTiles[1].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[1].innerHTML + " is the winner!";
    }
    if(
        gameTiles[2].innerHTML != "&nbsp;" &&
        gameTiles[5].innerHTML === gameTiles[2].innerHTML &&
        gameTiles[8].innerHTML === gameTiles[5].innerHTML
    ){
        console.log(`${gameTiles[2].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[2].innerHTML + " is the winner!";
    }

    // 2 diagonala

    if(
        gameTiles[0].innerHTML != "&nbsp;" &&
        gameTiles[4].innerHTML === gameTiles[0].innerHTML &&
        gameTiles[8].innerHTML === gameTiles[4].innerHTML
    ){
        console.log(`${gameTiles[0].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[0].innerHTML + " is the winner!";
    }
    if(
        gameTiles[2].innerHTML != "&nbsp;" &&
        gameTiles[4].innerHTML === gameTiles[2].innerHTML &&
        gameTiles[6].innerHTML === gameTiles[4].innerHTML
    ){
        console.log(`${gameTiles[2].innerHTML} Won!`);
        winnerParagraph.innerHTML = gameTiles[2].innerHTML + " is the winner!";
    }
}

// Steg 5: reset knapp

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetGame);

function resetGame(){
    console.log("Reset Game");
    for(let tile of gameTiles){
        tile.innerHTML = '&nbsp;';
    }
    whoPlays = "X";
    winnerParagraph.innerHTML = "";
}