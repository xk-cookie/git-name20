
import * as map from './map.js';

const game = document.querySelector('#game');
const width = 45;
const height = 45;



function setDivContainer(){
    game.style.width = width * map.colNumber + "px"; 
    game.style.height = height * map.rowNumber + "px";
}



function setBox(row, col){
    var div = document.createElement('div');
    div.className = 'item';
    game.appendChild(div);
    
    
    if(map.content[row][col] == map.PLAYER){
        div.classList.add('player');
    }
    else if(map.content[row][col] == map.WALL){
        div.classList.add('wall');
        
    }
    else if(map.content[row][col] == map.BOX){
        if(isCorrect(row,col)){
            div.classList.add('correct-box');
        }
        else{
            div.classList.add('box');
        }
    }
    else if(map.content[row][col] == map.SPACE){
        if(isCorrect(row,col)){
            div.classList.add('correct');
        }else{
            return;
        }
    }
    

    div.style.left = col * width + 'px';
    div.style.top = row * height + 'px';
    
}




function isCorrect(row,col){
   return map.correct.find(item => item.row == row && item.col == col);
}



function setContent(){
    game.innerHTML = '';
    var i = 0;
    for (const row of map.content) {  
        for (let col = 0; col < row.length; col++) {
            setBox(i, col);
            
        }
    i++;
    }
}

export default function(){
    setContent();
    setDivContainer();
}
