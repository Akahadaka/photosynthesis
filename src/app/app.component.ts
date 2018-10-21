import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Point {
  x: number;
  y: number;
}

export interface Tile {
  id: number;
  value: number;
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
  offset: Point = { y: 13, x: this.tileSize/2 + this.margin/2 };
  center: Point = { 
    x: this.boardSize/2 - this.tileSize/2 + this.playerSize + 20,
    y: this.boardSize/2 - this.tileSize/2,
  }
  tree: Point;

  tiles: Tile[] = [
    // Level 1
    { id: 0, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 1, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*2, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 2, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x , y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 3, value: 1, x: this.center.x + (this.tileSize + this.margin)*3, y: this.center.y },
    { id: 4, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 5, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*2, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 6, value: 1, x: this.center.x + (this.tileSize + this.margin)*3 - this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 7, value: 1, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 8, value: 1, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 9, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*3, y: this.center.y + (this.tileSize - this.offset.y)*3 },
    { id: 10, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*2, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 11, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 12, value: 1, x: this.center.x - (this.tileSize + this.margin)*3, y: this.center.y },
    { id: 13, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 14, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*2, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 15, value: 1, x: this.center.x - (this.tileSize + this.margin)*3 + this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 16, value: 1, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
    { id: 17, value: 1, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x*3, y: this.center.y - (this.tileSize - this.offset.y)*3 },
     // Level 2
    { id: 18, value: 2, x: this.center.x + (this.tileSize + this.margin), y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 19, value: 2, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 20, value: 2, x: this.center.x + (this.tileSize + this.margin)*2, y: this.center.y },
    { id: 21, value: 2, x: this.center.x + (this.tileSize + this.margin)*2 - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 22, value: 2, x: this.center.x + (this.tileSize + this.margin), y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 23, value: 2, x: this.center.x, y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 24, value: 2, x: this.center.x - (this.tileSize + this.margin), y: this.center.y + (this.tileSize - this.offset.y)*2 },
    { id: 25, value: 2, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 26, value: 2, x: this.center.x - (this.tileSize + this.margin)*2, y: this.center.y },
    { id: 27, value: 2, x: this.center.x - (this.tileSize + this.margin)*2 + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 28, value: 2, x: this.center.x - (this.tileSize + this.margin), y: this.center.y - (this.tileSize - this.offset.y)*2 },
    { id: 29, value: 2, x: this.center.x, y: this.center.y - (this.tileSize - this.offset.y)*2 },
    // Level 3
    { id: 30, value: 3, x: this.center.x + (this.tileSize + this.margin) - this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    { id: 31, value: 3, x: this.center.x + (this.tileSize + this.margin), y: this.center.y },
    { id: 32, value: 3, x: this.center.x + (this.tileSize + this.margin) - this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 33, value: 3, x: this.center.x - (this.tileSize + this.margin) + this.offset.x, y: this.center.y + (this.tileSize - this.offset.y) },
    { id: 34, value: 3, x: this.center.x - (this.tileSize + this.margin), y: this.center.y },
    { id: 35, value: 3, x: this.center.x - (this.tileSize + this.margin) + this.offset.x, y: this.center.y - (this.tileSize - this.offset.y) },
    // Level 4
    { id: 36, x: this.center.x, y: this.center.y, value: 4 },
  ];

  sun1: [
    [{p:1,t:15}, {p:1,t:14}, {p:1,t:13}, {p:1,t:12}],
    [{p:1,t:16}, {p:2,t:28}, {p:2,t:27}, {p:2,t:26}, {p:1,t:11}],
    [{p:1,t:17}, {p:2,t:29}, {p:3,t:35}, {p:3,t:34}, {p:2,t:25}, {p:1,t:10}],
    [{p:1,t:0}, {p:2,t:18}, {p:3,t:30}, {p:4,t:36}, {p:3,t:33}, {p:2,t:24}, {p:1,t:9}],
    [{p:1,t:1}, {p:2,t:1}, {p:3,t:31}, {p:3,t:32}, {p:2,t:23}, {p:1,t:8}],
    [{p:1,t:2}, {p:2,t:19}, {p:2,t:3}, {p:2,t:22}, {p:1,t:7}],
    [{p:1,t:3}, {p:1,t:20}, {p:1,t:5}, {p:1,t:6}]
  ];

  constructor() {
    this.log('Game started with 1 player');
    //this.log('26: '+this.tiles[26].x + ',' + this.tiles[26].y)
  }

  onDrag(event) {
    this.tree = {x: event.x, y: event.y};
  }

  onDrop(el) {
    this.log('dropped at ' + this.tree.x + ',' + this.tree.y);
    //let nearest: number = -1;
    // First check in bounds
    /*
    if (this.tree.x <= this.playerSize || this.tree.x > this.playerSize + this.boardSize + (this.tileSize/2)
      || this.tree.y <= this.tileSize/2 || this.tree.y > this.boardSize + (this.tileSize/2)) {
        this.log('Out of bounds');
        return;
      }
    */
    let inRange: Tile[] = [];
    let range = this.tileSize/2;
    let offset = this.tileSize - this.margin*6;
    this.tiles.forEach(tile => {
      // Check within reasonable range
      if (Math.abs(tile.x - this.tree.x) <= range && Math.abs(tile.y - offset - this.tree.y) <= range) {
        el.style.transform = 'translate(' + (tile.x - this.margin - 2) + 'px,' + (tile.y - offset + this.margin*2) + 'px)';
        this.log('Found ' + tile.id + ' (' + Math.abs(tile.x - offset - this.tree.x) + ',' + Math.abs(tile.y - this.tree.y) + ')');
        console.log(el);
      } 

    });
    
  }

  log(msg: string) {
    let d = new Date();
    this.logger.push({time: d.getHours() + ':' + d.getMinutes(), message: msg});
  }
}
