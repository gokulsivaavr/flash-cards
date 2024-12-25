import { Component } from '@angular/core';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css']
})
export class Card5Component {
  toggle = false;
  onShowAnswer() {
      this.toggle = !this.toggle;
  }
}
