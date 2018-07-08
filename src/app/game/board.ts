import { Tile } from './tile';
import { Direction } from './UserInput';

export class Board {
    Board: Array<Tile>;

    constructor() {
        this.Board = new Array<Tile>(16);
        this.generateRandomTile(2);
        this.generateRandomTile(2);
    }

    /*  
        Initital version of the return tiles method, only returns value for now
        TODO:
            * Make a Tile template for tiles
            * Have angular use those templates to draw tiles
    */
   getTileValues() {
       let res = new Array<number>(16);
       for (let index = 0; index < this.Board.length; index++) {
           if (this.Board[index]) {
               res[index] = this.Board[index].Value;
           }
           else { res[index] = 0; }
       }
       return res;
   }

    /*
        Generates a new 2 tile in an empty board slot
    */
    generateRandomTile(tileValue: number) {
        let newTile: Tile = new Tile(tileValue);
        let indexList = this.getEmptyTiles();
        this.Board[Math.floor(Math.random() * indexList.length)] = newTile;
    }

    /*
        TODO
        Returns an array of indexes representing the empty Tiles on the board
    */
    getEmptyTiles() {
        var emptyArray: Array<number> = [];
        for (var i = 0; i < this.Board.length; i++) {
            if (!this.Board[i]) {
                emptyArray.push(i);
            }
        }
        return emptyArray;
    }

    /*
        Moves the Tile pieces based on user input
    */
    reCalculateTiles(userInput: Direction) {
        console.warn(Direction[userInput]);
    }
}