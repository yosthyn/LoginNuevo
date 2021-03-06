import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
(path: '', component: LoginComponent, pathMatch: 'Full'),
(path: 'Login', component: '', pathMatch: '')
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
