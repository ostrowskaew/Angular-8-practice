import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  receivedNum: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(numEmitted: number){
    if(numEmitted % 2 === 0){
      this.evenNumbers.push(numEmitted);
    }
    else{
      this.oddNumbers.push(numEmitted);
    }
  }

}


