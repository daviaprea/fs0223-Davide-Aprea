import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages/auth",
    pathMatch: 'full'
  },
  {
    path: 'pages/auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
