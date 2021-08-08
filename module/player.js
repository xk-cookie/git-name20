import * as map from './map.js';


export function playerMove(direction) {
    const player = getPlayerPoint();
    const row = player.row;
    const col = player.col;

    const nextInfo = getNextInfo(direction, row, col);
    // 下一步是墙  不能移动
    if (nextInfo.value == map.WALL) {
        return false;
    }
    else if(nextInfo.value == map.BOX){
        const nextNextInfos = nextNextInfo(direction,nextInfo.row,nextInfo.col);

        console.log(nextNextInfos)

        if(nextNextInfos.value == map.WALL || nextNextInfos.value == map.BOX){
            return;
        }
        else{
            exchange(nextInfo,nextNextInfos);
            exchange(player,nextInfo);
            return true;
        }

    }
    else {
        exchange(player,nextInfo);
    }
    

}

export function isWin(){
    for (const itme of map.correct) {
        
        
        if(map.content[itme.row][itme.col] !== map.BOX){
            return false;
        }
    }
    return true;
}


// 下一步的交换信息
function exchange(player1,player2){
    let record = map.content[player1.row][player1.col];
    map.content[player1.row][player1.col] =  map.content[player2.row][player2.col];
    map.content[player2.row][player2.col] = record;
}

// 下一步的信息
function getNextInfo(direction, row, col) {
    if (direction == 'left') {
        return {
            row: row,
            col: col - 1,
            value: map.content[row][col - 1]
        };
    }
    else if (direction == 'right') {
        return {
            row: row,
            col: col + 1,
            value: map.content[row][col + 1]
        };
    }
    else if (direction == 'top') {
        return {
            row: row - 1,
            col: col,
            value: map.content[row - 1][col]
        }
    }
    else if (direction == 'bottom') {
        return {
            row: row + 1,
            col: col,
            value: map.content[row + 1][col]
        };
    }

}

function nextNextInfo(direction, row, col) {
    return getNextInfo(direction, row, col);
}


// 玩家所在位置
function getPlayerPoint() {
    for (let row = 0; row < map.content.length; row++) {
        for (let col = 0; col < map.content[0].length; col++) {
            if (map.content[row][col] == map.PLAYER) {

                return {
                    row: row,
                    col: col
                }
            }

        }

    }
}











// if(direction == 'left'){
//     return  map.content[row][col + 1];
//   }
//   else if(direction == 'left'){

//   }