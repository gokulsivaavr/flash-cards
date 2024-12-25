import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { Card4Component } from './card4/card4.component';
import { Card5Component } from './card5/card5.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'card2', component: Card2Component},
  { path: 'card3', component: Card3Component},
  { path: 'card4', component: Card4Component},
  { path: 'card5', component: Card5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
