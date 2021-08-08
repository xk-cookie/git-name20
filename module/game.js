import showUI from './ui.js';
import {playerMove , isWin} from './player.js';


showUI()
var over = false
window.onkeydown = function (e){
    if(over){
        return;
    }
    if(e.key === 'ArrowUp'){
        playerMove('top')
    }
    else if(e.key === 'ArrowDown'){
        playerMove('bottom')
    }
    else if(e.key === 'ArrowLeft'){
        playerMove('left')
    }
    else if(e.key === 'ArrowRight'){
        playerMove('right')
    }

    showUI()
    if(isWin()){
        console.log('游戏结束');
        over = true;
    }

}