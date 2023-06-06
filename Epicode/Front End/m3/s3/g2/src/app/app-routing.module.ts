import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempformpageComponent } from './parts/pages/tempformpage/tempformpage.component';
import { ReactformpageComponent } from './parts/pages/reactformpage/reactformpage.component';

const routes: Routes = [
  {
    path:"",
    component: TempformpageComponent
  },
  {
    path:"ReactiveForm",
    component: ReactformpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
