import { Component } from '@angular/core';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component {
  toggle = false;
  onShowAnswer() {
      this.toggle = !this.toggle;
  }
}
