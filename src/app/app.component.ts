import { Component, OnInit } from '@angular/core';
import { Board } from './game/board';
import { HostListener } from '@angular/core';
import { Direction } from './game/UserInput';

@Component({
  selector: 'my-app',
  template: `
    <div id="Main" class="Main-Container">
      <div id="Board" class="Board-Container">
      </div>
    </div>
  `,
})

export class AppController implements OnInit {
  GameBoard: Board;

  ngOnInit() {
    this.GameBoard = new Board();
    this.reDraw();
  }

  /*
    Quick implementation to get the board up so we have something to look at
    Todo:
      * Re-implement using angular components
  */
  reDraw() {
    let doc = document.getElementById('Board');
    doc.innerHTML = '';
    for (let tileValue of this.GameBoard.getTileValues()) {
      let tile = document.createElement('div');
      tile.setAttribute('class', 'Tile');
      tile.innerText = tileValue.toString();
      doc.appendChild(tile);
    }
  }


  @HostListener('document:keypress', ['$event'])
  DoUserAction(event: KeyboardEvent) {
    switch(event.code) {
      case 'KeyA':
        this.GameBoard.reCalculateTiles(Direction.Left);
        break;
      case 'KeyS':
        this.GameBoard.reCalculateTiles(Direction.Down);
        break;
      case 'KeyD':
        this.GameBoard.reCalculateTiles(Direction.Right);
        break;
      case 'KeyW':
        this.GameBoard.reCalculateTiles(Direction.Up);
        break;
    }
    this.reDraw();
  }
}
