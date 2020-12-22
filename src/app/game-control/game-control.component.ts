import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNum = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNum + 1);
      this.lastNum ++ ;
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }
}
