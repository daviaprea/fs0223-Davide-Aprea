import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegformComponent } from './components/regform/regform.component';
import { LogformComponent } from './components/logform/logform.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'register', component: RegformComponent },
  { path: 'login', component: LogformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
