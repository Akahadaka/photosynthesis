import { Component } from '@angular/core';

export interface Point {
  x: number;
  y: number;
}

export interface Tile {
  id: number;
  value: number;
  size: number;
  shade: boolean;
  x: number;
  y: number;
}

export interface Log {
  time: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logger: Log[] = [];

  playerSize: number = 300;
  boardSize: number = 1000;
  tileSize: number = 136;
  margin: number = 4;
  offset: Point = { x: this.tileSize/2 + this.margin/2, y: 13 };
  center: Point = { 
    x: this.boardSize/2 - this.tileSize/2 + this.playerSize + 20,
    y: this.boardSize/2 - this.tileSize/2,
  }
  tree: Point;

  tiles: Tile[] = [
    // Level 1
    { id: 0, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 1, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*2, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 2, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x , y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 3, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3, y: this.center.y },
    { id: 4, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 5, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*2, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 6, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 7, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 8, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 9, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 10, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*2, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 11, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 12, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3, y: this.center.y },
    { id: 13, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 14, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*2, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 15, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 16, value: 1, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 17, value: 1, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
     // Level 2
    { id: 18, value: 2, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin), y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 19, value: 2, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 20, value: 2, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*2, y: this.center.y },
    { id: 21, value: 2, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 22, value: 2, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin), y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 23, value: 2, size: -1, shade: false, x: this.center.x, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 24, value: 2, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin), y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 25, value: 2, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 26, value: 2, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*2, y: this.center.y },
    { id: 27, value: 2, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 28, value: 2, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin), y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 29, value: 2, size: -1, shade: false, x: this.center.x, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    // Level 3
    { id: 30, value: 3, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin) - this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 31, value: 3, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin), y: this.center.y },
    { id: 32, value: 3, size: -1, shade: false, x: this.center.x + (this.tileSize + this.margin) - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 33, value: 3, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin) + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 34, value: 3, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin), y: this.center.y },
    { id: 35, value: 3, size: -1, shade: false, x: this.center.x - (this.tileSize + this.margin) + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    // Level 4
    { id: 36, value: 4, size: -1, shade: false, x: this.center.x, y: this.center.y },
  ];

  sun = [
    [
      [ 15, 14, 13, 12 ],
      [ 16, 28, 27, 26, 11 ],
      [ 17, 29, 35, 34, 25, 10 ],
      [ 0, 18, 30, 36, 33, 24, 9 ],
      [ 1, 19, 31, 32, 23, 8 ],
      [ 2, 20, 21, 22, 7 ],
      [ 3, 4, 5, 6 ]
    ]
  ];

  play1 = {
    sun: 12,
    board: {
        seeds: [],
        saplings: [],
        youth: [],
        prime: []
    },
    stash: {
        seeds: [true, true],
        saplings: [true, true],
        youth: [true],
        prime: []
    },
    shop: {
        seeds: [{1: true}, {1: true}, {1: true}, {1: true}],
        saplings: [{2: true}, {2: true}, {3: true}, {3: true}],
        youth: [{3: true}, {3: true}, {3: true}],
        prime: [{4: true}, {5: true}]
    },
    wood: 0
  };

  constructor() {
    this.log('Game started with 1 player');
  }

  onDrag(event) {
    this.tree = {x: event.x, y: event.y};
  }

  onDrop(el, size) {
    let range = this.tileSize/2;
    let offset = this.tileSize - this.margin*6;
    this.tiles.some(tile => {
      // Check within reasonable range
      if (Math.abs(tile.x - this.tree.x) <= range && Math.abs(tile.y - offset - this.tree.y) <= range) {
        el.style.transform = 'translate(' + (tile.x - this.margin - 8) + 'px,' + (tile.y - offset + 2) + 'px)';
        this.tiles[tile.id].size = size;
        return true;
      }
      return false;
    });

    this.shadowCalc();
    
  }

  sunPos(id: number) {
    return this.sun[0].some(rays => {
      return (rays[0] == id);
    });
  }

  shadowCalc() {
    this.shadowClear();
    this.sun[0].forEach(rays => {
      rays.forEach((tile, i) => {
        let size = this.tiles[tile].size;
        if (size > 0) {
          for (let j = i+1; j < i + size + 1; j++) {
            if (rays[j] && this.tiles[rays[j]].size <= size) {
              this.tiles[rays[j]].shade = true;
            }
          }
        }
      });
    });
  }

  shadowClear() {
    this.tiles.forEach(tile => {
      this.tiles[tile.id].shade = false;
    });
    console.log(this.tiles);
  }

  log(msg: string) {
    let d = new Date();
    this.logger.push({time: d.getHours() + ':' + d.getMinutes(), message: msg});
  }
}
