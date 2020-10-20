//Robot is sitting on the upper left corner of a grid with r rows and c columns. The robot can only move in two directions, right and down.
//Also certain cells are "off limits" such that the robot cannot step on them. Desin an algorithm to find a path for the robot from the top left to bottom right.

function robotGrid(r, c, grid, path){

    let rows = grid.length-1;
    let cols = grid[0].length-1;

    if(r === rows && c === cols && grid[r][c] === 0){
        console.log(path)
        return true
    }
    if(!grid[r] || grid[r][c] !== 0){
        return false
    }

     if(robotGrid(r+1,c,grid,path+"Down") || robotGrid(r,c+1,grid,path+"Right")){
         return path
     }
}



let theyGrid = [[0, 0, 0],
                [0, 1, 1],
                [0, 0, 0]];
console.log(robotGrid(0,0,theyGrid,""));