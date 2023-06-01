import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './parts/pages/todo/todo.component';
import { CompletatiComponent } from './parts/pages/completati/completati.component';

const routes: Routes = [
  {
    path: "",
    component: TodoComponent
  },
  {
    path: "completati",
    component: CompletatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
