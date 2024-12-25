import { Component } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {

  toggle = false;
  onShowAnswer() {
      this.toggle = !this.toggle;
  }
}
