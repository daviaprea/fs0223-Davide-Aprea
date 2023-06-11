import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameformComponent } from './components/gameform/gameform.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'add', component: GameformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
