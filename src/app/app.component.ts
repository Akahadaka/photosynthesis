import { Component } from '@angular/core';

export interface spot {
  name: number;
  x: number;
  y: number;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playerSize: number = 300;
  boardSize: number = 1000;
  spotSize: number = 136;
  offset: number = 4;
  offsetX: number = 13;
  offsetY: number = this.spotSize/2 + this.offset/2;
  cX: number = this.boardSize/2 - this.spotSize/2 + this.offset/2;
  cY: number = this.boardSize/2 - this.spotSize/2 + this.playerSize + this.offset/2;

  p4: spot[] = [
    { name: 0, x: this.cX, y: this.cY, value: 4 },
  ];
  p3: spot[] = [
    // Inner top
    { name: 0, x: this.cX - (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset) + this.offsetY, value: 3 },
    { name: 1, x: this.cX - (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset) - this.offsetY, value: 3 },
    // Inner left and right
    { name: 2, x: this.cX, y: this.cY - (this.spotSize + this.offset), value: 3 },
    { name: 3, x: this.cX, y: this.cY + (this.spotSize + this.offset), value: 3 },
    // Inner bottom
    { name: 4, x: this.cX + (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset) + this.offsetY, value: 3 },
    { name: 5, x: this.cX + (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset) - this.offsetY, value: 3 },

  ];
  p2: spot[] = [
    // Middle middle left and right top
    { name: 0, x: this.cX - (this.spotSize - this.offsetX)*2, y: this.cY - (this.spotSize + this.offset), value: 2 },
    { name: 1, x: this.cX - (this.spotSize - this.offsetX)*2, y: this.cY + (this.spotSize + this.offset), value: 2 },
    // Middle middle top
    { name: 2, x: this.cX - (this.spotSize - this.offsetX)*2, y: this.cY, value: 2 },
    // Middle middle left and right above
    { name: 3, x: this.cX - (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset)*2 + this.offsetY, value: 2 },
    { name: 4, x: this.cX - (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset)*2 - this.offsetY, value: 2 },
    // Middle left and right
    { name: 5, x: this.cX, y: this.cY - (this.spotSize + this.offset)*2, value: 2 },
    { name: 6, x: this.cX, y: this.cY + (this.spotSize + this.offset)*2, value: 2 },
    // Middle middle left and right below
    { name: 7, x: this.cX + (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset)*2 + this.offsetY, value: 2 },
    { name: 8, x: this.cX + (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset)*2 - this.offsetY, value: 2 },
    // Middle middle bottom
    { name: 9, x: this.cX + (this.spotSize - this.offsetX)*2, y: this.cY, value: 2 },
    // Middle middle left and right bottom
    { name: 10, x: this.cX + (this.spotSize - this.offsetX)*2, y: this.cY - (this.spotSize + this.offset), value: 2 },
    { name: 11, x: this.cX + (this.spotSize - this.offsetX)*2, y: this.cY + (this.spotSize + this.offset), value: 2 },
  ];
  p1: spot[] = [
    // Left and right top
    { name: 0, x: this.cX - (this.spotSize - this.offsetX)*3, y: this.cY - (this.spotSize + this.offset)*2 + this.offsetY*3, value: 1 },
    { name: 1, x: this.cX - (this.spotSize - this.offsetX)*3, y: this.cY + (this.spotSize + this.offset)*2 - this.offsetY*3, value: 1 },
    // Outer left and right top
    { name: 2, x: this.cX - (this.spotSize - this.offsetX)*3, y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY*3, value: 1 },
    { name: 3, x: this.cX - (this.spotSize - this.offsetX)*3, y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY*3, value: 1 },
    // Outer above left and right
    { name: 4, x: this.cX - (this.spotSize - this.offsetX)*2, y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY*2, value: 1 },
    { name: 5, x: this.cX - (this.spotSize - this.offsetX)*2, y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY*2, value: 1 },
    // Outer middle left and right
    { name: 6, x: this.cX - (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY, value: 1 },
    { name: 7, x: this.cX - (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY, value: 1 },
    // Outer left and right
    { name: 8, x: this.cX, y: this.cY - (this.spotSize + this.offset)*3, value: 1 },
    { name: 9, x: this.cX, y: this.cY + (this.spotSize + this.offset)*3, value: 1 },
    // Outer middle left and right
    { name: 10, x: this.cX + (this.spotSize - this.offsetX), y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY, value: 1 },
    { name: 11, x: this.cX + (this.spotSize - this.offsetX), y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY, value: 1 },
    // Outer below left and right
    { name: 12, x: this.cX + (this.spotSize - this.offsetX)*2, y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY*2, value: 1 },
    { name: 13, x: this.cX + (this.spotSize - this.offsetX)*2, y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY*2, value: 1 },
    // Outer left and right bottom
    { name: 14, x: this.cX + (this.spotSize - this.offsetX)*3, y: this.cY - (this.spotSize + this.offset)*3 + this.offsetY*3, value: 1 },
    { name: 15, x: this.cX + (this.spotSize - this.offsetX)*3, y: this.cY + (this.spotSize + this.offset)*3 - this.offsetY*3, value: 1 },
    // Left and right bottom
    { name: 16, x: this.cX + (this.spotSize - this.offsetX)*3, y: this.cY - (this.spotSize + this.offset)*2 + this.offsetY*3, value: 1 },
    { name: 17, x: this.cX + (this.spotSize - this.offsetX)*3, y: this.cY + (this.spotSize + this.offset)*2 - this.offsetY*3, value: 1 },
  ];

  sun1: [
    [{p:1,s:2}, {p:1,s:4}, {p:1,s:6}, {p:1,s:8}],
    [{p:1,s:0}, {p:2,s:0}, {p:2,s:3}, {p:2,s:5}, {p:1,s:10}],
    [{p:1,s:1}, {p:2,s:2}, {p:3,s:0}, {p:3,s:2}, {p:2,s:7}, {p:1,s:12}],
    [{p:1,s:3}, {p:2,s:1}, {p:3,s:1}, {p:4,s:0}, {p:3,s:4}, {p:2,s:10}, {p:1,s:14}],
    [{p:1,s:5}, {p:2,s:4}, {p:3,s:3}, {p:3,s:5}, {p:2,s:9}, {p:1,s:16}],
    [{p:1,s:7}, {p:2,s:6}, {p:2,s:8}, {p:2,s:11}, {p:1,s:17}],
    [{p:1,s:9}, {p:1,s:11}, {p:1,s:13}, {p:1,s:15}]
  ];

  
}
