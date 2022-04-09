const word = "clone";
const guessAllowed = 6;
const lettersMax = 5;
var current = 1;

const game = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
}; 



function buildBoard(){
    const cell = `<div class="cell"></div>`;
    const row_start = `<div class="row">`;
    const row_end = `</div>`;
    var in_board = "";

    for(var i = 0; i < guessAllowed; i++){
        in_board += row_start;
        for(var j = 0; j < lettersMax; j ++)
            in_board += cell;
        in_board += row_end;
    }

    return in_board;
}

/**After Deadline of 9:00 */
function buildKeyboard(){
    const row1 = ["q","w","e","r","t","y","u","i","o","p"];
    const row2 = ["a","s","d","f","g","h","j","k","l"];
    const row3 = ["enter","z","x","c","v","b","n","m","o","p"];
    const cell = ` <button data-key="q">q</button>`;
    const row_start = `<div class="keyboard-row">`;
    const row_end = `</div>`;
    var in_board = "";

    for(var i = 0; i < guessAllowed; i++){
        in_board += row_start;
        for(var j = 0; j < lettersMax; j ++)
            in_board += cell;
        in_board += row_end;
    }

    return in_board;
}

function addListeners(){
    const rows = document.querySelectorAll(".keyboard-row");
    rows.forEach( row => {
        const buttons  = row.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", check);
        })
    });
}

function check(event){
    const val = event.target.getAttribute("data-key");
    if(val == "enter"){
        if(game[current].length !== lettersMax){
            window.alert("Word Length Not Reached. Please try again");
            rebuildBoard();
        }else{
            rebuildBoard(true);
        }
    }else if(val == "del"){
        removeElement();
        rebuildBoard();
    }else{
        addElement(val);
        rebuildBoard();
    }
    
}

function rebuildBoard(fin = false){
    const upper = word.toUpperCase();
    const check = upper.split("");
    const row = document.querySelectorAll(".row")[current - 1];
    var guess = game[current];
    
    var new_row = "";
    if(fin){
        for(var i = 0; i < lettersMax; i++){
            var c = "";
            if(guess[i] == check[i]){
                c = `<div class="cell success">${guess[i]}</div>`;
            }else if(check.includes(guess[i])){
                c = `<div class="cell close">${guess[i]}</div>`;
            }else{
                c = `<div class="cell no-success">${guess[i]}</div>`;
            }
            new_row += c;
        }
        current++;
    }else{
        for(var i = 0; i < guess.length; i++){
            var c = `<div class="cell">${guess[i]}</div>`;
            new_row += c;
        }
        for(var i = 0; i < check.length - guess.length; i++)
            new_row += `<div class="cell"></div>`
    } 
    row.innerHTML = new_row;
}

function addElement(val){
    if(game[current].length !== lettersMax){
        game[current].push(val.toUpperCase());
    }
}

function removeElement(){
    if(game[current].length !== 0){
        game[current].pop();
    }
}

function main(){
   const board = document.querySelector(".board");
   board.innerHTML = buildBoard();
   addListeners();
}

window.addEventListener("load", main);